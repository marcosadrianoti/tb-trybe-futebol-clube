import { Router } from 'express';
import teamsRouter from './teams.routers';

const router = Router();

router.use('/teams', teamsRouter);

export default router;
