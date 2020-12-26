import { getMarketCurrencies } from './coins';

describe('coin api', () => {
    const query = {
        vsCurrency: 'usd',
        order: 'market_cap_desc',
        perPage: 10,
        page: 1,
        sparkLine: false,
        priceChangePercentage: '1h,24h,7d',
    };

    let result;

    beforeEach(async () => {
        result = await getMarketCurrencies(query);
    });

    it('should return currency data', async () => {
        expect(result.length).toBe(10);
    });

    it('should have 20 data', async () => {
        const result = await getMarketCurrencies({ ...query, perPage: 20 });
        expect(result.length).toBe(20);
    });
});
