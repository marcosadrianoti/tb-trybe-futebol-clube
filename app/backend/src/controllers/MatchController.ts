import { Request, Response } from 'express';
import MatchService from '../services/MatchService';

export default class MatchController {
  constructor(
    private _matchService = new MatchService(),
  ) { }

  public async findMatches(req: Request, res: Response) {
    const { inProgress } = req.query;
    let serviceResponse;
    if (inProgress) {
      const booleanInProgress = inProgress === 'true';
      serviceResponse = await this._matchService.findInProgress(booleanInProgress);
    } else {
      serviceResponse = await this._matchService.findAllMatches();
    }
    res.status(200).json(serviceResponse.data);
  }

  public async finishMatch(req: Request, res: Response) {
    const { id } = req.params;
    const serviceResponse = await this._matchService.finishMatch(Number(id));
    res.status(200).json(serviceResponse.data);
  }
}
