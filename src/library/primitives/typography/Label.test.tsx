import React from 'react';
import 'react-native';
import { create, act, ReactTestRenderer } from 'react-test-renderer';
import { Label } from './Label';

describe('Label', () => {
  it('default', () => {
    let component: ReactTestRenderer;
    act(() => {
      component = create(<Label>Hey, lil 🐛</Label>);
    });
    expect(component!.toJSON()).toMatchSnapshot();
  });
});
