import { Request, Response } from 'express';
import TeamService from '../services/TeamService';
// import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class TeamController {
  constructor(
    private _teamService = new TeamService(),
  ) { }

  public async findAllTeams(_req: Request, res: Response) {
    const serviceResponse = await this._teamService.findAllTeams();
    res.status(200).json(serviceResponse.data);
  }

  public async findByOneTeam(req: Request, res: Response) {
    const { id } = req.params;
    const serviceResponse = await this._teamService.findByOneTeam(Number(id));
    if (!serviceResponse) {
      return res.status(404).json({ message: 'Team not found ' });
    }
    return res.status(200).json(serviceResponse.data);
  }
}
