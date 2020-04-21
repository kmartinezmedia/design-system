import React, { FunctionComponent } from 'react';
import { StyleSheet } from 'react-native';
import {
  fontFamily,
  fontSize,
  lineHeight,
  fontWeight,
} from '@designSystem/theme';

import { Text, TextProps } from './Text';

export const Headline: FunctionComponent<TextProps> = React.memo(Text);
const styles = StyleSheet.create({
  headline: {
    fontFamily: fontFamily.medium,
    fontWeight: fontWeight.medium,
    fontSize: fontSize.headline,
    lineHeight: lineHeight.headline,
  },
});

Headline.displayName = 'Headline';
Headline.defaultProps = {
  spacing: { bottom: 5 },
  style: styles.headline,
};
