import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import * as cookieParser from 'cookie-parser';
import { TypeOrmModule } from '@nestjs/typeorm';
import TypeOrmConfigService from './config/database.config';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { ScratchModule } from './modules/scratch/scratch.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: TypeOrmConfigService,
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    AuthModule,
    UsersModule,
    ScratchModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(cookieParser()).forRoutes('*');
  }
}
