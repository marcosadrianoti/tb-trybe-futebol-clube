import { ITeams } from '../Interfaces/ITeams';
import IMatch from '../Interfaces/IMatch';
import ILeaderBoard from '../Interfaces/ILeaderBoard';

const POINTS_DRAW = 1;
const POINTS_VICTORY = 3;

function getJ(matches: IMatch[], id: number): number {
  let J = 0;
  matches.forEach((match) => {
    J += (match.homeTeamId === id) ? 1 : 0;
    // J += (match.homeTeamId === id || match.awayTeamId === id) ? 1 : 0;
  });

  return J;
}

function getGP(matches: IMatch[], id: number): number {
  let GP = 0;
  matches.forEach((match) => {
    GP += match.homeTeamId === id ? match.homeTeamGoals : 0;
    // GP += match.awayTeamId === id ? match.awayTeamGoals : 0;
  });

  return GP;
}

function getD(matches: IMatch[], id: number): number {
  let D = 0;
  matches.forEach((match) => {
    D += match.homeTeamId === id && match.homeTeamGoals < match.awayTeamGoals ? 1 : 0;
    // D += match.awayTeamId === id && match.awayTeamGoals < match.homeTeamGoals ? 1 : 0;
  });

  return D;
}

function getGC(matches: IMatch[], id: number): number {
  let GC = 0;
  matches.forEach((match) => {
    GC += match.homeTeamId === id ? match.awayTeamGoals : 0;
    // GC += match.awayTeamId === id ? match.homeTeamGoals : 0;
  });

  return GC;
}

function getV(matches: IMatch[], id: number): number {
  let V = 0;
  matches.forEach((match) => {
    V += match.homeTeamId === id && match.homeTeamGoals > match.awayTeamGoals ? 1 : 0;
    // V += match.awayTeamId === id && match.awayTeamGoals > match.homeTeamGoals ? 1 : 0;
  });

  return V;
}

function getE(matches: IMatch[], id: number): number {
  let E = 0;
  matches.forEach((match) => {
    E += match.homeTeamId === id && match.homeTeamGoals === match.awayTeamGoals ? POINTS_DRAW : 0;
    // E += match.awayTeamId === id && match.awayTeamGoals === match.homeTeamGoals ? POINTS_DRAW : 0;
  });

  return E;
}

function getP(matches: IMatch[], id: number): number {
  const P = getV(matches, id) * POINTS_VICTORY + getE(matches, id);

  return P;
}

function getSG(matches: IMatch[], id: number): number {
  const SG = getGP(matches, id) - getGC(matches, id);

  return SG;
}

function getEF(matches: IMatch[], id: number): number {
  // [P / (J * 3)] * 100
  const EF = ((getP(matches, id) / (getJ(matches, id) * 3)) * 100).toFixed(2);

  return Number(EF);
}

export const orderLeaderBoard = (leaderBoard: ILeaderBoard[]): ILeaderBoard[] => {
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  const result = leaderBoard.sort((a: ILeaderBoard, b: ILeaderBoard) => {
    if (a.totalPoints !== b.totalPoints) return b.totalPoints - a.totalPoints;
    if (a.totalVictories !== b.totalVictories) return b.totalVictories - a.totalVictories;
    if (a.goalsBalance !== b.goalsBalance) return b.goalsBalance - a.goalsBalance;
    if (a.goalsFavor !== b.goalsFavor) return b.goalsFavor - a.goalsFavor;
    return 0;
  });

  return result;
};

export default function returnLeaderBoard(teams: ITeams[], matches: IMatch[]): ILeaderBoard[] {
  const leaderBoard = teams.map((currTeam) => {
    const { teamName, id } = currTeam;
    return {
      name: teamName,
      totalPoints: getP(matches, id),
      totalGames: getJ(matches, id),
      totalVictories: getV(matches, id),
      totalDraws: getE(matches, id),
      totalLosses: getD(matches, id),
      goalsFavor: getGP(matches, id),
      goalsOwn: getGC(matches, id),
      goalsBalance: getSG(matches, id),
      efficiency: getEF(matches, id),
    };
  });

  return leaderBoard;
}
