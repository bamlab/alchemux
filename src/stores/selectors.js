// @flow
import { createSelector } from 'reselect';
import { entitiesSelector } from './modules/entities';
import { resultSelector } from './modules/results';

import type { State } from './reducer';

export const resultEntitiesSelector = createSelector(
  [entitiesSelector, resultSelector],
  (entities, results) => {
    if (!entities || !results) {
      return [];
    }
    return results.map(id => entities[id]);
  }
);

export const dataSelector = (state: State): any => resultEntitiesSelector(state, 'notes', 'list');
