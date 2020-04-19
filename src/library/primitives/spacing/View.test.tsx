import React from 'react';
import 'react-native';
import { create, act, ReactTestRenderer } from 'react-test-renderer';
import { View } from './View';

describe('View', () => {
  it('default', () => {
    let component: ReactTestRenderer;
    act(() => {
      component = create(<View />);
    });
    expect(component!.toJSON()).toMatchSnapshot();
  });
  it('spacing', () => {
    let component: ReactTestRenderer;
    act(() => {
      component = create(
        <>
          {/* string */}
          <View spacing={0} />
          <View spacing={6} />

          {/* shorthand */}
          <View spacing={[0]} />
          <View spacing={[6]} />
          <View spacing={[0, 4]} />
          <View spacing={[0, -4, 4]} />
          <View spacing={[0, -4, 4, 4]} />

          {/* object */}
          <View spacing={{ top: 4 }} />
          <View spacing={{ horizontal: 4 }} />
          <View spacing={{ horizontal: 4, bottom: -3 }} />
          <View spacing={{ horizontal: 4, vertical: 3 }} />
          <View spacing={{ top: 4, bottom: 3, left: 0, right: -6 }} />
        </>,
      );
    });
    expect(component!.toJSON()).toMatchSnapshot();
  });
  it('dangerouslySetStyle', () => {
    let component: ReactTestRenderer;
    const styles = { backgroundColor: 'red' };
    act(() => {
      component = create(<View dangerouslySetStyle={styles} />);
    });
    expect(component!.toJSON()).toMatchSnapshot();
  });
  it('elevation', () => {
    let component: ReactTestRenderer;
    act(() => {
      component = create(
        <>
          <View elevation={1} />
          <View elevation={2} />
        </>,
      );
    });
    expect(component!.toJSON()).toMatchSnapshot();
  });
  it('pin', () => {
    let component: ReactTestRenderer;
    act(() => {
      component = create(
        <>
          <View pin="left" />
          <View pin="top" />
          <View pin="right" />
          <View pin="bottom" />
        </>,
      );
    });
    expect(component!.toJSON()).toMatchSnapshot();
  });
});
