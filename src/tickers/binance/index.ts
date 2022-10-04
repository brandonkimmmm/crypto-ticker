import { BinanceClient } from 'ccxws';
import { setTicker } from '../index.js';

const init = () => {
    const binance = new BinanceClient();

    binance.subscribeTrades({
        id: 'BTCUSDT',
        base: 'BTC',
        quote: 'USDT'
    });

    binance.subscribeTrades({
        id: 'ETHUSDT',
        base: 'ETH',
        quote: 'USDT'
    });

    binance.on('trade', (trade: { price: string }, market: { id: string }) => {
        const marketId = market.id;
        if (marketId === 'BTCUSDT' || marketId === 'ETHUSDT') {
            setTicker(marketId, trade.price);
        }
    });
};

export default init;
