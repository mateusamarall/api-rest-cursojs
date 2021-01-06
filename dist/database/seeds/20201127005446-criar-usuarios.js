"use strict";const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'users', [
      {
        nome: 'luis',
        email: 'luis1@gmail.com',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),

      },
      {
        nome: 'luis2',
        email: 'luis2@gmail.com',
        password_hash: await bcryptjs.hash('123456789', 8),
        created_at: new Date(),
        updated_at: new Date(),

      },
      {
        nome: 'luis3',
        email: 'luis3@gmail.com',
        password_hash: await bcryptjs.hash('12345678910', 8),
        created_at: new Date(),
        updated_at: new Date(),

      },
    ],
    {},
  ),

  down: () => {

  },
};
