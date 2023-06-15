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
      // return res.status(401).json({ message: 'Invalid email or password' });
      return { status: 'UNAUTHORIZED', data: { message: 'Invalid email or password' } };
    }
    const userData = await this._loginModel.userLogin(email);
    if (!userData || !bcrypt.compareSync(password, userData.password)) {
      return { status: 'UNAUTHORIZED', data: { message: 'Invalid email or password' } };
    }
    console.log(userData);

    const { password: _password, ...payload } = userData;
    // const { dataValues } = userData;

    const myToken = sign(payload);
    // const myToken = sign({ email: payload.email, username: payload.username });

    return { status: 'SUCCESSFUL', data: myToken };
  }
}
