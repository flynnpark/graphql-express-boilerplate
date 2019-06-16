import serverless from 'serverless-http';
import app from './app';

const serverlessApp = serverless(app);
export const handler = async (event, context) => {
  return await serverlessApp(event, context);
};
