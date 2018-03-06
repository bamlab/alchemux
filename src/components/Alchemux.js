// @flow
import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { resultEntitiesSelector } from '../stores';

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
  const { entity, queryType } = props;
  return { data: resultEntitiesSelector(state, entity, queryType) };
};

const mapDispatchToProps = (dispatch, props) => {
  const { entity, queryType } = props;
  return bindActionCreators(
    {
      fetch: props.client.getAction(entity, queryType),
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps, undefined, {
  storeKey: 'alchemuxStore',
})(Alchemux);
