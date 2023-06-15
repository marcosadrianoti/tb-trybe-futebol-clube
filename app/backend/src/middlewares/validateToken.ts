import { NextFunction, Request, Response } from 'express';
import { verify } from '../utils/jwt';

const validateToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  // if (!token) return { status: res.status, }
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    const decodedToken = verify(token);
    req.body.dataToken = decodedToken;
    console.log(decodedToken);
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
};

export default validateToken;
