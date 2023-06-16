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
}
