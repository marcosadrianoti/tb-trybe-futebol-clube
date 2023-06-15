import { Request, Router, Response } from 'express';
import RoleController from '../controllers/RoleController';
import validateToken from '../middlewares/validateToken';
// import Validations from '../middlewares/Validations';

const roleController = new RoleController();

const roleRouter = Router();

roleRouter.get(
  '/role',
  validateToken,
  (req: Request, res: Response) => roleController.findRole(req, res),
);

export default roleRouter;
