const express = require("express");
const router = express.Router();

const UserModel = require("../models").User;
const ListModel = require("../models").List;
const ProductModel = require("../models").Product;
const UnitModel = require("../models").Unit;
const CategoryModel = require("../models").Category;

// GET USERS PROFILE AND THEIR LISTS DATA
router.get("/profile/:id", async (req, res) => {
  let user = await UserModel.findByPk(req.params.id,{include:[{
                                                    model:ListModel,
                                                    attributes:["id","listName","quantity","cost","pickedStatus"],
                                                    include:[{
                                                      model:ProductModel,
                                                      attributes:["id","description","picture"],
                                                      include:[{
                                                          model:UnitModel,
                                                          attributes:["description"]
                                                          },
                                                          {
                                                          model:CategoryModel,
                                                          attributes:["description"]
                                                        }]
                                                      }]
                                                    }],
                                                    attributes:["id","username","email"]
                                                  });
  res.json({ user });
});
//CREATES A USER
router.post("/", async (req,res) =>{
  let user;
  user = await UserModel.findOne({where:{username:req.body.username}})
  
  if(user){
    res.send("400")
  }else{
    user = await UserModel.create(req.body);
    res.json({user})
  }
});
//VALIDATES USER LOG IN DATA
router.post("/login", async (req,res) =>{
  let user;
  user = await UserModel.findOne({where:{username:req.body.username,password:req.body.password}})
  
  if(user){
    res.json({user})
  }else{
    res.send("400")
  }
});
module.exports = router;
