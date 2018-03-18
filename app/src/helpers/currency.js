// 1 ETH = 10^18 WEI, 1 BTC = 10^8 SATOSHI, 1 LTC = 10^8 LITOSHIS
export const formatToUnit = transaction =>
  transaction.currency === 'ETH'
    ? transaction.value / Math.pow(10, 18)
    : transaction.value / Math.pow(10, 8);

export const formatToFixed = value => +value.toFixed(2);

// 1 BTC = 6,510 EUR, 1 ETH = 453 EUR, 1 LTC = 127 EUR (17.03.2018)
export const valuetoEUR = transaction => {
  let convertedValue =
    transaction.currency === 'ETH'
      ? formatToUnit(transaction) * 453
      : transaction.currency === 'BTC'
        ? formatToUnit(transaction) * 6510
        : formatToUnit(transaction) * 127;

  return formatToFixed(convertedValue);
};
