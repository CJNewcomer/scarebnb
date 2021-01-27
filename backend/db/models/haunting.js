'use strict';
module.exports = (sequelize, DataTypes) => {
  const Haunting = sequelize.define('Haunting', {
    statusId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },  
    locationName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [30, 750]
      },
    },
    imgPath: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {});
  Haunting.associate = function(models) {
    // associations can be defined here
  };
  return Haunting;
};