import { useState, useEffect } from 'react';
import { getMarketCurrencies } from '../api';
import { useGlobalContext } from '../context';
import { useLoading } from './useLoading';

export function useCurrency() {
  const {
    viewType,
    currencyType,
    page,
    displayRow,
    setPage,
    init,
  } = useGlobalContext();
  const { loading } = useLoading();
  const [currency, setCurrency] = useState([]);

  const updateCurrency = (result: never[]) => {
    setPage(page + 1);
    setCurrency(currency.concat(result));
  };

  const fetchMarketCurrencies = async (type: string) => {
    const result = await getMarketCurrencies({
      vsCurrency: currencyType,
      order: 'market_cap_desc',
      perPage: displayRow,
      page: type === 'fetch' ? 1 : page + 1,
      sparkLine: false,
    });

    type === 'fetch' ? setCurrency(result) : updateCurrency(result);
  };

  const loadMoreCurrency = () => {
    loading();
    fetchMarketCurrencies('update');
  };

  useEffect(() => {
    loading();
    fetchMarketCurrencies('fetch');
  }, [currencyType, displayRow]);

  useEffect(() => {
    init();
  }, []);

  return { currency, currencyType, loadMoreCurrency, viewType };
}
