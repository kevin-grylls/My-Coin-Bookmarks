import React, { useEffect, useState } from 'react';
import { TableWrapper, TableItem } from './Style';
import { STRINGS } from '../constants';
import { useCurrency } from '../hooks';

export default function Table() {
    const { currency } = useCurrency();

    const head = STRINGS.TABLE.map(({ name, width, align }, idx) => (
        <th key={`th-${idx}`} style={{ width, textAlign: align as 'left' | 'right' }}>
            {name}
        </th>
    ));

    const body = currency.map(
        (
            {
                name,
                symbol,
                current_price,
                price_change_percentage_1h_in_currency,
                price_change_percentage_24h_in_currency,
                price_change_percentage_7d_in_currency,
            }: any,
            idx: number,
        ) => {
            return (
                <tr key={`currency-row-${symbol}-${idx}`}>
                    <TableItem align={'left'} color={'black'}>
                        {name}
                    </TableItem>
                    <TableItem align={'left'}>{symbol}</TableItem>
                    <TableItem align={'right'} color={'black'}>
                        {Number(current_price).toLocaleString()}
                    </TableItem>
                    <TableItem align={'right'}>{Number(price_change_percentage_1h_in_currency).toFixed(2)}</TableItem>
                    <TableItem align={'right'}>{Number(price_change_percentage_24h_in_currency).toFixed(2)}</TableItem>
                    <TableItem align={'right'}>{Number(price_change_percentage_7d_in_currency).toFixed(2)}</TableItem>
                </tr>
            );
        },
    );

    useEffect(() => {
        console.log('data', currency);
    }, [currency]);

    return (
        <TableWrapper>
            <thead>
                <tr>{head}</tr>
            </thead>
            <tbody>{body}</tbody>
        </TableWrapper>
    );
}
