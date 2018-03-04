// @flow
import { fetchSuccesResultsAction } from './modules/results';
import { addEntitiesToAction } from './modules/entities';
const data = {
  results: [1],
  entities: {
    1: {
      id: 1,
      title: 'The title',
      content: 'The content',
    },
  },
};

export const fetchSuccesAction = (): any => {
  const action = fetchSuccesResultsAction(data.results, 'notes', 'list');
  return addEntitiesToAction(action, { notes: data.entities });
};

export const fetchAction = fetchSuccesAction;
