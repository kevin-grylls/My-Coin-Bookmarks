import { useState, useEffect } from 'react';

export function useCalculator() {
  const [coin, setCoin] = useState({
    coin: 0,
    money: 0,
  });

  const calculateCoin = ({
    type,
    value,
  }: {
    type: string;
    value: number;
  }) => {};

  return { coin, calculateCoin };
}
