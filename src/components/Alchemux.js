// @flow
import * as React from 'react';
import connect from '../connect';
import { dataSelector, fetchAction } from '../stores';

type Props = {
  children?: React.Node,
  dispatch?: Function,
  alchemuxStore?: any,
  alchemuxStoreSubscription?: any,
  render: any => React.Node,
  fetch: () => any,
};

class Alchemux extends React.PureComponent<Props> {
  componentWillMount() {
    this.props.fetch();
  }

  render() {
    /* eslint-disable no-unused-vars */
    const {
      render,
      dispatch,
      alchemuxStore,
      alchemuxStoreSubscription,
      fetch,
      ...props
    } = this.props;
    /* eslint-enable no-unused-vars */
    return render(props);
  }
}

const mapStateToProps = state => ({ data: dataSelector(state) });
const mapDispatchToProps = {
  fetch: fetchAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Alchemux);
