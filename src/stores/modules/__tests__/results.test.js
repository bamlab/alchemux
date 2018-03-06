import {
  default as reducer,
  resultsSelector,
  STORE_KEY,
  fetchSuccesResultsAction,
} from '../results';

describe('entities', () => {
  describe('reducer', () => {
    it('should have an initial state', () => {
      expect(reducer(undefined, { type: '@INIT' })).toMatchSnapshot();
    });

    it('should store given ids', () => {
      const action = {
        type: 'FETCH_SUCCESS',
        payload: [1, 2, 3],
        meta: { entity: 'foo', queryType: 'bar' },
      };
      expect(reducer(undefined, action)).toMatchSnapshot();
    });

    it('should store uniq ids', () => {
      const action = {
        type: 'FETCH_SUCCESS',
        payload: 1,
        meta: { entity: 'foo', queryType: 'bar' },
      };
      expect(reducer(undefined, action)).toMatchSnapshot();
    });
  });

  describe('module', () => {
    it('should get the ids', () => {
      const results = [1, 2, 3];
      const action = fetchSuccesResultsAction(results, 'notes', 'list');
      const state = reducer(undefined, action);
      const globalState = { [STORE_KEY]: state };
      expect(resultsSelector(globalState, 'notes', 'list')).toBe(results);
      expect(resultsSelector(globalState, 'users', 'list')).toBeUndefined();
      expect(resultsSelector(globalState, 'notes', 'one')).toBeUndefined();
    });
    it('should get the id', () => {
      const action = fetchSuccesResultsAction(1, 'notes', 'single');
      const state = reducer(undefined, action);
      const globalState = { [STORE_KEY]: state };
      expect(resultsSelector(globalState, 'notes', 'single')).toBe(1);
    });
  });
});
