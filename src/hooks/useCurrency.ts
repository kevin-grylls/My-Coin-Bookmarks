import { useState, useEffect } from 'react';
import { getMarketCurrencies } from '../api';

export function useCurrency() {
    const [currency, setCurrency] = useState([]);

    const fetchMarketCurrencies = async () => {
        const result = await getMarketCurrencies({
            vsCurrency: 'usd',
            order: 'market_cap_desc',
            perPage: 10,
            page: 1,
            sparkLine: false,
        });

        setCurrency(result);
    };

    useEffect(() => {
        fetchMarketCurrencies();
    }, []);

    return { currency, setCurrency };
}
