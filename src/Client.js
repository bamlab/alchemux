// @flow
import request from './lib/call';
import { normalize, schema } from 'normalizr';

import { fetchSuccesAction } from './stores';

export type Config = {
  store: any,
  apiBaseUrl: string,
};

class Client {
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

  generateUrl(entityName: string, queryType: string) {
    return `${this.getApiBaseUrl()}/${entityName}`;
  }

  getNormalizationSchema(entity: string, queryType: string) {
    return [new schema.Entity(entity)];
  }

  getAction(entity: string, queryType: string) {
    const Schema = this.getNormalizationSchema(entity, queryType);
    return () => (dispatch: Function): Promise<*> => {
      return request(this.generateUrl(entity, queryType)).then((results: any) => {
        const normalizedResults = normalize(results, Schema);
        return dispatch(fetchSuccesAction(normalizedResults, entity, queryType));
      });
    };
  }
}

export default Client;
