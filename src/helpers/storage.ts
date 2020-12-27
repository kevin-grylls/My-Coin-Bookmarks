const set = (key: string, value: any) => localStorage.setItem(key, value);
const get = (key: string) => localStorage.getItem(key);
const remove = (key: string) => localStorage.removeItem(key);
const clear = () => localStorage.clear();

export default {
  set,
  get,
  remove,
  clear,
};
