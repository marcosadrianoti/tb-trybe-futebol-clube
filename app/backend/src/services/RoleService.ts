// import { decode, verify } from '../utils/jwt';
import { ServiceResponse } from '../Interfaces/ServiceResponse';
import RoleModel from '../models/RoleModel';

export default class RoleService {
  constructor(
    private _roleModel = new RoleModel(),
  ) {}

  public async findRole(role: string): Promise<ServiceResponse<object>> {
    console.log(this);
    return { status: 'SUCCESSFUL', data: { role } };
  }
}
