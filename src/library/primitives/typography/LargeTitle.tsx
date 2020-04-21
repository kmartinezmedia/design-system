import React, { FunctionComponent } from 'react';
import { StyleSheet } from 'react-native';
import {
  fontFamily,
  fontWeight,
  fontSize,
  lineHeight,
} from '@designSystem/theme';

import { Text, TextProps } from './Text';

export const LargeTitle: FunctionComponent<TextProps> = React.memo(Text);

const styles = StyleSheet.create({
  largeTitle: {
    fontSize: fontSize.largeTitle,
    fontFamily: fontFamily.regular,
    fontWeight: fontWeight.regular,
    lineHeight: lineHeight.largeTitle,
  },
});

LargeTitle.displayName = 'LargeTitle';
LargeTitle.defaultProps = {
  spacing: { bottom: 8 },
  style: styles.largeTitle,
};
