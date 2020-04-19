import React, { FunctionComponent } from 'react';
import { StyleSheet } from 'react-native';
import {
  fontFamily,
  fontWeight,
  fontSize,
  lineHeight,
} from '@designSystem/theme';

import { Text, TextProps } from './Text';

export const Title1: FunctionComponent<TextProps> = ({
  children,
  spacing = { bottom: 6 },
  ...textProps
}) => {
  return (
    <Text style={styles.title1} spacing={spacing} {...textProps}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  title1: {
    fontSize: fontSize.title1,
    lineHeight: lineHeight.title1,
    fontFamily: fontFamily.medium,
    fontWeight: fontWeight.medium,
  },
});
