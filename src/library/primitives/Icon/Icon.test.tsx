import React from 'react';
import { create, act, ReactTestRenderer } from 'react-test-renderer';
import { Icon } from './Icon';

describe('Icon', () => {
  it('Large', () => {
    let component: ReactTestRenderer;
    act(() => {
      component = create(<Icon name="phone" size="large" />);
    });
    expect(component!.toJSON()).toMatchSnapshot();
  });

  it('Medium', () => {
    let component: ReactTestRenderer;
    act(() => {
      component = create(<Icon name="close" size="medium" />);
    });
    expect(component!.toJSON()).toMatchSnapshot();
  });

  it('Small', () => {
    let component: ReactTestRenderer;
    act(() => {
      component = create(<Icon name="caretRight" size="small" />);
    });
    expect(component!.toJSON()).toMatchSnapshot();
  });
});
