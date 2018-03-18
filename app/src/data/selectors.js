import { createSelector } from 'reselect';
import { valuetoEUR, formatToFixed } from '../helpers/currency';

export const isLoading = state => state.isLoading;

export const requestFailed = state => state.requestFailed;

// preIco selectors

export const preIcoTransactions = state => state.data && state.data.preIco;

export const preIcoAmountsInEuro = createSelector(
  preIcoTransactions,
  preIcoTransactions => {
    let amounts = {
      ETH: 0,
      BTC: 0,
      LTC: 0,
    };
    preIcoTransactions &&
      preIcoTransactions.forEach(
        transaction =>
          (amounts[transaction.currency] += valuetoEUR(transaction)),
      );

    // format amounts to valid EUR units
    Object.keys(amounts).forEach(
      currency => (amounts[currency] = formatToFixed(amounts[currency])),
    );

    return amounts;
  },
);

export const totalPreIcoAmountInEuro = createSelector(
  preIcoAmountsInEuro,
  preIcoAmountsInEuro =>
    formatToFixed(
      Object.keys(preIcoAmountsInEuro).reduce(
        (total, currency) => (total += preIcoAmountsInEuro[currency]),
        0,
      ),
    ),
);

// ico selectors

export const icoTransactions = state => state.data.ico;

export const icoAmountsInEuro = createSelector(
  icoTransactions,
  icoTransactions => {
    let amounts = {
      ETH: 0,
      BTC: 0,
      LTC: 0,
    };
    icoTransactions &&
      icoTransactions.forEach(
        transaction =>
          (amounts[transaction.currency] += valuetoEUR(transaction)),
      );

    // format amounts to valid EUR units
    Object.keys(amounts).forEach(
      currency => (amounts[currency] = formatToFixed(amounts[currency])),
    );

    return amounts;
  },
);

export const totalIcoAmountInEuro = createSelector(
  icoAmountsInEuro,
  icoAmountsInEuro =>
    formatToFixed(
      Object.keys(icoAmountsInEuro).reduce(
        (total, currency) => (total += icoAmountsInEuro[currency]),
        0,
      ),
    ),
);
