import { Request, Response } from 'express';
import RoleService from '../services/RoleService';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class RoleController {
  constructor(
    private _roleService = new RoleService(),
  ) {}

  public async findRole(req: Request, res: Response): Promise<Response> {
    // const { authorization } = req.headers;
    console.log('req.body', req.body);
    const { role } = req.body.dataToken;

    const ServiceResponse = await this._roleService.findRole(role);
    const statusHttp = mapStatusHTTP(ServiceResponse.status);
    if (ServiceResponse.status !== 'SUCCESSFUL') {
      return res.status(statusHttp).json(ServiceResponse.data);
    }
    return res.status(200).json({ role });
  }
}
