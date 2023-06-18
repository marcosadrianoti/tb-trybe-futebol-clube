import { Request, Router, Response } from 'express';
import LeaderBoardController from '../controllers/LeaderBoardController';
// import validateToken from '../middlewares/validateToken';

const leaderBoardController = new LeaderBoardController();

const LeaderBoardRouter = Router();

LeaderBoardRouter.get(
  '/home',
  // validateToken,
  (req: Request, res: Response) => leaderBoardController.getLeaderBoard(req, res),
);
// LeaderBoardRouter.patch(
//   '/:id',
//   validateToken,
//   (req: Request, res: Response) => leaderBoardController.updateMatch(req, res),
// );
// LeaderBoardRouter.post(
//   '/',
//   validateToken,
//   (req: Request, res: Response) => leaderBoardController.postNewMatch(req, res),
// );

export default LeaderBoardRouter;
