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
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {});
  Haunting.associate = function(models) {
    Haunting.hasMany(models.UserHaunting, {foreignKey: 'hauntingId'});
    const columnMapping = {
      through: 'UserHaunting',
      otherKey: 'userId',
      foreignKey: 'hauntingId'
    }
    Haunting.belongsToMany(models.User, columnMapping);
  };
  return Haunting;
};