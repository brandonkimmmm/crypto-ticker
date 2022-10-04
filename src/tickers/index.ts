const TICKER = {
    BTCUSDT: '0',
    ETHUSDT: '0'
};

export const getTickers = () => {
    return TICKER;
};

export const setTicker = (pair: 'BTCUSDT' | 'ETHUSDT', amount: string) => {
    TICKER[pair] = amount;
};
