import React, { Fragment } from 'react';
import { Filter } from './Filter';
import { Table } from '../../components';
import { useCurrency, useStorage } from '../../hooks';

export default function Currency() {
  const { currency, currencyType, loadMoreCurrency } = useCurrency();
  const { bookmark, updateBookmark } = useStorage();

  return (
    <Fragment>
      <Filter />
      <Table
        bookMark={bookmark}
        currency={currency}
        currencyType={currencyType}
        onClick={updateBookmark}
        onAddClick={() => loadMoreCurrency()}
      />
    </Fragment>
  );
}
