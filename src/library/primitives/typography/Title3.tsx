import React, { FunctionComponent } from 'react';
import { StyleSheet } from 'react-native';
import { Text, TextProps } from './Text';
import {
  fontFamily,
  fontWeight,
  fontSize,
  lineHeight,
} from '@designSystem/theme';

export const Title3: FunctionComponent<TextProps> = ({
  children,
  spacing = { bottom: 4 },
  ...textProps
}) => (
  <Text style={styles.Title3} spacing={spacing} {...textProps}>
    {children}
  </Text>
);

const styles = StyleSheet.create({
  Title3: {
    fontSize: fontSize.title3,
    lineHeight: lineHeight.title3,
    fontFamily: fontFamily.medium,
    fontWeight: fontWeight.medium,
  },
});
