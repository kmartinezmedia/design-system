import React from 'react';
import 'react-native';
import { create, act, ReactTestRenderer } from 'react-test-renderer';
import { Title1 } from './Title1';

describe('Title1', () => {
  it('default', () => {
    let component: ReactTestRenderer;
    act(() => {
      component = create(<Title1>Hey, lil 🐛</Title1>);
    });
    expect(component!.toJSON()).toMatchSnapshot();
  });
});
