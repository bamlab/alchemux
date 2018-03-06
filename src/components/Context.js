// @flow
import createReactContext, { type Context } from 'create-react-context';
import Client from '../Client';

type ClientContext = Context<{ client: ?Client }>;
const context: ClientContext = createReactContext({
  client: null,
});

export const Provider = context.Provider;
export const Consumer = context.Consumer;
