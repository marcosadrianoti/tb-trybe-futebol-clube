import { Request, Router, Response } from 'express';
import MatchController from '../controllers/MatchController';
// import Validations from '../middlewares/Validations';
import validateToken from '../middlewares/validateToken';

const matchController = new MatchController();

const matchRouter = Router();

matchRouter.get('/', (req: Request, res: Response) => matchController.findMatches(req, res));
matchRouter.patch(
  '/:id/finish',
  validateToken,
  (req: Request, res: Response) => matchController.finishMatch(req, res),
);

export default matchRouter;
