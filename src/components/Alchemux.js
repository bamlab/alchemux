// @flow
import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { dataSelector, fetchAction } from '../stores';

type Props = {
  render: any => React.Node,
  fetch: () => any,
  data: any,
};

class Alchemux extends React.PureComponent<Props> {
  componentWillMount() {
    this.props.fetch();
  }

  render() {
    const { render, data } = this.props;
    return render({ data });
  }
}

const mapStateToProps = (state, props) => {
  return { data: dataSelector(state) };
};

const mapDispatchToProps = (dispatch, props) => {
  return bindActionCreators(
    {
      fetch: fetchAction(props.client),
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps, undefined, {
  storeKey: 'alchemuxStore',
})(Alchemux);
