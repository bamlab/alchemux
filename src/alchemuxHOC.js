// @flow
import * as React from 'react';
import { setDisplayName, wrapDisplayName, withProps, compose } from 'recompose';
import Alchemux from './components/AlchemuxConfigBuilder';

type QueryConfig = {
  entity: string,
  queryType: string,
};

const alchemux = <FinalProps>(config: QueryConfig) => (
  Component: React.ComponentType<FinalProps>
): React.ComponentType<*> => {
  return compose(
    setDisplayName(wrapDisplayName(Component, 'alchemux')),
    withProps({
      render: (finalProps: FinalProps) => <Component {...finalProps} />,
      ...config,
    })
  )(Alchemux);
};

export default alchemux;
