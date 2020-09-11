'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Price extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Price.belongsTo(models.Store, {foreignKey: "storeId"});
      Price.belongsTo(models.Product, {foreignKey: "productId"});
    }
  };
  Price.init({
    storeId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    price: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Price',
    timestamps: false
  });
  return Price;
};