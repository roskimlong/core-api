'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      thumbnail: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      category_id: {
        type: Sequelize.INTEGER
      },
      status: {
        // public=1, private=0
        type: Sequelize.BOOLEAN,
        defaultValue: 0
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      createdBy: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedBy: {
        allowNull: false,
        type: Sequelize.INTEGER
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Posts');
  }
};