import React, { FunctionComponent } from 'react';
import { StyleSheet } from 'react-native';
import {
  fontFamily,
  fontWeight,
  fontSize,
  lineHeight,
} from '@designSystem/theme';

import { Text, TextProps } from './Text';

const defaultSpacing = { bottom: 8 } as const;

export const LargeTitle: FunctionComponent<TextProps> = ({
  children,
  spacing = defaultSpacing,
  ...textProps
}) => (
  <Text style={styles.LargeTitle} spacing={spacing} {...textProps}>
    {children}
  </Text>
);

const styles = StyleSheet.create({
  LargeTitle: {
    fontSize: fontSize.largeTitle,
    fontFamily: fontFamily.regular,
    fontWeight: fontWeight.regular,
    lineHeight: lineHeight.largeTitle,
  },
});
