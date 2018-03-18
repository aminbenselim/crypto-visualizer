import { call } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';
import { throwError } from 'redux-saga-test-plan/providers';

import { mockData } from '../../helpers/mock';
import dataSaga, { fetchTransactions } from '../saga';
import { lookupData } from '../reducer';

describe('fetchData', () => {
  it('dispatches success action if data fetching succeeds', () => {
    expectSaga(dataSaga, lookupData.request)
      .provide([call(fetchTransactions)], mockData)
      .run()
      .then(() => {
        expect(lookupData.success(mockData)).toBeCalled();
      });
  });
  it('dispatches error action if data fetching fails', () => {
    expectSaga(dataSaga, lookupData.request)
      .provide([call(fetchTransactions)], throwError())
      .run()
      .then(() => {
        expect(lookupData.error()).toBeCalled();
      });
  });
});
