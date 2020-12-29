import { renderHook } from '@testing-library/react-hooks';
import { useToast } from './useToast';

describe('useToast', () => {
  it('should return null', () => {
    const { result } = renderHook(useToast);
    expect(result.current.isToast).toBe(false);
  });
});
