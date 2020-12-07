'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Companies', [{
      name: 'John',
      address: 'phom penh',
      phone: '011855610/09876525',
      email: 'admin@example.com',
      createdAt: new Date(),
      createdBy: 1,
      updatedAt: new Date(),
      updatedBy: 1
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
