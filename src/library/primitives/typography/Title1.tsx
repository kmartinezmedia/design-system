import React, { FunctionComponent } from 'react';
import { StyleSheet } from 'react-native';
import {
  fontFamily,
  fontWeight,
  fontSize,
  lineHeight,
  spacing as spacingConstants,
} from '@designSystem/theme';

import { Text, TextProps } from './Text';

export const Title1: FunctionComponent<TextProps> = React.memo(Text);

const styles = StyleSheet.create({
  title1: {
    fontSize: fontSize.title1,
    lineHeight: lineHeight.title1,
    fontFamily: fontFamily.medium,
    fontWeight: fontWeight.medium,
    paddingBottom: spacingConstants[6],
  },
});

Title1.displayName = 'Title1';
Title1.defaultProps = {
  style: styles.title1,
};
