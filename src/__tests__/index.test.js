import React from 'react';
import { mount } from 'enzyme';
import { default as alchemux, Alchemux } from '..';
import createClient from '../createClient';

jest.mock('../lib/call.js', () => () =>
  Promise.resolve([
    {
      id: 1,
      title: 'The title',
      content: 'The content',
    },
  ])
);
const client = createClient();

const data = [
  {
    id: 1,
    title: 'The title',
    content: 'The content',
  },
];
describe('alchemux', () => {
  it('should add the data props', done => {
    const FinalComponent = alchemux()('div');
    expect(FinalComponent.displayName).toBe('alchemux(div)');

    const element = mount(<FinalComponent client={client} />);
    setTimeout(() => {
      element.update();
      expect(element.find('div').prop('data')).toEqual(data);
      done();
    });
  });
});

describe('Alchemux', () => {
  it('should add the data props', () => {
    const render = jest.fn(() => <div />);
    const div = mount(<Alchemux client={client} render={render} />);
    expect(render).toHaveBeenCalledWith({ data });
  });
});
