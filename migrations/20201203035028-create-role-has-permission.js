'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('RoleHasPermissions', {
      role_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      permission_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('RoleHasPermissions');
  }
};