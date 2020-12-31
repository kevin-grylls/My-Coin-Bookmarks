import { renderHook } from '@testing-library/react-hooks';
import { useDetails } from './useDetails';

describe('useDetails', () => {
  it('should return fetching data', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useDetails({ id: 'bitcoin' }),
    );
    await waitForNextUpdate();

    expect(result.current.details.id).toEqual('bitcoin');
    expect(result.current.details.name).toEqual('Bitcoin');
    expect(result.current.details.description).toBeTruthy();
  });
});
