import { renderHook, act } from '@testing-library/react-hooks';
import { useFilter } from './useFilter';
import { STRINGS } from '../constants';

jest.mock('../context/context.tsx', () => ({
  useGlobalContext: () => ({
    inc: jest.fn(),
    setViewType: jest.fn(),
    setCurrencyType: jest.fn(),
    setPage: jest.fn(),
    setDisplayRow: jest.fn(),
  }),
}));

describe('useFilter', () => {
  let jestMock: any;

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
