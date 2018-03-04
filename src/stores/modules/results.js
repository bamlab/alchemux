// @flow
import createReducer from '../../lib/createReducer';

type ID = string | number;
type Results = ID | ID[];

// ACTIONS
type Action = {
  type: 'FETCH_SUCCESS',
  payload: Results,
  meta: {
    name: string,
    type: string,
  },
};

export const fetchSuccesResultsAction = (results: Results, name: string, type: string): Action => ({
  type: 'FETCH_SUCCESS',
  payload: results,
  meta: { name, type },
});

// STATE
type State = {
  [string]: Results,
};

type StoreKeyType = 'results';
export const STORE_KEY: StoreKeyType = 'results';
export type GlobalState = { [StoreKeyType]: State };

const generateKey = (name: string, type: string): string => `${name}-${type}`;

const initialState = {};

// REDUCER
export default createReducer(initialState, {
  FETCH_SUCCESS: (state: State, action: Action): State => {
    const { payload, meta: { name, type } } = action;
    const key = generateKey(name, type);

    return {
      ...state,
      [key]: payload,
    };
  },
});

// SELECTORS
export const resultSelector = (state: GlobalState, name: string, type: string): ?Results =>
  state[STORE_KEY][generateKey(name, type)];
