import { renderHook } from '@testing-library/react-hooks';
import { useCurrency } from './useCurrency';

describe('useCurrency', () => {
  // beforeEach(() => {
  //     jest.spyOn(api, 'getMarketCurrencies').mockImplementation(async () => mockData);
  // });

  test('should return currency list from api', async () => {
    const { result, waitForNextUpdate } = renderHook(useCurrency);
    await waitForNextUpdate();
    expect(result.current.currency.length).toBe(50);
  });
});
