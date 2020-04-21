import React, { FunctionComponent } from 'react';
import { StyleSheet } from 'react-native';
import {
  fontFamily,
  fontWeight,
  fontSize,
  lineHeight,
} from '@designSystem/theme';

import { Text, TextProps } from './Text';

export const Title2: FunctionComponent<TextProps> = React.memo(Text);

const styles = StyleSheet.create({
  title2: {
    fontSize: fontSize.title2,
    lineHeight: lineHeight.title2,
    fontFamily: fontFamily.regular,
    fontWeight: fontWeight.regular,
  },
});

Title2.displayName = 'Title2';
Title2.defaultProps = {
  spacing: { bottom: 5 },
  style: styles.title2,
};
