import { useState, useEffect } from 'react';
import { getMarketCurrencies } from '../api';
import { useGlobalContext } from '../context';

export function useCurrency() {
  const { currencyType, page, displayRow } = useGlobalContext();
  const [currency, setCurrency] = useState([]);

  const fetchMarketCurrencies = async () => {
    const result = await getMarketCurrencies({
      vsCurrency: currencyType,
      order: 'market_cap_desc',
      perPage: displayRow,
      page: page,
      sparkLine: false,
    });

    setCurrency(result);
  };

  useEffect(() => {
    fetchMarketCurrencies();
  }, [currencyType, displayRow]);

  return { currency };
}
