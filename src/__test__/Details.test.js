import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Details from '../pages/Details';
import store from '../redux/store';

it('matches snapshot', () => {
  const tree = renderer.create(
    <Provider store={store}><Details /></Provider>,
  )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
