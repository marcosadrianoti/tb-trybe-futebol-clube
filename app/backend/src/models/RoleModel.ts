// import IUser from '../Interfaces/IUser';
import SeqUserModel from '../database/models/SeqUserModel';

export default class RoleModel {
  private _seqUserModel = SeqUserModel;
  public async findRole(email: string): Promise<string> {
    const user = await this._seqUserModel.findOne({ where: { email } });
    return user?.dataValues.role;
  }
}
