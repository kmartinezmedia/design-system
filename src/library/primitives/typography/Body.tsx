import {
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
} from '@designSystem/theme';
import React, { FunctionComponent } from 'react';
import { StyleSheet } from 'react-native';

import { Text, TextProps } from './Text';

export const Body: FunctionComponent<TextProps> = Text;

const styles = StyleSheet.create({
  body: {
    fontFamily: fontFamily.regular,
    fontWeight: fontWeight.regular,
    fontSize: fontSize.body,
    lineHeight: lineHeight.body,
  },
});

Body.displayName = 'Body';
Body.defaultProps = {
  spacing: { bottom: 5 },
  style: styles.body,
};
