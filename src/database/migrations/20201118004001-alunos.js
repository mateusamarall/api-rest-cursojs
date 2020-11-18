module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('alunos', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },

    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('alunos');
  },
};
