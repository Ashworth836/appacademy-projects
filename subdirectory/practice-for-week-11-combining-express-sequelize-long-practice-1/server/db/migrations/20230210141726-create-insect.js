'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Insects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true,
        validate: {
          isTitle: function(value) {
            const words = value.split(" ");
            for (let i = 0; i < words.length; i++) {
              words[i] = words[i][0].toUpperCase() + words[i].slice(1);
            }
            this.setDataValue('name', words.join(" "));
          }
        }
      },
      description: {
        type: Sequelize.STRING
      },
      fact: {
        type: Sequelize.STRING,
        validate: {
          len: [0, 240]
        }
      },
      territory: {
        type: Sequelize.STRING
      },
      millimeters: {
        allowNull: false,
        type: Sequelize.FLOAT,
        validate: {
          min: 0
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Insects');
  }
};
