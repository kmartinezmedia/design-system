import React, { FunctionComponent } from 'react';
import { StyleSheet } from 'react-native';
import {
  fontFamily,
  fontSize,
  lineHeight,
  fontWeight,
} from '@designSystem/theme';

import { Text, TextProps } from './Text';

export const Caption: FunctionComponent<TextProps> = React.memo(Text);

const styles = StyleSheet.create({
  caption: {
    fontFamily: fontFamily.regular,
    fontWeight: fontWeight.regular,
    fontSize: fontSize.caption,
    lineHeight: lineHeight.caption,
  },
});

Caption.displayName = 'Caption';
Caption.defaultProps = {
  spacing: { bottom: 1 },
  style: styles.caption,
};
