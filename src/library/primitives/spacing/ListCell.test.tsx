import React from 'react';
import { View } from 'react-native';
import { create, act, ReactTestRenderer } from 'react-test-renderer';
import { ListCell } from './ListCell';

describe('ListCell', () => {
  it('default', () => {
    let component: ReactTestRenderer;
    act(() => {
      component = create(<ListCell title="🤔" />);
    });
    expect(component!.toJSON()).toMatchSnapshot();
  });
  it('subtitle', () => {
    let component: ReactTestRenderer;
    act(() => {
      component = create(<ListCell title="🤔" subtitle="Sure." />);
    });
    expect(component!.toJSON()).toMatchSnapshot();
  });
  it('value', () => {
    let component: ReactTestRenderer;
    act(() => {
      component = create(
        <ListCell title="🤔" subtitle="Sure." value="$1mil" />,
      );
    });
    expect(component!.toJSON()).toMatchSnapshot();
  });
  it('tertiary', () => {
    let component: ReactTestRenderer;
    act(() => {
      component = create(
        <ListCell title="🤔" subtitle="Sure." value="$1mil" tertiary="btc" />,
      );
    });
    expect(component!.toJSON()).toMatchSnapshot();
  });
  it('children', () => {
    let component: ReactTestRenderer;
    act(() => {
      component = create(
        <ListCell title="🤔" subtitle="Sure." value="$1mil" tertiary="btc">
          <View />
        </ListCell>,
      );
    });
    expect(component!.toJSON()).toMatchSnapshot();
  });
  it('elipsize', () => {
    let component: ReactTestRenderer;
    act(() => {
      component = create(
        <ListCell
          title="🤔"
          subtitle="Sure."
          value="$1mil"
          tertiary="btc"
          ellipsize="fade"
        />,
      );
    });
    expect(component!.toJSON()).toMatchSnapshot();
  });
  it('variant', () => {
    let component: ReactTestRenderer;
    act(() => {
      component = create(
        <>
          <ListCell
            title="🤔"
            subtitle="Sure."
            value="$1mil"
            tertiary="btc"
            variant="static"
          />
          ,
          <ListCell
            title="🤔"
            subtitle="Sure."
            value="$1mil"
            tertiary="btc"
            variant="action"
          />
          ,
        </>,
      );
    });
    expect(component!.toJSON()).toMatchSnapshot();
  });
  it('marker', () => {
    let component: ReactTestRenderer;
    act(() => {
      component = create(
        <>
          <ListCell
            title="🤔"
            subtitle="Sure."
            value="$1mil"
            tertiary="btc"
            marker="checked"
          />
        </>,
      );
    });
    expect(component!.toJSON()).toMatchSnapshot();
  });
});
