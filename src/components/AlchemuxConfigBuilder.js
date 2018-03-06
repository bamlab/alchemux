// @flow
import * as React from 'react';
import { Consumer } from './Context';
import Client from '../Client';
import createClient from '../createClient';

import Alchemux from './Alchemux';

type Props = {
  client: Client,
};

const AlchemuxConfigBuilder = (props: Props) => (
  <Consumer>
    {(context: { client: ?Client }) => {
      const client: Client = props.client || context.client || createClient({});
      const store = client.getStore();
      return <Alchemux {...props} alchemuxStore={store} client={client} />;
    }}
  </Consumer>
);

export default AlchemuxConfigBuilder;
