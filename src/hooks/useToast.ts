import { useState } from 'react';
import { useGlobalContext } from '../context';

export function useToast() {
  const { isToast, setToast } = useGlobalContext();

  const toast = () => {
    setToast(true);
    setTimeout(() => setToast(false), 1000);
  };

  return { isToast, toast };
}
