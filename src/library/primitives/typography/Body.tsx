import React, { FunctionComponent } from 'react';
import { StyleSheet } from 'react-native';
import {
  fontFamily,
  fontSize,
  lineHeight,
  fontWeight,
} from '@designSystem/theme';

import { Text, TextProps } from './Text';

const defaultSpacing = { bottom: 5 } as const;

export const Body: FunctionComponent<TextProps> = React.memo(
  ({ children, spacing = defaultSpacing, ...textProps }) => (
    <Text style={styles.Body} spacing={spacing} {...textProps}>
      {children}
    </Text>
  ),
);

const styles = StyleSheet.create({
  Body: {
    fontFamily: fontFamily.regular,
    fontWeight: fontWeight.regular,
    fontSize: fontSize.body,
    lineHeight: lineHeight.body,
  },
});
