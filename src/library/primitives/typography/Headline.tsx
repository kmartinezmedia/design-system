import React, { FunctionComponent } from 'react';
import { StyleSheet } from 'react-native';
import {
  fontFamily,
  fontSize,
  lineHeight,
  fontWeight,
} from '@designSystem/theme';

import { Text, TextProps } from './Text';

export const Headline: FunctionComponent<TextProps> = ({
  children,
  spacing = { bottom: 5 },
  ...textProps
}) => (
  <Text style={styles.Headline} spacing={spacing} {...textProps}>
    {children}
  </Text>
);

const styles = StyleSheet.create({
  Headline: {
    fontFamily: fontFamily.medium,
    fontWeight: fontWeight.medium,
    fontSize: fontSize.headline,
    lineHeight: lineHeight.headline,
  },
});
