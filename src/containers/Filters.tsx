import React, { ChangeEvent } from 'react';
import { Select, FiltersWrapper } from './Style';
import { STRINGS } from '../constants';
import { useGlobalContext } from '../context';

export function Filters() {
  const { setViewType, setCurrencyType, setDisplayRow } = useGlobalContext();

  const handleViewType = (e: ChangeEvent<HTMLSelectElement>) => {
    switch (e.target.value) {
      case STRINGS.SELECT.VIEW_TYPE[0]:
        setViewType('ALL');
        break;
      default:
        setViewType('BOOKMARK');
        break;
    }
  };

  const handleCurrency = (e: ChangeEvent<HTMLSelectElement>) => {
    switch (e.target.value) {
      case STRINGS.SELECT.CURRENCY[0]:
        setCurrencyType('krw');
        break;
      default:
        setCurrencyType('usd');
        break;
    }
  };

  const handleDisplayNumber = (e: ChangeEvent<HTMLSelectElement>) => {
    switch (e.target.value) {
      case STRINGS.SELECT.LIST_NUMBER[0]:
        setDisplayRow(10);
        break;
      case STRINGS.SELECT.LIST_NUMBER[1]:
        setDisplayRow(30);
        break;
      case STRINGS.SELECT.LIST_NUMBER[2]:
        setDisplayRow(50);
        break;
      default:
        break;
    }
  };

  return (
    <FiltersWrapper>
      <Select marginLeft={'auto'} onChange={handleViewType}>
        {STRINGS.SELECT.VIEW_TYPE.map((name: string) => (
          <option key={`view-type-${name}`} value={name}>
            {name}
          </option>
        ))}
      </Select>
      <Select marginLeft={'40px'} onChange={handleCurrency}>
        {STRINGS.SELECT.CURRENCY.map((name: string) => (
          <option key={`currency-${name}`} value={name}>
            {name}
          </option>
        ))}
      </Select>
      <Select marginLeft={'40px'} onChange={handleDisplayNumber}>
        {STRINGS.SELECT.LIST_NUMBER.map((name: string) => (
          <option key={`list-number-${name}`} value={name}>
            {name}
          </option>
        ))}
      </Select>
    </FiltersWrapper>
  );
}
