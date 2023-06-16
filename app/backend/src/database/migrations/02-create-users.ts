import { Model, QueryInterface, DataTypes } from "sequelize";

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model>('users', {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
      },
      username: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      role: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      }
    })
  },

  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('users');
  },
};
