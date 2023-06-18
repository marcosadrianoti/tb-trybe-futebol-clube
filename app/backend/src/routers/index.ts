import { Router } from 'express';
import teamsRouter from './teams.routers';
import loginRouter from './login.routers';
import roleRouter from './role.routers';
import matchRouter from './matches.routers';
import leaderBoardRouter from './leaderboard.routers';

const router = Router();

router.use('/login', loginRouter);
router.use('/login', roleRouter);
router.use('/teams', teamsRouter);
router.use('/matches', matchRouter);
router.use('/leaderboard', leaderBoardRouter);

export default router;
