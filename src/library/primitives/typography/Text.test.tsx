import React from 'react';
import 'react-native';
import { create, act, ReactTestRenderer } from 'react-test-renderer';
import { Text } from './Text';

describe('Text', () => {
  it('default', () => {
    let component: ReactTestRenderer;
    act(() => {
      component = create(<Text>Hey, lil 🐛</Text>);
    });
    expect(component!.toJSON()).toMatchSnapshot();
  });
  it('spacing', () => {
    let component: ReactTestRenderer;
    act(() => {
      component = create(
        <Text spacing={{ top: 2, horizontal: 3 }}>Hey, lil 🐛</Text>,
      );
    });
    expect(component!.toJSON()).toMatchSnapshot();
  });
  it('color', () => {
    let component: ReactTestRenderer;
    act(() => {
      component = create(
        <>
          <Text>Hey, lil 🐛</Text>
          <Text color="negative">Hey, lil 🐛</Text>
          <Text color="warning">Hey, lil 🐛</Text>
          <Text color="positive">Hey, lil 🐛</Text>
          <Text color="primary">Hey, lil 🐛</Text>
          <Text color="muted">Hey, lil 🐛</Text>
        </>,
      );
    });
    expect(component!.toJSON()).toMatchSnapshot();
  });
  it('align', () => {
    let component: ReactTestRenderer;
    act(() => {
      component = create(
        <>
          <Text align="left">Hey, lil 🐛</Text>
          <Text align="center">Hey, lil 🐛</Text>
          <Text align="right">Hey, lil 🐛</Text>
        </>,
      );
    });
    expect(component!.toJSON()).toMatchSnapshot();
  });
  it('ellipsize', () => {
    let component: ReactTestRenderer;
    act(() => {
      component = create(
        <>
          <Text ellipsize="clip">Hey, lil 🐛</Text>
          <Text ellipsize="head">Hey, lil 🐛</Text>
          <Text ellipsize="middle">Hey, lil 🐛</Text>
          <Text ellipsize="tail">Hey, lil 🐛</Text>
        </>,
      );
    });
    expect(component!.toJSON()).toMatchSnapshot();
  });
  it('lineheight', () => {
    let component: ReactTestRenderer;
    act(() => {
      component = create(<Text lineHeight={1}>Hey, lil 🐛</Text>);
    });
    expect(component!.toJSON()).toMatchSnapshot();
  });
});
