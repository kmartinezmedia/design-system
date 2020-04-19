import React from 'react';
import 'react-native';
import { create, act, ReactTestRenderer } from 'react-test-renderer';
import { Divider } from './Divider';

describe('Divider', () => {
  it('default', () => {
    let component: ReactTestRenderer;
    act(() => {
      component = create(<Divider />);
    });
    expect(component!.toJSON()).toMatchSnapshot();
  });
});
