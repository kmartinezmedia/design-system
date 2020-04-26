import React, { FunctionComponent } from 'react';
import { StyleSheet } from 'react-native';
import { Text, TextProps } from './Text';
import {
  fontFamily,
  fontWeight,
  fontSize,
  lineHeight,
} from '@designSystem/theme';

export const Title2: FunctionComponent<TextProps> = ({
  children,
  spacing = { bottom: 5 },
  ...textProps
}) => (
  <Text style={styles.Title2} spacing={spacing} {...textProps}>
    {children}
  </Text>
);

const styles = StyleSheet.create({
  Title2: {
    fontSize: fontSize.title2,
    lineHeight: lineHeight.title2,
    fontFamily: fontFamily.regular,
    fontWeight: fontWeight.regular,
  },
});
