// @flow
import createReactContext, { type Context } from 'create-react-context';

import Client from '../Client';

const { Provider, Consumer }: Context<{ client: ?Client }> = createReactContext({
  client: null,
});

export { Provider, Consumer };