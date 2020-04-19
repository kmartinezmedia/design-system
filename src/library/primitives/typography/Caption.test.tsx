import React from 'react';
import 'react-native';
import { create, act, ReactTestRenderer } from 'react-test-renderer';
import { Caption } from './Caption';

describe('Caption', () => {
  it('default', () => {
    let component: ReactTestRenderer;
    act(() => {
      component = create(<Caption>Hey, lil 🐛</Caption>);
    });
    expect(component!.toJSON()).toMatchSnapshot();
  });
});
