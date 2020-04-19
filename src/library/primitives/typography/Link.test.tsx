import React from 'react';
import 'react-native';
import { create, act, ReactTestRenderer } from 'react-test-renderer';
import { Link } from './Link';

describe('Link', () => {
  it('default', () => {
    let component: ReactTestRenderer;
    act(() => {
      component = create(<Link>Hey, lil 🐛</Link>);
    });
    expect(component!.toJSON()).toMatchSnapshot();
  });
});
