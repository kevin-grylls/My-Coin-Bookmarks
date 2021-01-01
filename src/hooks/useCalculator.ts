import { useState, useEffect } from 'react';
import { calculator } from '../helpers';

export function useCalculator() {
  const [result, setResult] = useState<{
    crypto: string;
    currency: string;
  }>({
    crypto: '',
    currency: '',
  });

  const getCurrency = (crypto: string, currency: string) => {
    const result = calculator.getTransferredValue(
      Number(crypto).toFixed(8),
      currency,
    );

    // 소수점 8자리 제한
    const regExp = new RegExp(/(^\d+$)|(^\d{1,}.\d{0,8}$)/);
    // 0으로 시작하는 소수점이 아닐 때
    const isInvalidNum =
      crypto.length > 1 && crypto.startsWith('0') && !crypto.startsWith('0.');

    if (isInvalidNum) {
      return setResult({
        crypto: Number(crypto).toString(),
        currency: result.toString(),
      });
    }

    setResult((prevState) => {
      return {
        crypto:
          crypto === '' ? '' : regExp.test(crypto) ? crypto : prevState.crypto,
        currency: result.toString(),
      };
    });
  };

  const getCrypto = (currency: string, current: string) => {
    const result = calculator.getTransferredValue(
      Number(Number(current) / Number(currency)),
      1,
    );

    setResult({
      crypto: result.toLocaleString(),
      currency: current,
    });
  };

  useEffect(() => {
    setResult({
      crypto: '',
      currency: '',
    });
  }, []);

  return { result, getCurrency, getCrypto };
}
