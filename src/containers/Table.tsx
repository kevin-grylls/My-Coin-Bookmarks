import React, { useEffect } from 'react';
import { TableWrapper, TableItem, Star } from './Style';
import { STRINGS } from '../constants';
import { useCurrency } from '../hooks';
import { useGlobalContext } from '../context';

export default function Table() {
  const { currencyType } = useGlobalContext();
  const { currency } = useCurrency();

  const handleClick = (id: string) => {
    console.log(id);
  };

  const currencyMark = currencyType === 'usd' ? '$' : '₩';

  useEffect(() => {
    console.log('data', currency);
  }, [currency]);

  return (
    <TableWrapper>
      <thead>
        <tr>
          {STRINGS.TABLE.map(({ name, width, align }, idx) => (
            <th
              key={`th-${idx}`}
              style={{ width, textAlign: align as 'left' | 'right' }}
            >
              {name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {currency.map(
          (
            {
              id,
              name,
              symbol,
              current_price,
              price_change_percentage_1h_in_currency,
              price_change_percentage_24h_in_currency,
              price_change_percentage_7d_in_currency,
              total_volume,
            }: any,
            idx: number,
          ) => {
            const currentPrice = Number(current_price);
            const anHourPrice = Number(price_change_percentage_1h_in_currency);
            const dailyPrice = Number(price_change_percentage_24h_in_currency);
            const weeklyPrice = Number(price_change_percentage_7d_in_currency);
            const totalVolume = Number(total_volume);

            return (
              <tr key={`currency-row-${symbol}-${idx}`}>
                <TableItem align={'center'} color={'black'}>
                  <Star
                    isSelected={true}
                    className={'fa fa-star'}
                    onClick={(e) => handleClick(id)}
                  />
                </TableItem>
                <TableItem align={'left'} color={'black'}>
                  <strong>{name}</strong>
                </TableItem>
                <TableItem align={'left'}>
                  <strong>{symbol.toUpperCase()}</strong>
                </TableItem>
                <TableItem align={'right'} color={'black'}>
                  <strong>
                    {currencyMark}
                    {currentPrice.toLocaleString()}
                  </strong>
                </TableItem>
                <TableItem
                  align={'right'}
                  color={anHourPrice > 0 ? 'red' : 'blue'}
                >
                  {anHourPrice.toFixed(1)}%
                </TableItem>
                <TableItem
                  align={'right'}
                  color={dailyPrice > 0 ? 'red' : 'blue'}
                >
                  {dailyPrice.toFixed(1)}%
                </TableItem>
                <TableItem
                  align={'right'}
                  color={weeklyPrice > 0 ? 'red' : 'blue'}
                >
                  {weeklyPrice.toFixed(1)}%
                </TableItem>
                <TableItem align={'right'} color={'black'}>
                  <strong>
                    {currencyMark}
                    {totalVolume.toLocaleString()}
                  </strong>
                </TableItem>
              </tr>
            );
          },
        )}
      </tbody>
    </TableWrapper>
  );
}
