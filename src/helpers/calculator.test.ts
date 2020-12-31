import calculator from './calculator';

describe('calculator', () => {
  const btcUnit = 1;
  const baseCurrency = 31461662;

  it('should calculated value', () => {
    let result = calculator.getTransferredValue(btcUnit, baseCurrency);
    expect(result).toEqual(btcUnit * baseCurrency);

    result = calculator.getTransferredValue(1.2, baseCurrency);
    expect(result).toEqual(1.2 * baseCurrency);
  });
});
