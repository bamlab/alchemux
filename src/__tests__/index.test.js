import React from 'react';
import { shallow } from 'enzyme';
import alchemux from '..';

const data = [
  {
    id: 1,
    title: 'The title',
    content: 'The content',
  },
];

describe('alchemux', () => {
  it('should add the data props', () => {
    const FinalComponent = alchemux()('div');
    expect(FinalComponent.displayName).toBe('withProps(div)');

    const div = shallow(<FinalComponent />).find('div');
    expect(div.prop('data')).toEqual(data);
  });
});
