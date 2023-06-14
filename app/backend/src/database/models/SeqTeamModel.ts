import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';

class SeqTeamModel extends Model<InferAttributes<SeqTeamModel>,
InferCreationAttributes<SeqTeamModel>> {
  declare id: CreationOptional<number>;
  declare teamName: string;
}

SeqTeamModel.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  teamName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'teams',
  timestamps: false,
  underscored: true,
});

export default SeqTeamModel;
