import { Request, Response } from 'express';
import LoginService from '../services/LoginService';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class LoginController {
  constructor(
    private _loginService = new LoginService(),
  ) {}

  public async login(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'All fields must be filled' });
    }
    const ServiceResponse = await this._loginService.login(email, password);
    const statusHttp = mapStatusHTTP(ServiceResponse.status);
    if (ServiceResponse.status !== 'SUCCESSFUL') {
      return res.status(statusHttp).json(ServiceResponse.data);
    }
    return res.status(statusHttp).json({ token: ServiceResponse.data });
  }
}
