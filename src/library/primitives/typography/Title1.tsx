import React, { FunctionComponent } from 'react';
import { StyleSheet } from 'react-native';
import { Text, TextProps } from './Text';
import {
  fontFamily,
  fontWeight,
  fontSize,
  lineHeight,
} from '@designSystem/theme';

export const Title1: FunctionComponent<TextProps> = ({
  children,
  spacing = { bottom: 6 },
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
