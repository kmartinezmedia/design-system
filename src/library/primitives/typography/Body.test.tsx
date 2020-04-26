import React from 'react';
import 'react-native';
import { create, act, ReactTestRenderer } from 'react-test-renderer';
import { Body } from './Body';

describe('Body', () => {
  it('default', () => {
    let component: ReactTestRenderer;
    act(() => {
      component = create(<Body>Hey, lil 🐛</Body>);
    });
    expect(component!.toJSON()).toMatchSnapshot();
  });
});
