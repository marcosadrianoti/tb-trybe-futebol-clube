import { ServiceResponse } from '../Interfaces/ServiceResponse';
import SeqMatcheModel from '../database/models/SeqMatcheModel';

export default class MatchService {
  private _seqMatcheModel = SeqMatcheModel;

  public async findAllMatches():Promise<ServiceResponse<SeqMatcheModel[]>> {
    const allMatches = await this._seqMatcheModel.findAll(
      {
        include: [
          { association: 'homeTeam',
            attributes: ['teamName'],
          },
          {
            association: 'awayTeam',
            attributes: ['teamName'],
          },
        ],
      },
    );
    return { status: 'SUCCESSFUL', data: allMatches };
  }

  public async findInProgress(inProgress: boolean):Promise<ServiceResponse<SeqMatcheModel[]>> {
    const inProgressMatches = await this._seqMatcheModel.findAll(
      {
        include: [
          { association: 'homeTeam',
            attributes: ['teamName'],
          },
          {
            association: 'awayTeam',
            attributes: ['teamName'],
          },
        ],
        where: {
          inProgress,
        },
      },
    );
    return { status: 'SUCCESSFUL', data: inProgressMatches };
  }

  public async finishMatch(id: number):Promise<ServiceResponse<object>> {
    await this._seqMatcheModel.update(
      { inProgress: false },
      { where: { id } },
    );
    return { status: 'SUCCESSFUL', data: { message: 'finished' } };
  }

  public async updateMatch(homeTeamGoals: number, awayTeamGoals: number, id: number)
    :Promise<ServiceResponse<object>> {
    await this._seqMatcheModel.update(
      { homeTeamGoals, awayTeamGoals },
      { where: { id } },
    );
    return { status: 'SUCCESSFUL', data: { message: 'Updated match' } };
  }

  public async postNewMatch(newMatch: {
    homeTeamId: number,
    awayTeamId: number,
    homeTeamGoals: number,
    awayTeamGoals: number,
    inProgress: boolean,
  }):Promise<ServiceResponse<object>> {
    const InsertedMatch = await this._seqMatcheModel.create(newMatch);
    return { status: 'SUCCESSFUL_CREATED', data: InsertedMatch.dataValues };
  }
}
