import { ITeams } from './ITeams';

export interface ITeamsModel {
  findAll(): Promise<ITeams[]>,
  findByOne(id: ITeams['id']): Promise<ITeams | null>
}
