import { renderHook } from '@testing-library/react-hooks';
import { useToast } from './useToast';

describe('useToast', () => {
  it('should return initial value', () => {
    const { result } = renderHook(useToast);
    expect(result.current.isToast).toEqual({ status: false, msg: '' });
  });
});
