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
    .then((response) => {
      return {
        ok: response.ok,
        data: response.json(),
      };
    })
    .then((res) => {
      if (res.ok) {
        return res.data;
      } else {
        return [];
      }
    })
    .catch((err) => console.error(err));
};

interface CurrencyDetails {
  id: string;
}

export const getCurrencyDetails = ({ id }: CurrencyDetails) => {
  return fetch(
    `https://api.coingecko.com/api/v3/coins/${id}?tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  )
    .then((response) => {
      return {
        ok: response.ok,
        data: response.json(),
      };
    })
    .then((res) => {
      if (res.ok) {
        return res.data;
      } else {
        return {
          id: '',
          symbol: '',
          name: '',
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
        };
      }
    })
    .catch((err) => console.error(err));
};
