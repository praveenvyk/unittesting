/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('should render the home screen correctly', () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toBeTruthy();
});

it('should change state if email is entered', () => {
  const instanceOf = renderer.create(<App />).getInstance();
  instanceOf.onChangeUserName('username@gmail.com');
  expect(instanceOf.state.userName).toEqual('username@gmail.com');
});

it('should change state if password is entered', () => {
  const instanceOf = renderer.create(<App />).getInstance();
  instanceOf.onChangePassword('*********');
  expect(instanceOf.state.password).toEqual('*********');
});

it('should change button is pressed', () => {
  const instanceOf = renderer.create(<App />).getInstance();
  instanceOf.showAlert();
  expect(instanceOf.state.pressed).toEqual(true);
});
