const getCurrencyFormat = (data: number | string) =>
  Number(data).toLocaleString();

export default {
  getCurrencyFormat,
};
