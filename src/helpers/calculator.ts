const getTransferredValue = (
  ratio: number | string,
  baseCurrency: number | string,
) => Number(ratio) * Number(baseCurrency);

export default {
  getTransferredValue,
};
