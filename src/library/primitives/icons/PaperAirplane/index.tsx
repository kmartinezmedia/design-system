import React from 'react';
import { Image } from 'react-native';
import { useTheme, sizing } from '@designSystem/theme';

export const PaperAirplane = () => {
  const { colors } = useTheme();

  return (
    <Image
      source={require('./PaperAirplane.png')}
      style={{ tintColor: colors.onBackground.primary }}
      resizeMode="contain"
      width={sizing.icons.header}
      height={sizing.icons.header}
    />
  );
};
