import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './reducers';

export const history = createHistory();

const enhancers =
  process.env.NODE_ENV === 'development' &&
  typeof window.devToolsExtension === 'function'
    ? [window.devToolsExtension()]
    : [];

const composedEnhancers = compose(
  applyMiddleware(routerMiddleware(history)),
  ...enhancers,
);

export default createStore(rootReducer, {}, composedEnhancers);
