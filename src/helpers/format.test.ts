import formatter from './format';

describe('format', () => {
  const sampleCurrency = '31461662';
  const targetCurrency = '31,461,662';
  const samplePercent = '0.22345';
  const targetPercent = '0.2';
  it('should return currency format', () => {
    const result = formatter.getCurrencyFormat(sampleCurrency);
    expect(result).toEqual(targetCurrency);
  });

  it('should return percentage format', () => {
    const result = formatter.getPercentFormat(samplePercent, 1);
    expect(result).toEqual(targetPercent);
  });
});
