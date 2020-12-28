import React, { ChangeEvent } from 'react';
import { Select, FiltersWrapper } from './Style';
import { STRINGS } from '../../constants';
import { useFilter } from '../../hooks';

export function Filter() {
  const { updateFilter } = useFilter();

  return (
    <FiltersWrapper>
      <Select
        data-testid={'select-view-type'}
        marginLeft={'auto'}
        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
          updateFilter(e.target.value)
        }
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
        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
          updateFilter(e.target.value)
        }
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
        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
          updateFilter(e.target.value)
        }
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
