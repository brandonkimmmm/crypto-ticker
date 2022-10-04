import bot from './telegram/index.js';
import binance from './tickers/binance/index.js';

binance();
bot.launch();
