import { renderHook } from '@testing-library/react-hooks';
import { useStorage } from './useStorage';
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

  beforeAll(async () => {
    await storage.clear();
  });

  afterAll(async () => {
    await storage.clear();
  });

  it('should return empty array', () => {
    const { result } = renderHook(useStorage);
    expect(result.current.bookmark).toEqual([]);
  });

  it('should return sample array', () => {
    storage.set('bookmark', JSON.stringify(sampleReturn));
    const { result } = renderHook(useStorage);
    expect(result.current.bookmark).toEqual(sampleReturn);
  });
});
