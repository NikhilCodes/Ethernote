import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import * as morgan from 'morgan';
import UserInterceptor from './interceptors/user.interceptor';
import { UsersService } from './modules/users/users.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get<ConfigService>(ConfigService);
  const usersService = app.get<UsersService>(UsersService);

  app.use(morgan('tiny'));
  app.enableCors({
    credentials: true,
    origin: ['http://localhost:5000', 'http://localhost:3000'],
  });
  app.setGlobalPrefix('api');
  app.useGlobalInterceptors(new UserInterceptor(usersService));
  await app.listen(configService.get('http.port'));
}

bootstrap();
