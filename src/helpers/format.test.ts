import formatter from './format';

describe('format', () => {
  const sampleCurrency = '31461662';
  const targetCurrency = '31,461,662.00';
  const samplePercent = '0.22345';
  const targetPercent = '0.2';
  it('should return currency format', () => {
    const result = formatter.getCurrencyFormat(sampleCurrency);
    expect(result).toEqual(targetCurrency);
    const regExt = new RegExp(/^[0-9]{1,3}(,[0-9]{3})*(.[0-9]{1,2})?$/);
    expect(regExt.test(result)).toBe(true);
  });

  it('should return percentage format', () => {
    const result = formatter.getPercentFormat(samplePercent, 1);
    expect(result).toEqual(targetPercent);
  });
});
