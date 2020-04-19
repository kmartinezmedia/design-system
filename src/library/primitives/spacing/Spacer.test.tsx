import React from 'react';
import 'react-native';
import { create, act, ReactTestRenderer } from 'react-test-renderer';
import { Spacer } from './Spacer';

describe('Spacer', () => {
  it('default', () => {
    let component: ReactTestRenderer;
    act(() => {
      component = create(<Spacer />);
    });
    expect(component!.toJSON()).toMatchSnapshot();
  });
});
