import React from 'react';
import { useHistory } from 'react-router-dom';
import { TabWrapper, TabItem } from './Style';
import { STRINGS } from '../constants';

export function Tab() {
    const {
        location: { pathname },
    } = useHistory();

    const currentPage = () => pathname === '/';

    return (
        <TabWrapper>
            {STRINGS.TAB.map((name: string, idx: number) => {
                const isActive = idx === 0 ? currentPage() : !currentPage();

                return (
                    <TabItem active={isActive} key={`tab-${idx}`}>
                        {name}
                    </TabItem>
                );
            })}
        </TabWrapper>
    );
}
