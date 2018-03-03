import React from 'react';
import { mount } from 'enzyme';
import { default as alchemux, Alchemux } from '..';
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

describe('Alchemux', () => {
  it('should add the data props', () => {
    const render = jest.fn(() => <div />);
    const div = mount(<Alchemux alchemuxStore={store} render={render} />);
    expect(render).toHaveBeenCalledWith({ data });
  });
});
