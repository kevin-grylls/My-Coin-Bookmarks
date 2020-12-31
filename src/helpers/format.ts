const getCurrencyFormat = (data: number | string) =>
  Number(data).toLocaleString();

const getPercentFormat = (data: number | string, cnt: number) =>
  Number(data).toFixed(cnt);

export default {
  getCurrencyFormat,
  getPercentFormat,
};
