import { Model, QueryInterface, INTEGER, STRING } from "sequelize";

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model>('users', {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: INTEGER,
      },
      username: {
        allowNull: false,
        type: STRING,
      },
      role: {
        allowNull: false,
        type: STRING,
      },
      email: {
        allowNull: false,
        type: STRING,
      },
      password: {
        allowNull: false,
        type: STRING,
      }
    })
  },

  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('users');
  },
};
