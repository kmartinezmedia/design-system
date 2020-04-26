import React from 'react';
import { Text } from 'react-native';
import { create, act, ReactTestRenderer } from 'react-test-renderer';
import { IconButton } from './IconButton';

describe('IconButton', () => {
  it('default', () => {
    let component: ReactTestRenderer;
    act(() => {
      component = create(
        <>
          <IconButton>
            <Text>🐛</Text>
          </IconButton>
          <IconButton disabled>
            <Text>🐛</Text>
          </IconButton>
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
          <IconButton spacing={3}>
            <Text>🐛</Text>
          </IconButton>
          <IconButton spacing={2} pin="right">
            <Text>🐛</Text>
          </IconButton>
        </>,
      );
    });
    expect(component!.toJSON()).toMatchSnapshot();
  });
});
