import { put, call, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import { lookupData } from './reducer';

export const fetchTransactions = () =>
  axios({
    method: 'get',
    url: 'https://blockchain.brickblock.io/inputs',
  });

export function* fetchData() {
  try {
    const response = yield call(fetchTransactions);

    yield put(lookupData.success(response.data));
  } catch (error) {
    yield put(lookupData.error());
  }
}

export default function* dataSaga() {
  yield takeLatest(lookupData.request.actionType, fetchData);
}
