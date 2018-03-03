// @flow
import { connect as reduxConnect } from 'react-redux';
import { STORE_KEY } from './store';

export default function connect(
  mapStateToProps?: *,
  mapDispatchToProps?: *,
  mergeProps?: *,
  options?: Object = {}
) {
  options.storeKey = STORE_KEY;
  return reduxConnect(mapStateToProps, mapDispatchToProps, mergeProps, options);
}
