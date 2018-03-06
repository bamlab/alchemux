// @flow
import createReducer from '../../lib/createReducer';

type ID = string | number;
type Results = ID | ID[];

// ACTIONS
type Action = {
  type: 'FETCH_SUCCESS',
  payload: Results,
  meta: {
    entity: string,
    queryType: string,
  },
};

export const fetchSuccesResultsAction = (
  results: Results,
  entity: string,
  queryType: string
): Action => ({
  type: 'FETCH_SUCCESS',
  payload: results,
  meta: { entity, queryType },
});

// STATE
type State = {
  [string]: Results,
};

type StoreKeyType = 'results';
export const STORE_KEY: StoreKeyType = 'results';
export type GlobalState = { [StoreKeyType]: State };

const generateKey = (entity: string, queryType: string): string => `${entity}-${queryType}`;

const initialState = {};

// REDUCER
export default createReducer(initialState, {
  FETCH_SUCCESS: (state: State, action: Action): State => {
    const { payload, meta: { entity, queryType } } = action;
    const key = generateKey(entity, queryType);

    return {
      ...state,
      [key]: payload,
    };
  },
});

// SELECTORS
export const resultsSelector = (state: GlobalState, entity: string, queryType: string): ?Results =>
  state[STORE_KEY][generateKey(entity, queryType)];
