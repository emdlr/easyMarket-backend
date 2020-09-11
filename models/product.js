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
      Product.belongsTo(models.List, {foreignKey: "id"});
      Product.belongsTo(models.Price, {foreignKey: "id"});
      Product.hasMany(models.Unit, {foreignKey: "unitId"});
      Product.hasMany(models.Category, {foreignKey: "categoryId"});
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