// @flow
import * as React from 'react';
import { createProvider } from 'react-redux';
import { default as createStore, STORE_KEY } from '../store';

const store = createStore();
const ReactReduxProvider = createProvider(STORE_KEY);
const Provider = (props: Object): React.Node => <ReactReduxProvider store={store} {...props} />;

export default Provider;
