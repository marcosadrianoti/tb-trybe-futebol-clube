import { Request, Response } from 'express';
import LeaderBoardService from '../services/LeaderBoardService';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class leaderBoardController {
  private leaderBoardService = new LeaderBoardService();

  public async getLeaderBoard(req: Request, res: Response): Promise<Response> {
    const serviceResponse = await this.leaderBoardService.getLeaderBoard();
    const statusHttp = mapStatusHTTP(serviceResponse.status);

    return res.status(statusHttp).json(serviceResponse.data);
  }
}
