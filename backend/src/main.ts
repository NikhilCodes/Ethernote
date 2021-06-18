import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import * as morgan from 'morgan';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get<ConfigService>(ConfigService);

  app.use(morgan('tiny'));
  app.enableCors({
    credentials: true,
    origin: 'http://localhost:3000',
  });
  app.setGlobalPrefix('api');
  await app.listen(configService.get('http.port'));
}

bootstrap();
