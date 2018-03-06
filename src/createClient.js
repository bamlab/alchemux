// @flow
import { default as createStore } from './store';
import Client from './Client';
import type { Config } from './Client';

export default function createClient(config: $Shape<Config>) {
  const store = createStore();
  const defaultConfig: Config = {
    store,
    apiBaseUrl: '/api',
  };

  return new Client({
    ...defaultConfig,
    ...config,
  });
}

export { Client };
