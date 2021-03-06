import jwt from 'jsonwebtoken';

const TOKEN_KEY = process.env.JSON_WEB_TOKEN || 'DEFAULT_KEY';

export const createJWT = (id: number): string => {
  const token = jwt.sign({ id }, TOKEN_KEY);
  return token;
};
