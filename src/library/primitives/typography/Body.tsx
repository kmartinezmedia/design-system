import {
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
} from '@designSystem/theme';
import React, { FunctionComponent } from 'react';
import { StyleSheet } from 'react-native';

import { Text, TextProps } from './Text';

export const Body: FunctionComponent<TextProps> = ({
  children,
  spacing = { bottom: 5 },
  ...textProps
}) => (
  <Text style={styles.Body} spacing={spacing} {...textProps}>
    {children}
  </Text>
);

const styles = StyleSheet.create({
  Body: {
    fontFamily: fontFamily.regular,
    fontWeight: fontWeight.regular,
    fontSize: fontSize.body,
    lineHeight: lineHeight.body,
  },
});
