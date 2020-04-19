import React from 'react';
import 'react-native';
import { create, act, ReactTestRenderer } from 'react-test-renderer';
import { VStack } from './VStack';

describe('VStack', () => {
  it('default', () => {
    let component: ReactTestRenderer;
    act(() => {
      component = create(<VStack />);
    });
    expect(component!.toJSON()).toMatchSnapshot();
  });
});
