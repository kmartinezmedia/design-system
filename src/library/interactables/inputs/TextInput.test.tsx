import React from 'react';
import { create, act, ReactTestRenderer } from 'react-test-renderer';
import { TextInput } from './TextInput';

describe('TextInput', () => {
  it('default', () => {
    let component: ReactTestRenderer;
    act(() => {
      component = create(
        <>
          <TextInput />
          <TextInput variant="positive" />
          <TextInput variant="negative" error="you messed up" />
        </>,
      );
    });
    expect(component!.toJSON()).toMatchSnapshot();
  });
});
