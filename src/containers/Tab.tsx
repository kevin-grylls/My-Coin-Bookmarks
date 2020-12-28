import React, { useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { TabWrapper, TabItem } from './Style';
import { STRINGS, ROUTES } from '../constants';
import { useTab } from '../hooks';

export function Tab() {
  const { tabIdx, updateTabIdx } = useTab();

  return (
    <TabWrapper>
      {STRINGS.TAB.map((name: string, idx: number) => {
        return (
          <TabItem active={idx === tabIdx} key={`tab-${idx}`}>
            <Link to={ROUTES.TAB[idx]} onClick={() => updateTabIdx(idx)}>
              {name}
            </Link>
          </TabItem>
        );
      })}
    </TabWrapper>
  );
}
