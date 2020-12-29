import React, { Fragment } from 'react';
import { useBookmark, useStorage } from '../../hooks';
import { Table } from '../../components';
import { EmptyDiv } from './Style';

export default function Bookmark() {
  const { favorites } = useBookmark();
  const { updateBookmark } = useStorage();

  return (
    <Fragment>
      <EmptyDiv />
      <Table
        isOnlyBookmark={true}
        currency={favorites}
        currencyType={'krw'}
        onClick={updateBookmark}
      />
    </Fragment>
  );
}
