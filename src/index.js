// @flow
import React from 'react';
import { withProps } from 'recompose';


export const Provider = ({children}) => children;



const data = [
  {
    id: 1,
    title: 'The title',
    content: 'The content',
  },
];
export default () => withProps({
  data,
});
