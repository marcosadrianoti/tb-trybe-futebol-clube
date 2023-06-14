// import { ICRUDModel } from './ICRUDModel';
import { ITeams } from './ITeams';

export interface ITeamsModel {
  findAll(): Promise<ITeams[]>,
  findByOne(id: ITeams['id']): Promise<ITeams | null>
}

// export type ITeamsModel = ICRUDModel<ITeams>;
