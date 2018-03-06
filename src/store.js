// @flow
import { applyMiddleware, createStore, compose } from 'redux';
import { connect as reduxConnect } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './stores';

export const STORE_KEY = 'alchemuxStore';

const middlewares = [thunk, logger];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function buildStore() {
  const enhancers = [applyMiddleware(...middlewares)];
  const store = createStore(rootReducer, {}, composeEnhancers(...enhancers));
  return store;
}

export function connect(
  mapStateToProps?: *,
  mapDispatchToProps?: *,
  mergeProps?: *,
  options?: Object = {}
) {
  options.storeKey = STORE_KEY;
  return reduxConnect(mapStateToProps, mapDispatchToProps, mergeProps, options);
}
