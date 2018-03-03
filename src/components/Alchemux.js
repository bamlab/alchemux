// @flow
import * as React from 'react';
import connect from '../connect';

type Props = {
  children?: React.Node,
  dispatch?: Function,
  alchemuxStore?: any,
  alchemuxStoreSubscription?: any,
  render: any => React.Node,
};

class Alchemux extends React.PureComponent<Props> {
  render() {
    /* eslint-disable no-unused-vars */
    const { render, dispatch, alchemuxStore, alchemuxStoreSubscription, ...props } = this.props;
    /* eslint-enable no-unused-vars */
    return render(props);
  }
}

export default connect(state => ({ data: state }))(Alchemux);
