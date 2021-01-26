'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('UserHauntings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        references: { model: "Users" }
      },
      hauntingId: {
        type: Sequelize.INTEGER,
        references: { model: "Hauntings" }
      },
      statusId: {
        type: Sequelize.INTEGER,
        references: { model: "Hauntings" }
      },
      bookingStartDate: {
        type: Sequelize.DATE
      },
      bookingEndDate: {
        type: Sequelize.DATE
      },
      rating: {
        type: Sequelize.INTEGER
      },
      comment: {
        type: Sequelize.TEXT(500),
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('UserHauntings');
  }
};