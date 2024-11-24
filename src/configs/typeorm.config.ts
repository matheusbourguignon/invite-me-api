import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import 'dotenv/config';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DATABASE_POSTGRES_HOST || 'localhost',
  port: 5432,
  username: process.env.DATABASE_POSTGRES_USER || 'pguser',
  password: process.env.DATABASE_POSTGRES_PASSWORD || 'pgpassword',
  database: process.env.DATABASE_POSTGRES_DATABASE || 'postgres',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
  ssl: true,
};