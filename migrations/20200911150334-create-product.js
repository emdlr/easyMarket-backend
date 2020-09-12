'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      unitId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model:'Units',
          key:'id'
        }
      },
      categoryId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model:'Categories',
          key:'id'
        }
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING
      },
      picture: {
        type: Sequelize.TEXT
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Products');
  }
};