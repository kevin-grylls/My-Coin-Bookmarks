import storage from './storage';

describe('storage', () => {
  beforeEach(() => {
    storage.clear();
  });

  afterAll(() => {
    storage.clear();
  });

  const sample = ['1', '2', '3', '4'];

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

  it('should save an array and get same array', () => {
    storage.set('sample', JSON.stringify(sample));
    expect(sample).toEqual(JSON.parse(storage.get('sample') as string));
  });

  it('should return all keys of local storage', () => {
    sample.map((item: string) => {
      storage.set(item, item);
    });

    expect(storage.getAll()).toEqual(sample);
  });
});
