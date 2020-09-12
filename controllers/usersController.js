const express = require("express");
const router = express.Router();

const UserModel = require("../models").User;
const ListModel = require("../models").List;
const ProductModel = require("../models").Product;
const UnitModel = require("../models").Unit;
const CategoryModel = require("../models").Category;

// GET USERS PROFILE
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

module.exports = router;
