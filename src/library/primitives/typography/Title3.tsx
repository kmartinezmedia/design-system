import React, { FunctionComponent } from 'react';
import { StyleSheet } from 'react-native';
import {
  fontFamily,
  fontWeight,
  fontSize,
  lineHeight,
} from '@designSystem/theme';

import { Text, TextProps } from './Text';

const defaultSpacing = { bottom: 4 } as const;

export const Title3: FunctionComponent<TextProps> = ({
  children,
  spacing = defaultSpacing,
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
