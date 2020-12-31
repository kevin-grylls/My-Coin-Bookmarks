import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useTab() {
  const { pathname } = useLocation();

  const isMatchedUrl = pathname === '/' || pathname === '/market';

  const getIdx = () => (isMatchedUrl ? 0 : 1);

  const [tabIdx, setTabIdx] = useState(getIdx());

  const updateTabIdx = (idx: number) => {
    setTabIdx(idx);
  };

  useEffect(() => {
    updateTabIdx(getIdx());
  }, [tabIdx]);

  return { tabIdx, updateTabIdx };
}
