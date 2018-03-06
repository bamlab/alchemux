// @flow
import * as React from 'react';
import { setDisplayName, wrapDisplayName, withProps, compose } from 'recompose';
import Alchemux from './components/AlchemuxConfigBuilder';

const alchemux = <FinalProps>() => (
  Component: React.ComponentType<FinalProps>
): React.ComponentType<*> => {
  return compose(
    setDisplayName(wrapDisplayName(Component, 'alchemux')),
    withProps({
      render: (finalProps: FinalProps) => <Component {...finalProps} />,
    })
  )(Alchemux);
};

export default alchemux;
