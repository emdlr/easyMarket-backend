'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Unit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Unit.hasMany(models.Product, { foreignKey: "unitId" });
    }
  };
  Unit.init({
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Unit',
    timestamps: false
  });
  return Unit;
};