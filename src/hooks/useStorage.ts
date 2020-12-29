import { useState, useEffect } from 'react';
import { useGlobalContext } from '../context';
import { storage } from '../helpers';

export function useStorage() {
  const getMyFavorites = () => {
    const list = storage.get('bookmark');
    return list ? JSON.parse(list) : [];
  };

  const [bookmark, setBookmark] = useState(getMyFavorites());
  const { updateCnt, inc } = useGlobalContext();

  const updateBookmark = (id: string) => {
    const result = storage.get('bookmark');
    const list = result ? (JSON.parse(result) as Array<string>) : [];

    storage.set(
      'bookmark',
      JSON.stringify(
        list.includes(id)
          ? list.filter((key: string) => key !== id) // case1: already have same id
          : [id].concat(list), // case2: add new id
      ),
    );

    inc(); // updateCnt++
  };

  useEffect(() => {
    setBookmark(getMyFavorites());
  }, [updateCnt]);

  return { bookmark, updateBookmark };
}
