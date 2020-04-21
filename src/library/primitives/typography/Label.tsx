import {
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
} from '@designSystem/theme';
import React, { FunctionComponent } from 'react';
import { StyleSheet } from 'react-native';

import { Text, TextProps } from './Text';

export const Label: FunctionComponent<TextProps> = React.memo(Text);

const styles = StyleSheet.create({
  label: {
    fontFamily: fontFamily.medium,
    fontWeight: fontWeight.medium,
    fontSize: fontSize.label,
    lineHeight: lineHeight.label,
  },
});

Label.defaultProps = {
  spacing: { bottom: 1 },
  style: styles.label,
};
