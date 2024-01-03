'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Insects', [
      {
        name: 'Fairyfly',
        description: 'Tiny parasitic insect',
        territory: 'Worldwide',
        fact: 'Fairyflies are some of the smallest insects in the world',
        millimeters: 0.139,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Fairyfly',
        description: 'Tiny parasitic insect',
        territory: 'Worldwide',
        fact: 'Fairyflies are some of the smallest insects in the world',
        millimeters: 0.139,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // ... more insects data
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Insects', null, {});
  }
};
