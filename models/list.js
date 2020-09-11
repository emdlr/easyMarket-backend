'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class List extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      List.hasMany(models.Product, {foreignKey: "productId"});
      List.hasMany(models.User, {foreignKey: "userId"});
    }
  };
  List.init({
    productId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    listName: DataTypes.STRING,
    quantity: DataTypes.FLOAT,
    cost: DataTypes.FLOAT,
    pickedStatus: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'List',
  });
  return List;
};