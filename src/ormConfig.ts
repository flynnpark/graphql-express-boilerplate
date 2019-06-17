import { ConnectionOptions } from 'typeorm';

const connectionOptions: ConnectionOptions = {
  name: 'default',
  type: 'postgres',
  database: 'boilerplate',
  port: 5432,
  host: process.env.DB_ENDPOINT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  synchronize: true,
  logging: true,
  entities: [__dirname + '/entity/*{.ts,.js}'],
  migrations: [__dirname + '/migration/*{.ts,.js}'],
  cli: {
    entitiesDir: 'src/entity',
    migrationsDir: 'src/migration'
  }
};

export default connectionOptions;
