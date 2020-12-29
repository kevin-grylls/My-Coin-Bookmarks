interface MarketCurrencies {
  vsCurrency: string;
  ids?: string;
  order: string;
  perPage?: number;
  page?: number;
  sparkLine: boolean;
  priceChangePercentage?: string;
}

export const getMarketCurrencies = ({
  vsCurrency,
  ids = '',
  order = 'market_cap_desc',
  perPage,
  page = 1,
  sparkLine = false,
  priceChangePercentage = '1h,24h,7d',
}: MarketCurrencies) => {
  return fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${vsCurrency}&order=${order}&per_page=${perPage}&page=${page}&sparkline=${sparkLine}&price_change_percentage=${priceChangePercentage}&ids=${ids}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  )
    .then((response) => response.json())
    .catch((error) => []);
};

interface CurrencyDetails {
  id: string;
}

export const getCurrencyDetails = ({ id }: CurrencyDetails) => {
  return fetch(
    `https://api.coingecko.com/api/v3/coins/${id}?localization=true`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  )
    .then((response) => response.json())
    .catch((error) => []);
};
