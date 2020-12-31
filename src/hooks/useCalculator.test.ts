import { renderHook, act } from '@testing-library/react-hooks';
import { useCalculator } from './useCalculator';

describe('useCalculator', () => {
  const currentPrice = '31439407';

  it('should return calculated value', () => {
    const { result } = renderHook(useCalculator);

    expect(result.current.result).toEqual({
      currency: '',
      crypto: '',
    });

    act(() => {
      result.current.getCurrency('2', currentPrice);
    });

    expect(result.current.result).toEqual({
      currency: String(2 * Number(currentPrice)),
      crypto: '2',
    });

    act(() => {
      result.current.getCrypto(currentPrice, currentPrice);
    });

    expect(result.current.result).toEqual({
      currency: currentPrice,
      crypto: '1',
    });

    act(() => {
      result.current.getCrypto(
        currentPrice,
        String(Number(currentPrice) * 3.5),
      );
    });

    expect(result.current.result).toEqual({
      currency: String(Number(currentPrice) * 3.5),
      crypto: '3.5',
    });
  });
});
