import { Router } from 'express';
import teamsRouter from './teams.routers';
import loginRouter from './login.routers';
import roleRouter from './role.routers';

const router = Router();

router.use('/login', loginRouter);
router.use('/login', roleRouter);
router.use('/teams', teamsRouter);

export default router;
