import React, { Fragment } from 'react';
import { Filter } from './Filter';
import { Table } from '../../components';
import { useGlobalContext } from '../../context';
import { useCurrency, useBookmark } from '../../hooks';

export default function Currency() {
  const { currencyType } = useGlobalContext();
  const { currency } = useCurrency();
  const { bookmark, updateBookmark } = useBookmark();

  return (
    <Fragment>
      <Filter />
      <Table
        bookMark={bookmark}
        currency={currency}
        currencyType={currencyType}
        onClick={updateBookmark}
      />
    </Fragment>
  );
}
