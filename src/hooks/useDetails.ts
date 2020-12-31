import { useState, useEffect } from 'react';
import { getCurrencyDetails } from '../api';
import { useGlobalContext } from '../context';
import { useLoading } from './useLoading';

type MarketData = {
  usd: number;
  krw: number;
};

type LocalInfo = {
  en?: string;
  ko?: string;
};

type Details = {
  id: string;
  symbol: string;
  name: string;
  market_cap_rank: number;
  public_interest_score: number;
  market_data: {
    total_volume: MarketData;
    market_cap: MarketData;
    market_cap_change_24h_in_currency: MarketData;
    market_cap_change_percentage_24h: MarketData;
    price_change_24h: MarketData;
    price_change_24h_in_currency: MarketData;
    price_change_percentage_1h_in_currency: MarketData;
    current_price: MarketData;
  };
  localization: LocalInfo;
  description: LocalInfo;
  image: {
    thumb?: string;
    small?: string;
    large?: string;
  };
  links: {
    homepage?: Array<string>;
  };
};

export function useDetails({ id }: { id: string }) {
  const { currencyType } = useGlobalContext();
  const { loading } = useLoading();
  const [open, setOpen] = useState(false);
  const [details, setDetails] = useState<Details>({
    id: '',
    symbol: '',
    name: '',
    public_interest_score: 0,
    market_cap_rank: 0,
    market_data: {
      total_volume: {
        usd: 0,
        krw: 0,
      },
      market_cap: {
        usd: 0,
        krw: 0,
      },
      market_cap_change_percentage_24h: {
        usd: 0,
        krw: 0,
      },
      market_cap_change_24h_in_currency: {
        usd: 0,
        krw: 0,
      },
      price_change_24h: {
        usd: 0,
        krw: 0,
      },
      price_change_24h_in_currency: {
        usd: 0,
        krw: 0,
      },
      price_change_percentage_1h_in_currency: {
        usd: 0,
        krw: 0,
      },
      current_price: {
        usd: 0,
        krw: 0,
      },
    },
    localization: {
      en: '',
      ko: '',
    },
    description: {
      en: '',
      ko: '',
    },
    image: {
      thumb: '',
      small: '',
      large: '',
    },
    links: {
      homepage: [''],
    },
  });

  const fetchCurrencyDetails = async (id: string) => {
    loading();
    const result = await getCurrencyDetails({ id });
    setDetails(result);
  };

  useEffect(() => {
    fetchCurrencyDetails(id);
  }, []);

  return { details, open, setOpen, currencyType };
}
