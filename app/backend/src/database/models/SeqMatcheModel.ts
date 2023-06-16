import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';
import SeqTeamModel from './SeqTeamModel';

export default class SeqMatcheModel extends Model<InferAttributes<SeqMatcheModel>,
InferCreationAttributes<SeqMatcheModel>> {
  declare id: CreationOptional<number>;
  declare homeTeamId: number;
  declare homeTeamGoals: number;
  declare awayTeamId: number;
  declare awayTeamGoals: number;
  declare inProgress: boolean;
}

SeqMatcheModel.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  homeTeamId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'home_team_id',
  },
  homeTeamGoals: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'home_team_goals',
  },
  awayTeamId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'away_team_id',
  },
  awayTeamGoals: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'away_team_goals',
  },
  inProgress: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    field: 'in_progress',
  },
}, {
  sequelize: db,
  tableName: 'matches',
  timestamps: false,
  underscored: true,
});

SeqMatcheModel.belongsTo(
  SeqTeamModel,
  { foreignKey: 'homeTeamId', as: 'homeTeam' },
);
SeqMatcheModel.belongsTo(
  SeqTeamModel,
  { foreignKey: 'awayTeamId', as: 'awayTeam' },
);

SeqTeamModel.hasMany(
  SeqMatcheModel,
  { foreignKey: 'homeTeamId', as: 'homeTeam' },
);
SeqTeamModel.hasMany(
  SeqMatcheModel,
  { foreignKey: 'awayTeamId', as: 'awayTeam' },
);
