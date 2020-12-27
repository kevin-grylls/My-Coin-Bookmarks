import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import { TabWrapper, TabItem } from './Style';
import { STRINGS, ROUTES } from '../constants';

export function Tab() {
  const {
    location: { pathname },
  } = useHistory();

  const isMarketPage = () => pathname === '/market';

  return (
    <TabWrapper>
      {STRINGS.TAB.map((name: string, idx: number) => {
        const isActive = idx === 0 ? isMarketPage() : !isMarketPage();

        return (
          <TabItem active={isActive} key={`tab-${idx}`}>
            <Link to={ROUTES.TAB[idx + 1]}>{name}</Link>
          </TabItem>
        );
      })}
    </TabWrapper>
  );
}
