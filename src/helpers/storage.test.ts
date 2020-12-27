import storage from './storage';

describe('storage', () => {
  beforeEach(() => {
    storage.clear();
  });

  it('should save the value', () => {
    storage.set('test', 'value');
    expect(storage.get('test')).toBe('value');
  });

  it('should remove the value', () => {
    storage.set('test', 'value');
    const item = storage.get('test');
    storage.remove('test');

    expect(item).not.toEqual(storage.get('test'));
    expect(storage.get('test')).toBe(null);
  });
});
