import { TextStyle } from 'react-native';

export const fontSize = {
  largeTitle: 64,
  title1: 28,
  title2: 28,
  title3: 20,
  headline: 16,
  body: 16,
  label: 13,
  caption: 13,
};

export const lineHeight = {
  largeTitle: 88,
  title1: 40,
  title2: 40,
  title3: 28,
  headline: 24,
  body: 24,
  label: 16,
  caption: 16,
};

export interface IFontWeight {
  [key: string]: TextStyle['fontWeight'];
}

export const fontWeight: IFontWeight = {
  regular: '400',
  medium: '500',
};

// Android: font-family values must match the filename
// https://github.com/coinbase/rn/pull/47
export const font = {
  fontFamily: 'Graphik-Regular',
  fontFamilyMedium: 'Graphik-Medium',
};

export const monospaceFont = {
  fontFamily: `
    "Monaco",
    monospace;`,
};

export const fontFamily = {
  regular: font.fontFamily,
  medium: font.fontFamilyMedium,
  monospace: monospaceFont.fontFamily,
};
