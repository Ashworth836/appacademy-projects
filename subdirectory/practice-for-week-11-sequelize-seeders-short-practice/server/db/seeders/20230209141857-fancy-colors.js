'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
        /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert(
      'Colors',
      [
        { name: 'green', createdAt: new Date('2022-01-01'), updatedAt: new Date('2023-01-01') },
        { name: 'purple', createdAt: new Date('2022-02-01'), updatedAt: new Date('2023-02-01') },
        { name: 'orange', createdAt: new Date('2022-03-01'), updatedAt: new Date('2023-03-01') }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
     /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete(
      'Colors',
      {
        name: { [Sequelize.Op.in]: ['green', 'purple', 'orange'] }
      },
      {}
    );
  }
};
