import IUser from '../Interfaces/IUser';
import SeqUserModel from '../database/models/SeqUserModel';

export default class LoginModel {
  private _seqUserModel = SeqUserModel;
  public async userLogin(email: string): Promise<IUser | null> {
    const user = await this._seqUserModel.findOne({ where: { email } });
    // console.log(user);
    return user?.dataValues;
  }
}
