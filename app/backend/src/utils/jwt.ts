import jwt = require('jsonwebtoken');
import ITokenPayload from '../Interfaces/ITokenPayload';

const secret = process.env.JWT_SECRET || 'secret';

function sign(payload: ITokenPayload): string {
  const token = jwt.sign(payload, secret);
  return token;
}

function verify(token: string): ITokenPayload {
  const data = jwt.verify(token, secret) as ITokenPayload;
  return data;
}

export {
  sign,
  verify,
};
