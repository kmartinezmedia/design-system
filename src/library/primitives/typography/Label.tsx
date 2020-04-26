import React, { FunctionComponent } from 'react';
import { StyleSheet } from 'react-native';
import {
  fontFamily,
  fontWeight,
  fontSize,
  lineHeight,
} from '@designSystem/theme';

import { Text, TextProps } from './Text';

const defaultSpacing = { bottom: 1 } as const;

export const Label: FunctionComponent<TextProps> = ({
  children,
  spacing = defaultSpacing,
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
