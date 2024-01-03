'use strict'

module.exports = (sequelize, DataTypes) => {
  const Insect = sequelize.define('Insect', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isTitle: function (value) {
          const words = value.split(" ");
          for (let word of words) {
            if (!word[0].match(/[A-Z]/)) {
              throw new Error("Name must be Title Cased (capitalize each word)");
            }
          }
        },
      },
    },
    description: {
      type: DataTypes.STRING,
    },
    territory: {
      type: DataTypes.STRING,
    },
    fact: {
      type: DataTypes.STRING,
      validate: {
        len: [0, 240],
      },
    },
    millimeters: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        min: 0,
      },
    },
  }, {});
  Insect.associate = function(models) {
    // associations can be defined here
  };
  return Insect;
};
