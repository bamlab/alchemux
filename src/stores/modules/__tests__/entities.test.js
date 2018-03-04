import { default as reducer, entitiesSelector, STORE_KEY, addEntitiesToAction } from '../entities';

const users = {
  3: { id: 3, name: 'foo' },
  5: { id: 5, name: 'bar' },
};

const comments = {
  uid1: { id: 'uid1', text: 'barfoo' },
  uid2: { id: 'uid2', text: 'foorbar' },
};

const entities = {
  user: users,
  comment: comments,
};

describe('entities', () => {
  describe('reducer', () => {
    it('should have an initial state', () => {
      expect(reducer(undefined, { type: '@INIT' })).toMatchSnapshot();
    });

    it('should store given entities', () => {
      const action = {
        type: 'Anything',
        meta: { entities },
      };
      expect(reducer(undefined, action)).toMatchSnapshot();
    });

    it('should update the new entities', () => {
      const action = {
        type: 'Anything',
        meta: {
          entities,
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

  describe('module', () => {
    it('should get the entities', () => {
      const action = { type: 'SOME_ACTION' };
      const state = reducer(undefined, addEntitiesToAction(action, entities));
      const globalState = { [STORE_KEY]: state };
      expect(entitiesSelector(globalState, 'user')).toBe(users);
      expect(entitiesSelector(globalState, 'comment')).toBe(comments);
      expect(entitiesSelector(globalState, 'notFounds')).toBeUndefined();
    });
  });
});
