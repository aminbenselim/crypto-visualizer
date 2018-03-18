import createSagaMiddleware from 'redux-saga';

import dataSaga from '../data/saga';

export const sagaMiddleware = createSagaMiddleware();
export const runSagaMiddleware = () => sagaMiddleware.run(dataSaga);
