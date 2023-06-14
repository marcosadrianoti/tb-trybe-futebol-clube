// import { NewEntity } from '../Interfaces';
// import SeqTeamModel from '../database/models/SeqTeamModel';
import TeamModel from '../models/TeamModel';
import { ITeams } from '../Interfaces/ITeams';
import { ITeamsModel } from '../Interfaces/ITeamsModel';
import { ServiceResponse } from '../Interfaces/ServiceResponse';
// import { ServiceMessage, ServiceResponse } from '../Interfaces/ServiceResponse';

export default class TeamService {
  constructor(
    private teamModel: ITeamsModel = new TeamModel(),
  ) { }

  public async findAllTeams(): Promise<ServiceResponse<ITeams[]>> {
    const allTeams = await this.teamModel.findAll();
    return { status: 'SUCCESSFUL', data: allTeams };
  }

  public async findByOneTeam(id: number): Promise<ServiceResponse<ITeams>> {
    const team = await this.teamModel.findByOne(id);
    if (!team) return { status: 'NOT_FOUND', data: { message: `Team ${id} not found` } };
    return { status: 'SUCCESSFUL', data: team };
  }

  // public async createBook(book: NewEntity<IBook>): Promise<ServiceResponse<IBook>> {
  //   const newBook = await this.bookModel.create(book);
  //   return { status: 'SUCCESSFUL', data: newBook };
  // }

  // public async updateBook(id: number, book: IBook): Promise<ServiceResponse<ServiceMessage>> {
  //   const bookFound = await this.bookModel.findById(id);
  //   if (!bookFound) return { status: 'NOT_FOUND', data: { message: `Book ${id} not found` } };

  //   const updatedBook = await this.bookModel.update(id, book);
  //   if (!updatedBook) {
  //     return { status: 'CONFLICT',
  //       data: { message: `There are no updates to perform in Book ${id}` } };
  //   }
  //   return { status: 'SUCCESSFUL', data: { message: 'Book updated' } };
  // }

  // public async deleteBook(id: number): Promise<ServiceResponse<ServiceMessage>> {
  //   const bookFound = await this.bookModel.findById(id);
  //   if (!bookFound) return { status: 'NOT_FOUND', data: { message: `Book ${id} not found` } };

  //   await this.bookModel.delete(id);
  //   return { status: 'SUCCESSFUL', data: { message: 'Book deleted' } };
  // }
}
