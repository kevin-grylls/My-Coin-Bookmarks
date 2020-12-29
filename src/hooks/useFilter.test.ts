import { renderHook, act } from '@testing-library/react-hooks';
import { useFilter } from './useFilter';
import { STRINGS } from '../constants';

describe('useFilter', () => {
  let jestMock: any;

  jestMock = jest.mock('../context/context.tsx', () => ({
    useGlobalContext: () => ({
      inc: jest.fn(),
      setViewType: jest.fn(),
      setCurrencyType: jest.fn(),
      setPage: jest.fn(),
      setDisplayRow: jest.fn(),
    }),
  }));

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should call proper method', () => {
    const { result } = renderHook(useFilter);
    act(() => {
      result.current.updateFilter(STRINGS.FILTER.CURRENCY[0]);
    });
  });
});
