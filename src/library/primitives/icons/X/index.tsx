import React, { FunctionComponent } from 'react';
import { Image } from 'react-native';
import { useTheme, palette } from '@designSystem/theme';

interface XProps {
  variant?: 'normal' | 'circle';
}

const X: FunctionComponent<XProps> = ({ variant = 'normal' }) => {
  const { colors } = useTheme();

  if (variant === 'circle') {
    return <Image source={require('./X-circle.png')} resizeMode="contain" />;
  }

  return colors.onBackground.default === palette.black ? (
    <Image source={require('./X.png')} resizeMode="contain" />
  ) : (
    <Image source={require('./X-white.png')} resizeMode="contain" />
  );
};

export { X };
