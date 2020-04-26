import React, { FunctionComponent } from 'react';
import { StyleSheet } from 'react-native';
import {
  fontFamily,
  fontSize,
  lineHeight,
  fontWeight,
} from '@designSystem/theme';

import { Text, TextProps } from './Text';

const defaultSpacing = { bottom: 1 } as const;

export const Caption: FunctionComponent<TextProps> = ({
  children,
  color = 'muted',
  spacing = defaultSpacing,
  ...typeProps
}) => (
  <Text {...typeProps} spacing={spacing} color={color} style={styles.Caption}>
    {children}
  </Text>
);

const styles = StyleSheet.create({
  Caption: {
    fontFamily: fontFamily.regular,
    fontWeight: fontWeight.regular,
    fontSize: fontSize.caption,
    lineHeight: lineHeight.caption,
  },
});
