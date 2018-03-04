// @flow
import { combineReducers } from 'redux';
import {
  default as entitiesReducer,
  STORE_KEY as entitiesStoreKey,
  type GlobalState as EntitiesState,
} from './modules/entities';
import {
  default as resultsReducer,
  STORE_KEY as resultsStoreKey,
  type GlobalState as ResultsState,
} from './modules/results';

export type State = ResultsState & EntitiesState;

export default combineReducers({
  [entitiesStoreKey]: entitiesReducer,
  [resultsStoreKey]: resultsReducer,
});
