// @flow
import { createSelector } from 'reselect';
import { entitiesSelector } from './modules/entities';
import { resultsSelector } from './modules/results';

import type { State } from './reducer';

export const resultEntitiesSelector = createSelector(
  [entitiesSelector, resultsSelector],
  (entities, results) => {
    if (!entities || !results) {
      return [];
    }
    return results.map(id => entities[id]);
  }
);

export const dataSelector = (state: State): any => resultEntitiesSelector(state, 'notes', 'list');
