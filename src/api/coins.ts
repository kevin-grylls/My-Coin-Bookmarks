interface Payload {
    vsCurrency: string;
    order: string;
    perPage?: number;
    page?: number;
    sparkLine: boolean;
    priceChangePercentage?: string;
}

export const getMarketCurrencies = ({
    vsCurrency,
    order = 'market_cap_desc',
    perPage = 10,
    page = 1,
    sparkLine = false,
    priceChangePercentage = '1h,24h,7d',
}: Payload) => {
    return fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${vsCurrency}&order=${order}&per_page=${perPage}&page=${page}&sparkline=${sparkLine}&price_change_percentage=${priceChangePercentage}`,
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
