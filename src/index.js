// @flow
import * as React from 'react';
import { withProps } from 'recompose';

type Props = {
  children?: React.Node,
};
export const Provider = ({ children }: Props) => children;

const data = [
  {
    id: 1,
    title: 'The title',
    content: 'The content',
  },
];

const alchemux = () =>
  withProps({
    data,
  });

export default alchemux;
