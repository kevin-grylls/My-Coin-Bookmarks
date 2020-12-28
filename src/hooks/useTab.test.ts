import { renderHook } from '@testing-library/react-hooks';
import { useTab } from './useTab';

jest.mock('react-router-dom', () => ({
  useLocation: () => ({
    pathname: '/market',
  }),
}));

describe('useTab', () => {
  it('should return idx', () => {
    const { result } = renderHook(useTab);
    expect(result.current.tabIdx).toBe(0);
  });
});
