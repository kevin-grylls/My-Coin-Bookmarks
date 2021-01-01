import { getMarketCurrencies, getCurrencyDetails } from './coins';

describe('getMarketCurrencies', () => {
  const query = {
    vsCurrency: 'usd',
    order: 'market_cap_desc',
    perPage: 10,
    page: 1,
    sparkLine: false,
    priceChangePercentage: '1h,24h,7d',
  };

  it('should return currency data', async () => {
    const result = await getMarketCurrencies(query);
    expect(result).toHaveLength(10);
  });

  it('should have 20 data', async () => {
    const result = await getMarketCurrencies({ ...query, perPage: 20 });
    expect(result).toHaveLength(20);
  });

  it('should return a single array', async () => {
    const result = await getMarketCurrencies({ ...query, ids: 'bitcoin' });
    expect(result).toHaveLength(1);
  });

  it('should return on bitcoin and ethereum', async () => {
    const result = await getMarketCurrencies({
      ...query,
      ids: 'bitcoin,ethereum',
    });
    expect(result).toHaveLength(2);
  });
});

describe('getCurrencyDetails', () => {
  it('should fetch data using id', async () => {
    const result = await getCurrencyDetails({ id: 'bitcoin' });
    expect(result.id).toEqual('bitcoin');
    expect(result.localization.ko).toEqual('비트코인');
  });
});
