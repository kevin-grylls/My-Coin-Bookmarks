import { STRINGS } from '../constants';
import { useGlobalContext } from '../context';

export function useFilter() {
  const { setViewType, setCurrencyType, setDisplayRow } = useGlobalContext();

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
        break;

      case STRINGS.FILTER.CURRENCY[1]:
        setCurrencyType('usd');
        break;

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

  return { updateFilter };
}
