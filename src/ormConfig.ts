import { ConnectionOptions } from 'typeorm';

const connectionOptions: ConnectionOptions = {
  type: 'postgres',
  database: 'boilerplate',
  port: 5432,
  host: process.env.DB_ENDPOINT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  synchronize: true,
  logging: true,
  entities: [__dirname + '/entity/**/*.ts'],
  migrations: [__dirname + '/migration/**/*.ts'],
  cli: {
    entitiesDir: __dirname + '/entity',
    migrationsDir: __dirname + '/migration'
  }
};

export default connectionOptions;
