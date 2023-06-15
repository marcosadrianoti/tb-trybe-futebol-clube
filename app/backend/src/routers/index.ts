import { Router } from 'express';
import teamsRouter from './teams.routers';
import loginRouter from './login.routers';

const router = Router();

router.use('/login', loginRouter);
router.use('/teams', teamsRouter);

export default router;
