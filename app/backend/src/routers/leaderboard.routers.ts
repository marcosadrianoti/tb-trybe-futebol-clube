import { Request, Router, Response } from 'express';
import LeaderBoardController from '../controllers/LeaderBoardController';

const leaderBoardController = new LeaderBoardController();

const LeaderBoardRouter = Router();

LeaderBoardRouter.get(
  '/home',
  (req: Request, res: Response) => leaderBoardController.getLeaderBoard(req, res),
);

export default LeaderBoardRouter;
