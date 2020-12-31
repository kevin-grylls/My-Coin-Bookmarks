const getCurrencyFormat = (data: number | string) =>
  Number(data).toLocaleString();

const getPercentFormat = (data: number | string, cnt: number) =>
  Number(data).toFixed(cnt);

const isCryptoCurrencyType = (value: string) => {
  var num1 = value;

  var pattern = /(^\d+$)|(^\d{1,}.\d{0,2}$)/;

  return pattern.test(num1);
};

export default {
  getCurrencyFormat,
  getPercentFormat,
  isCryptoCurrencyType,
};
