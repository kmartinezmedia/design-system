import React, { FunctionComponent } from 'react';
import { StyleSheet } from 'react-native';
import {
  fontFamily,
  fontWeight,
  fontSize,
  lineHeight,
} from '@designSystem/theme';

import { Text, TextProps } from './Text';

const defaultSpacing = { bottom: 6 } as const;

export const Title1: FunctionComponent<TextProps> = ({
  children,
  spacing = defaultSpacing,
  ...textProps
}) => (
  <Text style={styles.Title1} spacing={spacing} {...textProps}>
    {children}
  </Text>
);

const styles = StyleSheet.create({
  Title1: {
    fontSize: fontSize.title1,
    lineHeight: lineHeight.title1,
    fontFamily: fontFamily.medium,
    fontWeight: fontWeight.medium,
  },
});
