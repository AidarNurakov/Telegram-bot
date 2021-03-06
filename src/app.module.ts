import { Module } from '@nestjs/common';
import { TelegrafModule } from 'nestjs-telegraf';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppUpdate } from './app.update';
require('dotenv').config()

@Module({
  imports: [
    TelegrafModule.forRoot({
      token: process.env.TELEGRAM_BOT_TOKEN
    })
  ],
  controllers: [AppController],
  providers: [AppService, AppUpdate],
})
export class AppModule {}
