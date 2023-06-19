import * as bcrypt from 'bcryptjs';
import { sign } from '../utils/jwt';
import { ServiceResponse } from '../Interfaces/ServiceResponse';
import LoginModel from '../models/LoginModel';

export default class LoginService {
  constructor(
    private _loginModel = new LoginModel(),
  ) {}

  public async login(email: string, password: string): Promise<ServiceResponse<string>> {
    if (!email || !password) {
      return { status: 'INVALID_DATA', data: { message: 'All fields must be filled' } };
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email) || password.length < 6) {
      return { status: 'UNAUTHORIZED', data: { message: 'Invalid email or password' } };
    }
    const userData = await this._loginModel.userLogin(email);
    if (!userData || !bcrypt.compareSync(password, userData.password)) {
      return { status: 'UNAUTHORIZED', data: { message: 'Invalid email or password' } };
    }

    const { password: _password, ...payload } = userData;

    const myToken = sign(payload);

    return { status: 'SUCCESSFUL', data: myToken };
  }
}
