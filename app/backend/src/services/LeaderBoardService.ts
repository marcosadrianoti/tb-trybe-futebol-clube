import { ServiceResponse } from '../Interfaces/ServiceResponse';
import ILeaderBoard from '../Interfaces/ILeaderBoard';
import SeqMatcheModel from '../database/models/SeqMatcheModel';
import SeqTeamModel from '../database/models/SeqTeamModel';
import returnLeaderBoard, { orderLeaderBoard } from '../utils/returnLeaderBoard';

export default class LeaderBoardService {
  private _seqTeamModel = SeqTeamModel;
  private _seqMatcheModel = SeqMatcheModel;

  public async getLeaderBoard(): Promise<ServiceResponse<ILeaderBoard[]>> {
    const endedMatches = await this._seqMatcheModel.findAll({
      where: { inProgress: false },
    });
    const allTeams = await this._seqTeamModel.findAll();
    const leaderBoard = returnLeaderBoard(allTeams, endedMatches);
    const orderedLeaderBoard = orderLeaderBoard(leaderBoard);

    return { status: 'SUCCESSFUL', data: orderedLeaderBoard };
  }
}
