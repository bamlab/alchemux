// @flow
import * as React from 'react';
import { Provider } from './Context';
import { default as createClient } from '../createClient';
import Client from '../Client';

type Props = {|
  client?: Client,
  children?: React.Node,
|};
const AlchemuxProvider = (props: Props): React.Node => {
  const client = props.client || createClient({});

  return <Provider value={{ client }}>{props.children}</Provider>;
};

export default AlchemuxProvider;
