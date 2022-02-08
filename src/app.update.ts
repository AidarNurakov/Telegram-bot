import {
  Update,
  Start,
  Help,
  On,
  Hears,
} from 'nestjs-telegraf';
import { Context } from 'telegraf';
import { AppService } from './app.service';

@Update()
export class AppUpdate {
  constructor(private readonly appService: AppService) {}

  @Start()
  async startCommand(ctx: Context) {
    await ctx.reply('Welcome');
  }

  @Help()
  async helpCommand(ctx: Context) {
    await ctx.reply('Send me a sticker');
  }

  @On('sticker')
  async onSticker(ctx: Context) {
    await ctx.reply('👍');
  }

  @Hears('hi')
  async hearsHi(ctx: Context) {
    await ctx.reply('Hey there');
  }
}