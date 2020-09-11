'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Store extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Store.belongsTo(models.Price, { foreignKey: "id" });
    }
  };
  Store.init({
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Store',
    timestamps: false
  });
  return Store;
};