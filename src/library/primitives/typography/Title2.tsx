import React, { FunctionComponent } from 'react';
import { StyleSheet } from 'react-native';
import {
  fontFamily,
  fontWeight,
  fontSize,
  lineHeight,
} from '@designSystem/theme';

import { Text, TextProps } from './Text';

const defaultSpacing = { bottom: 5 } as const;

export const Title2: FunctionComponent<TextProps> = ({
  children,
  spacing = defaultSpacing,
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
