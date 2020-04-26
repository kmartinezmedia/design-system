import React from 'react';
import 'react-native';
import { create, act, ReactTestRenderer } from 'react-test-renderer';
import { SmallButton } from './SmallButton';

describe('SmallButton', () => {
  it('default', () => {
    let component: ReactTestRenderer;
    act(() => {
      component = create(
        <>
          <SmallButton>Hey, lil 🐛</SmallButton>
          <SmallButton variant="secondary">Hey, lil 🐛</SmallButton>
          <SmallButton variant="positive">Hey, lil 🐛</SmallButton>
        </>,
      );
    });
    expect(component!.toJSON()).toMatchSnapshot();
  });
  it('positions', () => {
    let component: ReactTestRenderer;
    act(() => {
      component = create(
        <>
          <SmallButton spacing={3}>Hey, lil 🐛</SmallButton>
          <SmallButton spacing={2} pin="right">
            Hey, lil 🐛
          </SmallButton>
        </>,
      );
    });
    expect(component!.toJSON()).toMatchSnapshot();
  });
});
