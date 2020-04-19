import React from 'react';
import 'react-native';
import { create, act, ReactTestRenderer } from 'react-test-renderer';
import { Title3 } from './Title3';

describe('Title3', () => {
  it('default', () => {
    let component: ReactTestRenderer;
    act(() => {
      component = create(<Title3>Hey, lil 🐛</Title3>);
    });
    expect(component!.toJSON()).toMatchSnapshot();
  });
});
