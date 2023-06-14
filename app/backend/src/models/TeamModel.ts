import SeqTeamModel from '../database/models/SeqTeamModel';
import { ITeams } from '../Interfaces/ITeams';
import { ITeamsModel } from '../Interfaces/ITeamsModel';

export default class TeamModel implements ITeamsModel {
  private _model = SeqTeamModel;

  async findAll(): Promise<ITeams[]> {
    const allTeams = await this._model.findAll();
    return allTeams;
  }

  async findByOne(id: ITeams['id']): Promise<ITeams | null> {
    const teamById = await this._model.findOne({ where: { id } });
    if (!teamById) return null;

    return teamById;
  }
}
