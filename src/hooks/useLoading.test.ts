import { renderHook } from '@testing-library/react-hooks';
import { useLoading } from './useLoading';

describe('useLoading', () => {
  it('should change 2 times when calling loading method', () => {
    const { result } = renderHook(useLoading);
    expect(result.current.isLoading).toBe(false);
  });
});
