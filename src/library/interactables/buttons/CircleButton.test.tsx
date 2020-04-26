import React from 'react';
import { Text } from 'react-native';
import { create, act, ReactTestRenderer } from 'react-test-renderer';
import { CircleButton } from './CircleButton';

describe('CircleButton', () => {
  it('default', () => {
    let component: ReactTestRenderer;
    act(() => {
      component = create(
        <>
          <CircleButton>
            <Text>🐛</Text>
          </CircleButton>
          <CircleButton variant="secondary">
            <Text>🐛</Text>
          </CircleButton>
          <CircleButton disabled>
            <Text>🐛</Text>
          </CircleButton>
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
          <CircleButton spacing={3}>
            <Text>🐛</Text>
          </CircleButton>
          <CircleButton spacing={2} pin="right">
            <Text>🐛</Text>
          </CircleButton>
        </>,
      );
    });
    expect(component!.toJSON()).toMatchSnapshot();
  });
});
