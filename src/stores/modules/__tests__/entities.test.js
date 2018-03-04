import { default as reducer, entitiesSelector, STORE_KEY } from '../entities';

describe('entities', () => {
  describe('reducer', () => {
    it('should have an initial state', () => {
      expect(reducer(undefined, { type: '@INIT' })).toMatchSnapshot();
    });
    it('should store given entities', () => {
      const action = {
        type: 'Anything',
        meta: {
          entities: {
            user: {
              3: { id: 3, name: 'foo' },
              5: { id: 5, name: 'bar' },
            },
            comment: {
              uid1: { id: 'uid1', text: 'barfoo' },
              uid2: { id: 'uid2', text: 'foorbar' },
            },
          },
        },
      };
      expect(reducer(undefined, action)).toMatchSnapshot();
    });
    it('should update the new entities', () => {
      const action = {
        type: 'Anything',
        meta: {
          entities: {
            user: {
              3: { id: 3, name: 'foo' },
              5: { id: 5, name: 'bar' },
            },
            comment: {
              uid1: { id: 'uid1', text: 'barfoo' },
            },
          },
        },
      };
      const updateAction = {
        type: 'Anything',
        meta: {
          entities: {
            user: {
              3: { id: 3, name: 'foobar_barfoo' },
            },
          },
        },
      };
      const state = reducer(undefined, action);
      expect(reducer(state, updateAction)).toMatchSnapshot();
    });
  });
});
