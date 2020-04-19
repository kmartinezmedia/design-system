import React from 'react';
import 'react-native';
import { create, act, ReactTestRenderer } from 'react-test-renderer';
import { LargeTitle } from './LargeTitle';

describe('LargeTitle', () => {
  it('default', () => {
    let component: ReactTestRenderer;
    act(() => {
      component = create(<LargeTitle>Hey, lil 🐛</LargeTitle>);
    });
    expect(component!.toJSON()).toMatchSnapshot();
  });
});
