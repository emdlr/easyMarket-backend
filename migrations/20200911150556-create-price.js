'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Prices', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      storeId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model:'Stores',
          key:'id'
        }
      },
      productId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model:'Products',
          key:'id'
        },
      },
      price: {
        allowNull: false,
        type: Sequelize.FLOAT
      }
    },
    {
      uniqueKeys: {
          actions_unique: {
              fields: ["storeId", "productId"]
          }
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Prices');
  }
};