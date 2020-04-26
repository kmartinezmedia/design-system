import React from 'react';
import 'react-native';
import { create, act, ReactTestRenderer } from 'react-test-renderer';
import { Button } from './Button';

describe('Button', () => {
  it('default', () => {
    let component: ReactTestRenderer;
    act(() => {
      component = create(
        <>
          <Button>Hey, lil 🐛</Button>
          <Button variant="secondary">Hey, lil 🐛</Button>
          <Button variant="positive">Hey, lil 🐛</Button>
          <Button variant="negative">Hey, lil 🐛</Button>
          <Button variant="tertiary">Hey, lil 🐛</Button>
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
          <Button spacing={3}>Hey, lil 🐛</Button>
          <Button spacing={2} pin="right">
            Hey, lil 🐛
          </Button>
        </>,
      );
    });
    expect(component!.toJSON()).toMatchSnapshot();
  });
});
