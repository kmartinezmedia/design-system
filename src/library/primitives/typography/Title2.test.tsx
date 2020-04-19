import React from 'react';
import 'react-native';
import { create, act, ReactTestRenderer } from 'react-test-renderer';
import { Title2 } from './Title2';

describe('Title2', () => {
  it('default', () => {
    let component: ReactTestRenderer;
    act(() => {
      component = create(<Title2>Hey, lil 🐛</Title2>);
    });
    expect(component!.toJSON()).toMatchSnapshot();
  });
});
