'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tree = sequelize.define('Tree', {
    tree: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    location: {
      type: DataTypes.STRING
    },
    heightFt: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0,
      validate: {
        min: 0
      }
    },
    groundCircumferenceFt: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0,
      validate: {
        min: 0
      }
    }
  }, {});
  Tree.associate = function(models) {
    // associations can be defined here
  };
  return Tree;
};
