import { Telegraf } from 'telegraf';
import dotenv from 'dotenv';
import { getTickers } from '../tickers/index.js';

dotenv.config();

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN as string);

bot.start((ctx) => {
    ctx.reply('Hello');
});

bot.command('list', (ctx) => {
    const ticker = getTickers();
    ctx.reply(`BTC/USDT: ${ticker.BTCUSDT}. ETH/USDT: ${ticker.ETHUSDT}`);
});

export default bot;
