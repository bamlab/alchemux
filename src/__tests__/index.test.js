import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import alchemux from '..';
import createStore from '../store';

const store = createStore();

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
    expect(FinalComponent.displayName).toBe('alchemux(div)');

    const div = mount(<FinalComponent alchemuxStore={store} />).find('div');
    expect(div.prop('data')).toEqual(data);
  });
});
