import { Injectable } from '@nestjs/common';
import { Telegraf, Markup } from 'telegraf';
require('dotenv').config();

@Injectable()
export class AppService {
  constructor() {}
  private bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);

    
}
