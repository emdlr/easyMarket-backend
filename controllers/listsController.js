const express = require("express");
const router = express.Router();

const StoreModel = require("../models").Store;
const ProductModel = require("../models").Product;
const PriceModel = require("../models").Price;
const CategoryModel = require("../models").Category;
const UnitModel = require("../models").Unit;
const ListModel = require("../models").List;

//GET LIST PRODUCT STATUSES
router.get("/lists", async (req,res) =>{
    const list = await ListModel.findAll({where:{userId:req.query.user,listName:req.query.name},
                                          attributes:["listName","pickedStatus"]});
    res.json({list})
});
//GET STORES DATA
router.get("/stores", async (req,res) =>{
    const stores = await StoreModel.findAll({order:["description"]});
    res.json({stores})
});
//GET CATEGORIES DATA
router.get("/categories", async (req,res) =>{
    const categories = await CategoryModel.findAll({order:["id"]});
    res.json({categories})
});
//GET ALL PRODUCT DATA FROM A STORE
router.get("/stores/:id/products", async (req,res) =>{
    const prices = await PriceModel.findAll({where:{storeId:req.params.id},
                                            include:[{
                                                model:ProductModel,
                                                include:[{
                                                    model:UnitModel
                                                }]
                                            }],order:[[ProductModel,"categoryId"]]});
    res.json({prices})
});
//CREATE LIST FROM PREVIEW
router.post("/lists", async (req,res) =>{
    const list = await ListModel.bulkCreate(req.body,{returning:true});
    res.json({list})
});
//UPDATES LIST PICKED STATUS
router.put("/lists/:id", async (req,res) =>{
    let list = await ListModel.update({pickedStatus:req.body.newStatus},{where:{id:req.params.id},returning: true});
    res.json({list})
  });

//DELETES LISTS FROM USER
router.delete("/lists/:name/user/:id", async (req,res) =>{
    let list = await ListModel.destroy({where:{userId:req.params.id,listName:req.params.name}});
    res.json({list})
  });
module.exports = router;
