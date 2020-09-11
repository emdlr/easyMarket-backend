'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.hasMany(models.List, {foreignKey: "productId"});
      Product.hasMany(models.Price, {foreignKey: "productId"});
      Product.belongsTo(models.Unit, {foreignKey: "unitId"});
      Product.belongsTo(models.Category, {foreignKey: "categoryId"});
    }
  };
  Product.init({
    unitId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    description: DataTypes.STRING,
    picture: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product',
    timestamps: false
  });
  return Product;
};