import { renderHook } from '@testing-library/react-hooks';
import { useBookmark } from './useBookmark';
import { storage } from '../helpers';

describe('useBookmark', () => {
  const sampleReturn = [
    'Bitcoin',
    'Ethereum',
    'Tether',
    'XRP',
    'Litecoin',
    'Bitcoin Cash',
  ];

  beforeAll(() => {
    storage.clear();
  });

  afterAll(() => {
    storage.clear();
  });

  it('should return empty array', () => {
    const { result } = renderHook(useBookmark);
    expect(result.current.bookmark).toEqual([]);
  });

  it('should return sample array', () => {
    storage.set('bookmark', JSON.stringify(sampleReturn));
    const { result } = renderHook(useBookmark);
    expect(result.current.bookmark).toEqual(sampleReturn);
  });
});
