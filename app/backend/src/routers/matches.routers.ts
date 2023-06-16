import { Request, Router, Response } from 'express';
import MatchController from '../controllers/MatchController';
import validateToken from '../middlewares/validateToken';

const matchController = new MatchController();

const matchRouter = Router();

matchRouter.get('/', (req: Request, res: Response) => matchController.findMatches(req, res));
matchRouter.patch(
  '/:id',
  validateToken,
  (req: Request, res: Response) => matchController.updateMatch(req, res),
);
matchRouter.patch(
  '/:id/finish',
  validateToken,
  (req: Request, res: Response) => matchController.finishMatch(req, res),
);
matchRouter.post(
  '/',
  validateToken,
  (req: Request, res: Response) => matchController.postNewMatch(req, res),
);

export default matchRouter;
