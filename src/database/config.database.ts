import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const db_config: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'social_net_test',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
};
