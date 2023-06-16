import { Request, Response } from 'express';
import MatchService from '../services/MatchService';
// import SeqMatcheModel from '../database/models/SeqMatcheModel';
import SeqTeamModel from '../database/models/SeqTeamModel';

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

  public async updateMatch(req: Request, res: Response) {
    const { id } = req.params;
    const { homeTeamGoals, awayTeamGoals } = req.body;
    const serviceResponse = await this._matchService
      .updateMatch(Number(homeTeamGoals), Number(awayTeamGoals), Number(id));
    res.status(200).json(serviceResponse.data);
  }

  public async isThereTeam(id: number) {
    console.log(this);
    const isThere = await SeqTeamModel.findOne({ where: { id } });

    return isThere;
  }

  public async postNewMatch(req: Request, res: Response) {
    const newMatch = req.body;
    if (newMatch.homeTeamId === newMatch.awayTeamId) {
      return res.status(422)
        .json({ message: 'It is not possible to create a match with two equal teams' });
    }
    const isThereHomeTeam = await this.isThereTeam(newMatch.homeTeamId);
    const isThereAwayTeam = await this.isThereTeam(newMatch.awayTeamId);

    if (!isThereHomeTeam || !isThereAwayTeam) {
      return res.status(404)
        .json({ message: 'There is no team with such id!' });
    }
    const inProgress = true;
    const serviceResponse = await this._matchService
      .postNewMatch({ ...newMatch, inProgress });
    res.status(201).json(serviceResponse.data);
  }
}
