import React, { FunctionComponent } from 'react';
import { StyleSheet } from 'react-native';
import {
  fontFamily,
  fontWeight,
  fontSize,
  lineHeight,
} from '@designSystem/theme';

import { Text, TextProps } from './Text';

export const Title3: FunctionComponent<TextProps> = React.memo(Text);

const styles = StyleSheet.create({
  title3: {
    fontSize: fontSize.title3,
    lineHeight: lineHeight.title3,
    fontFamily: fontFamily.medium,
    fontWeight: fontWeight.medium,
  },
});

Title3.displayName = 'Title3';
Title3.defaultProps = {
  style: styles.title3,
  spacing: { bottom: 4 },
};
