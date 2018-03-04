// @flow
import { isNil, any, equals, keys, has, is } from 'ramda';

type ducer<State> = (State, any) => State;

function createducer<State>(
  initialState: State,
  handlers: { [string]: ducer<State> },
  defaultHandler: ducer<State> = state => state
): ducer<State> {
  // initial state is required
  if (isNil(initialState)) {
    throw new Error('initial state is required');
  }

  // handlers must be an object
  if (isNil(handlers) || !is(Object, handlers)) {
    throw new Error('handlers must be an object');
  }

  // handlers cannot have an undefined key
  if (any(equals('undefined'))(keys(handlers))) {
    throw new Error('handlers cannot have an undefined key');
  }

  // create the reducer function
  return (state = initialState, action) => {
    // wrong actions, just return state
    if (isNil(action)) return state;
    if (!has('type', action)) return state;

    // look for the handler
    const handler = handlers[action.type];

    // no handler use default one
    if (isNil(handler)) return defaultHandler(state, action);

    // execute the handler
    return handler(state, action);
  };
}

export default createducer;
