import React, { ChangeEvent } from 'react';
import { Select, FiltersWrapper } from './Style';
import { STRINGS } from '../../constants';
import { useGlobalContext } from '../../context';

export function Filter() {
  const { setViewType, setCurrencyType, setDisplayRow } = useGlobalContext();

  const handleViewType = (e: ChangeEvent<HTMLSelectElement>) => {
    switch (e.target.value) {
      case STRINGS.FILTER.VIEW_TYPE[0]:
        setViewType('ALL');
        break;
      default:
        setViewType('BOOKMARK');
        break;
    }
  };

  const handleCurrency = (e: ChangeEvent<HTMLSelectElement>) => {
    switch (e.target.value) {
      case STRINGS.FILTER.CURRENCY[0]:
        setCurrencyType('krw');
        break;
      default:
        setCurrencyType('usd');
        break;
    }
  };

  const handleDisplayNumber = (e: ChangeEvent<HTMLSelectElement>) => {
    switch (e.target.value) {
      case STRINGS.FILTER.LIST_NUMBER[0]:
        setDisplayRow(10);
        break;
      case STRINGS.FILTER.LIST_NUMBER[1]:
        setDisplayRow(30);
        break;
      case STRINGS.FILTER.LIST_NUMBER[2]:
        setDisplayRow(50);
        break;
      default:
        break;
    }
  };

  return (
    <FiltersWrapper>
      <Select
        data-testid={'select-view-type'}
        marginLeft={'auto'}
        onChange={handleViewType}
      >
        {STRINGS.FILTER.VIEW_TYPE.map((name: string) => (
          <option key={`view-type-${name}`} value={name}>
            {name}
          </option>
        ))}
      </Select>
      <Select
        data-testid={'select-currency-type'}
        marginLeft={'40px'}
        onChange={handleCurrency}
      >
        {STRINGS.FILTER.CURRENCY.map((name: string) => (
          <option key={`currency-${name}`} value={name}>
            {name}
          </option>
        ))}
      </Select>
      <Select
        data-testid={'select-list-number'}
        marginLeft={'40px'}
        onChange={handleDisplayNumber}
      >
        {STRINGS.FILTER.LIST_NUMBER.map((name: string) => (
          <option key={`list-number-${name}`} value={name}>
            {name}
          </option>
        ))}
      </Select>
    </FiltersWrapper>
  );
}
