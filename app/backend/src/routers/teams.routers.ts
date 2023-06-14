import { Request, Router, Response } from 'express';
import TeamsController from '../controllers/TeamController';
// import Validations from '../middlewares/Validations';

const teamsController = new TeamsController();

const teamsRouter = Router();

teamsRouter.get('/', (req: Request, res: Response) => teamsController.findAllTeams(req, res));
teamsRouter.get('/:id', (req: Request, res: Response) => teamsController.findByOneTeam(req, res));

export default teamsRouter;
