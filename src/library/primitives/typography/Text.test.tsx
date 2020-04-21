import React from 'react';
import { render, toJSON } from '@testing-library/react-native';

import { Text } from './Text';

const textColors = [
  'default',
  'muted',
  'primary',
  'negative',
  'positive',
  'warning',
] as const;
const align = ['left', 'center', 'right'] as const;
const ellipsize = ['clip', 'head', 'middle', 'tail'] as const;

const TestComponent = () => (
  <>
    <Text>Default</Text>
    <Text spacing={{ top: 2, horizontal: 3 }}>Spacing</Text>
    <Text lineHeight={1}>Line Height</Text>
    {textColors.map((color) => (
      <Text key={color} color={color}>
        {color}
      </Text>
    ))}
    {align.map((direction) => (
      <Text key={direction} align={direction}>
        {direction}
      </Text>
    ))}
    {ellipsize.map((type) => (
      <Text key={type} ellipsize={type}>
        {type}
      </Text>
    ))}
  </>
);

describe('Text', () => {
  async function renderSnapshot(lookupText: string) {
    const { getByText, rerender } = await render(<TestComponent />);
    const el = getByText(lookupText);
    expect(toJSON(el)).toMatchSnapshot();
    return { el, rerender };
  }

  it.only('default', async () => {
    const { el, rerender } = await renderSnapshot('Default');
    const style1 = el.getProp('style');
    await rerender();
    expect(el.getProp('style')).toEqual(style1);
  });
  it('spacing', async () => {
    await renderSnapshot('Spacing');
  });
  it('color', async () => {
    await Promise.all(textColors.map((color) => renderSnapshot(color)));
  });
  it('align', async () => {
    await Promise.all(align.map((direction) => renderSnapshot(direction)));
  });
  it('ellipsize', async () => {
    await Promise.all(ellipsize.map((type) => renderSnapshot(type)));
  });
  it('line height', async () => {
    await renderSnapshot('Line Height');
  });
});
