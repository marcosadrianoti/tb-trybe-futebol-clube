import { Request, Router, Response } from 'express';
import MatchController from '../controllers/MatchController';
// import Validations from '../middlewares/Validations';

const matchController = new MatchController();

const matchRouter = Router();

matchRouter.get('/', (req: Request, res: Response) => matchController.findMatches(req, res));

export default matchRouter;
