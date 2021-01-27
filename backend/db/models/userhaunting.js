'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserHaunting = sequelize.define('UserHaunting', {
    userId: DataTypes.INTEGER,
    hauntingId: DataTypes.INTEGER,
    statusId: DataTypes.INTEGER,
    bookingStartDate: DataTypes.DATE,
    bookingEndDate: DataTypes.DATE,
    rating: DataTypes.INTEGER,
    comment: DataTypes.TEXT
  }, {});
  UserHaunting.associate = function(models) {

  };
  return UserHaunting;
};