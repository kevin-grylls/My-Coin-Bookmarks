import { useState, useEffect } from 'react';
import { useStorage } from './useStorage';
import { getMarketCurrencies } from '../api';

export function useBookmark() {
  const { bookmark } = useStorage();

  const [favorites, setFavorites] = useState([]);

  const fetchMarketCurrencies = async () => {
    const result = await getMarketCurrencies({
      vsCurrency: 'krw',
      ids: (bookmark as Array<string>).join(',').toLowerCase(),
      order: 'market_cap_desc',
      sparkLine: false,
    });

    setFavorites(result);
  };

  useEffect(() => {
    fetchMarketCurrencies();
  }, [bookmark]);

  return { favorites };
}
