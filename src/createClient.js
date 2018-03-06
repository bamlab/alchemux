// @flow
import { default as createStore } from './store';

type Config = {
  store: any,
  apiBaseUrl: string,
};

export class Client {
  config: Config;
  constructor(config: Config) {
    this.config = config;
  }

  getStore() {
    return this.config.store;
  }

  getApiBaseUrl() {
    return this.config.apiBaseUrl;
  }

  generateUrl(entityName: string) {
    return `${this.getApiBaseUrl()}/${entityName}`;
  }
}

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
