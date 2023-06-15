import { Request, Router, Response } from 'express';
import LoginController from '../controllers/LoginController';
// import Validations from '../middlewares/Validations';

const loginController = new LoginController();

const loginRouter = Router();

loginRouter.post('/', (req: Request, res: Response) => loginController.login(req, res));

export default loginRouter;
