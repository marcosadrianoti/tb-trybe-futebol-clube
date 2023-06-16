import { ServiceResponse } from '../Interfaces/ServiceResponse';
import SeqMatcheModel from '../database/models/SeqMatcheModel';

export default class MatchService {
  private _seqMatcheModel = SeqMatcheModel;

  public async findAllMatches():Promise<ServiceResponse<SeqMatcheModel[]>> {
    const matches = await this._seqMatcheModel.findAll(
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
    return { status: 'SUCCESSFUL', data: matches };
  }
}
