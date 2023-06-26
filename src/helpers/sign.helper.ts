import * as jwt from 'jsonwebtoken';
import { JWT_ACCESS, JWT_REFRESH } from 'src/constants';

export const sign = (payload: object): string =>
  jwt.sign(payload, process.env.SECRET_KEY, {
    expiresIn: JWT_ACCESS,
  });

export const refreshSign = (payload: object): string =>
  jwt.sign(payload, process.env.SECRET_KEY, {
    expiresIn: JWT_REFRESH,
  });
