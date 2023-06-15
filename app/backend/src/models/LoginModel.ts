import IUser from '../Interfaces/IUser';
import SeqUserModel from '../database/models/SeqUserModel';

export default class LoginModel {
  private _seqUserModel = SeqUserModel;
  public async userLogin(email: IUser['email']): Promise<IUser | null> {
    const user = await this._seqUserModel.findOne({ where: { email } });
    return user;
  }
}
