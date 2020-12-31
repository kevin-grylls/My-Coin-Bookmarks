import { useState, useEffect } from 'react';
import { getCurrencyDetails } from '../api';

type Details = {
  id: string;
  symbol: string;
  name: string;
  market_cap_rank: number;
  market_data: {
    market_cap: {
      usd: number;
      krw: number;
    };
  };

  localization: {
    en?: string;
    ko?: string;
  };
  description: {
    en?: string;
    ko?: string;
  };
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
  const [open, setOpen] = useState(false);
  const [details, setDetails] = useState<Details>({
    id: '',
    symbol: '',
    name: '',
    market_cap_rank: 0,
    market_data: {
      market_cap: {
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
    const result = await getCurrencyDetails({ id });
    setDetails(result);
  };

  useEffect(() => {
    fetchCurrencyDetails(id);
  }, []);

  return { details, open, setOpen };
}
