import jwt = require('jsonwebtoken');
import ITokenPayload from '../Interfaces/ITokenPayload';

const secret = process.env.JWT_SECRET || 'jwt_secret';

function sign(payload: ITokenPayload): string {
  const token = jwt.sign(payload, secret);
  // const token = jwt.sign(payload, secret, { algorithm: 'ES256' });
  return token;
}

function verify(token: string): ITokenPayload {
  const data = jwt.verify(token, secret) as ITokenPayload;
  return data;
}

function decode(token: string) {
  return jwt.decode(token);
}

export {
  sign,
  verify,
  decode,
};
