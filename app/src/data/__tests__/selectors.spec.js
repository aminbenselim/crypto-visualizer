import * as dataSelectors from '../selectors';
import { mockState, mockData } from '../../helpers/mock';

// ico selectors have the same logic as the preIco selectors,
// to save time I only wrote half of the tests

describe('preIcoTransactions', () => {
  it('return all preIco transactions', () => {
    expect(dataSelectors.preIcoTransactions(mockState)).toEqual(
      mockData.preIco,
    );
  });
});

describe('preIcoAmountsInEuro', () => {
  it('return preIco sum of each cryptocurrency in euro', () => {
    const mockResult = {
      ETH: 2163.94,
      BTC: 240804.9,
      LTC: 1136.55,
    };

    expect(dataSelectors.preIcoAmountsInEuro(mockState)).toEqual(mockResult);
  });
});

describe('totalPreIcoAmountInEuro', () => {
  it('return the total sum of of all preIco transactions in euro', () => {
    const mockResult = 244105.39;

    expect(dataSelectors.totalPreIcoAmountInEuro(mockState)).toEqual(
      mockResult,
    );
  });
});
