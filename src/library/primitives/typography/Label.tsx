import React, { FunctionComponent } from 'react';
import { StyleSheet } from 'react-native';
import { Text, TextProps } from './Text';
import {
  fontFamily,
  fontWeight,
  fontSize,
  lineHeight,
} from '@designSystem/theme';

export const Label: FunctionComponent<TextProps> = ({
  children,
  spacing = { bottom: 1 },
  ...textProps
}) => (
  <Text style={styles.Label} spacing={spacing} {...textProps}>
    {children}
  </Text>
);

const styles = StyleSheet.create({
  Label: {
    fontFamily: fontFamily.medium,
    fontWeight: fontWeight.medium,
    fontSize: fontSize.label,
    lineHeight: lineHeight.label,
  },
});
