import React from 'react';
import 'react-native';
import { create, act, ReactTestRenderer } from 'react-test-renderer';
import { HStack } from './HStack';

describe('HStack', () => {
  it('default', () => {
    let component: ReactTestRenderer;
    act(() => {
      component = create(<HStack />);
    });
    expect(component!.toJSON()).toMatchSnapshot();
  });
});
