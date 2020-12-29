import { renderHook } from '@testing-library/react-hooks';
import { useBookmark } from './useBookmark';
import { storage } from '../helpers';

describe('useBookmark', () => {
  const sample = ['Bitcoin', 'Ethereum', 'Tether', 'bitcoin-cash'];

  beforeAll(() => {
    storage.set('bookmark', JSON.stringify(sample));
  });

  afterAll(() => {
    storage.clear();
  });

  it('should return currency data using storage', async () => {
    const { result, waitForNextUpdate } = renderHook(useBookmark);
    await waitForNextUpdate();

    expect(result.current.favorites.length).toBe(sample.length);
  });
});
