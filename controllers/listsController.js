const express = require("express");
const router = express.Router();

const StoreModel = require("../models").Store;
const ProductModel = require("../models").Product;
const PriceModel = require("../models").Price;
const CategoryModel = require("../models").Category;
const UnitModel = require("../models").Unit;
const ListModel = require("../models").List;

router.get("/stores", async (req,res) =>{
    const stores = await StoreModel.findAll({order:["description"]});
    res.json({stores})
});
router.get("/categories", async (req,res) =>{
    const categories = await CategoryModel.findAll({order:["id"]});
    res.json({categories})
});
router.get("/stores/:id/products", async (req,res) =>{
    const prices = await PriceModel.findAll({where:{storeId:req.params.id},
                                            include:[{
                                                model:ProductModel,
                                                include:[{
                                                    model:UnitModel
                                                }]
                                            }]});
    res.json({prices})
});

router.post("/lists", async (req,res) =>{
    const list = await ListModel.bulkCreate(req.body,{returning:true});
    res.json({list})
});
module.exports = router;
