import { useState, useEffect } from 'react';
import { useGlobalContext } from '../context';
import { storage } from '../helpers';
import { useToast } from './useToast';

export function useStorage() {
  const getMyFavorites = () => {
    const list = storage.get('bookmark');
    return list ? JSON.parse(list) : [];
  };

  const [bookmark, setBookmark] = useState(getMyFavorites());
  const { toast } = useToast();
  const { updateCnt, inc } = useGlobalContext();

  const updateFavorites = (id: string) => {
    const result = storage.get('bookmark');
    const list = result ? (JSON.parse(result) as Array<string>) : [];
    const isAlreadyTaken = list.includes(id);

    console.log('remote id:', id);
    console.log('have key:', isAlreadyTaken);

    storage.set(
      'bookmark',
      JSON.stringify(
        isAlreadyTaken
          ? list.filter((key: string) => key !== id) // case1: already have same id
          : [id].concat(list), // case2: add new id
      ),
    );

    if (isAlreadyTaken) toast();
    inc(); // updateCnt++
  };

  const updateBookmark = (id: string) => {
    setTimeout(() => updateFavorites(id), 1000);
  };

  useEffect(() => {
    setBookmark(getMyFavorites());
  }, [updateCnt]);

  return { bookmark, updateBookmark };
}
