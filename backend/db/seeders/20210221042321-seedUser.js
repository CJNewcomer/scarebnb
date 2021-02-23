'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = []
    const demoUser = {
      username: "demoUser",
      email: "demouser@demoUser.com",
      hashedPassword: await bcrypt.hash("demoUser123", 10),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    users.push(demoUser)
    for (let i = 0; i < 50; i++) {
      const newUser = {
        username: faker.internet.userName(),
        email: faker.internet.email(),
        hashedPassword: await bcrypt.hash(`Password${i}`, 10),
        createdAt: new Date(),
        updatedAt: new Date()
      }
      users.push(newUser)

    }
      return queryInterface.bulkInsert('Users', users, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
