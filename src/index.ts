import { createConnection } from 'typeorm';
import app from './app';
import connectionOptions from './ormConfig';

const PORT: number | string = process.env.PORT || 4000;

const handleAppStart = () => console.log(`Listening on port ${PORT}`);

createConnection(connectionOptions)
  .then(() => {
    app.start(handleAppStart);
  })
  .catch(error => console.error(error));
