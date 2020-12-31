import { STRINGS } from '../constants';
import { useGlobalContext } from '../context';
import { useLocation } from 'react-router-dom';

export function useFilter() {
  const {
    setViewType,
    setCurrencyType,
    setDisplayRow,
    inc,
  } = useGlobalContext();
  const { pathname } = useLocation();

  const getPathName = (path: string) => pathname === path;

  const updateFilter = (value: string) => {
    switch (value) {
      case STRINGS.FILTER.VIEW_TYPE[0]:
        setViewType('all');
        break;

      case STRINGS.FILTER.VIEW_TYPE[1]:
        setViewType('bookmark');
        break;

      case STRINGS.FILTER.CURRENCY[0]:
        setCurrencyType('krw');
        setTimeout(() => inc(), 200);
        break;

      case STRINGS.FILTER.CURRENCY[1]:
        setCurrencyType('usd');
        setTimeout(() => inc(), 200);
        break;

      case STRINGS.FILTER.LIST_NUMBER[0]:
        setDisplayRow(50);
        setTimeout(() => inc(), 200);
        break;

      case STRINGS.FILTER.LIST_NUMBER[1]:
        setDisplayRow(30);
        setTimeout(() => inc(), 200);
        break;

      case STRINGS.FILTER.LIST_NUMBER[2]:
        setDisplayRow(10);
        break;

      default:
        break;
    }
  };

  return { updateFilter };
}
