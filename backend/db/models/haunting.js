'use strict';
module.exports = (sequelize, DataTypes) => {
  const Haunting = sequelize.define('Haunting', {
    statusId: DataTypes.INTEGER,
    locationName: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    description: DataTypes.TEXT,
    imgPath: DataTypes.STRING
  }, {});
  Haunting.associate = function(models) {
    // associations can be defined here
  };
  return Haunting;
};