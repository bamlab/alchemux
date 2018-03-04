// @flow
import { mergeDeepRight, path } from 'ramda';

type ID = string | number;
type Entities = {
  [ID]: Object,
};

type State = {
  [string]: Entities,
};

type StoreKeyType = 'entities';
export const STORE_KEY: StoreKeyType = 'entities';
export type GlobalState = { [StoreKeyType]: State };

type Action = {
  type: string,
  meta?: {
    entities?: {
      [string]: Entities,
    },
  },
};

export const addEntitiesToAction = <A>(action: A, entities: { [string]: Entities }): A & Action => {
  return mergeDeepRight(action, {
    meta: {
      entities,
    },
  });
};

const initialState = {};

export default function reducer(state: State = initialState, action: Action) {
  const entities = path(['meta', 'entities'], action);
  if (!entities) {
    return state;
  }
  return mergeDeepRight(state, entities);
}

export const entitiesSelector = (state: GlobalState, entityName: string): ?Entities =>
  state[STORE_KEY][entityName];
