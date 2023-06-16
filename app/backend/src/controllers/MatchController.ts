import { Request, Response } from 'express';
import MatchService from '../services/MatchService';
// import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class MatchController {
  constructor(
    private _matchService = new MatchService(),
  ) { }

  public async findAllTeams(_req: Request, res: Response) {
    const serviceResponse = await this._matchService.findAllMatches();
    res.status(200).json(serviceResponse.data);
  }

  // public async findByOneTeam(req: Request, res: Response) {
  //   const { id } = req.params;
  //   const serviceResponse = await this._matchService.findByOneTeam(Number(id));
  //   if (!serviceResponse) {
  //     return res.status(404).json({ message: 'Team not found ' });
  //   }
  //   return res.status(200).json(serviceResponse.data);
  // }
}
