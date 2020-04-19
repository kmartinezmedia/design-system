import React from 'react';
import 'react-native';
import { create, act, ReactTestRenderer } from 'react-test-renderer';
import { Headline } from './Headline';

describe('Headline', () => {
  it('default', () => {
    let component: ReactTestRenderer;
    act(() => {
      component = create(<Headline>Hey, lil 🐛</Headline>);
    });
    expect(component!.toJSON()).toMatchSnapshot();
  });
});
