import React from 'react';
import { Link } from 'react-router-dom';
import { TableWrapper, TableItem, Star, Text } from './Style';
import { STRINGS, ROUTES } from '../../constants';

type TableInput = {
  isOnlyBookmark?: boolean;
  viewType?: string;
  bookMark?: Array<string>;
  currency: Array<any>;
  currencyType: string;
  onClick: (...args: any) => void;
  onAddClick?: (...args: any) => void;
};

export function Table({
  isOnlyBookmark = false,
  viewType = 'all',
  bookMark = [],
  currency = [],
  currencyType = 'krw',
  onClick,
  onAddClick,
}: TableInput) {
  const currencyMark = currencyType === 'usd' ? '$' : '₩';

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
            const isStar = isOnlyBookmark || bookMark.includes(id);
            const currentPrice = Number(current_price);
            const anHourPrice = Number(price_change_percentage_1h_in_currency);
            const dailyPrice = Number(price_change_percentage_24h_in_currency);
            const weeklyPrice = Number(price_change_percentage_7d_in_currency);
            const totalVolume = Number(total_volume);

            const trElement = (
              <tr key={`currency-row-${symbol}-${idx}`}>
                <TableItem align={'center'} color={'black'}>
                  <Star
                    isSelected={isStar}
                    className={'fa fa-star'}
                    onClick={(e) => onClick(id)}
                  />
                </TableItem>
                <TableItem align={'left'} color={'black'}>
                  <strong>
                    <Link to={`/details/${id}`}>{name}</Link>
                  </strong>
                </TableItem>
                <TableItem align={'left'}>
                  <strong>{symbol.toUpperCase()}</strong>
                </TableItem>
                <TableItem align={'right'} color={'black'}>
                  <strong>
                    {`${currencyMark}${currentPrice.toLocaleString()}`}
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
                    {`${currencyMark}${totalVolume.toLocaleString()}`}
                  </strong>
                </TableItem>
                <TableItem />
              </tr>
            );

            if (viewType === 'bookmark') {
              return isStar ? trElement : null;
            } else {
              return trElement;
            }
          },
        )}
      </tbody>
      {!isOnlyBookmark && (
        <tfoot>
          <tr>
            <TableItem colSpan={9} align={'center'}>
              <Text onClick={onAddClick}>{STRINGS.ADD_BTN}</Text>
            </TableItem>
          </tr>
        </tfoot>
      )}
    </TableWrapper>
  );
}
