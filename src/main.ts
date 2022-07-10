import { NestFactory } from '@nestjs/core';
import { createConnection } from 'mysql2';
import { AppModule } from './app.module';

async function bootstrap() {
  const connection = createConnection({
    user: 'root',
    password: 'root',
    host: 'localhost',
    port: 3306,
  });
  connection.query('CREATE DATABASE IF NOT EXISTS social_net_test', (err) => {
    if (!err) {
      console.log('Database have created');
    } else console.log(err);
  });

  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
