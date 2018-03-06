// @flow
import { fetchSuccesResultsAction } from './modules/results';
import { addEntitiesToAction } from './modules/entities';

type ID = number | string;
type NormalizedResults = {
  result: ID | ID[],
  entities: {
    [string]: {
      [ID]: Object,
    },
  },
};

export const fetchSuccesAction = (
  normalizedResults: NormalizedResults,
  name: string,
  type: string
): any => {
  const action = fetchSuccesResultsAction(normalizedResults.result, name, type);
  return addEntitiesToAction(action, normalizedResults.entities);
};
