import TeamModel from '../models/TeamModel';
import { ITeams } from '../Interfaces/ITeams';
import { ITeamsModel } from '../Interfaces/ITeamsModel';
import { ServiceResponse } from '../Interfaces/ServiceResponse';

export default class TeamService {
  constructor(
    private teamModel: ITeamsModel = new TeamModel(),
  ) { }

  public async findAllTeams(): Promise<ServiceResponse<ITeams[]>> {
    const allTeams = await this.teamModel.findAll();
    return { status: 'SUCCESSFUL', data: allTeams };
  }

  public async findByOneTeam(id: number): Promise<ServiceResponse<ITeams>> {
    const team = await this.teamModel.findByOne(id);
    if (!team) return { status: 'NOT_FOUND', data: { message: `Team ${id} not found` } };
    return { status: 'SUCCESSFUL', data: team };
  }
}
