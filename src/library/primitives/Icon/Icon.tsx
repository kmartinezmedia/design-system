import React from 'react';
import { Text, StyleSheet } from 'react-native';

import { useSpacing, useForeground } from '@designSystem/hooks';
import { SurfaceColorMap, Spacing } from '@designSystem/types';

import {
  glyphMapLarge,
  glyphMapMedium,
  glyphMapSmall,
} from '@designSystem/assets/icons';

const iconMap = {
  small: glyphMapSmall,
  medium: glyphMapMedium,
  large: glyphMapLarge,
} as const;

type IconSizeNameMap = typeof iconMap;

export const Icon = <
  Size extends keyof IconSizeNameMap,
  Name extends keyof IconSizeNameMap[Size],
  Surface extends keyof SurfaceColorMap,
  Color extends SurfaceColorMap[Surface]
>({
  size,
  name,
  spacing = undefined,
  surface = 'background' as Surface,
  color = 'primary' as Color,
}: {
  size: Size;
  name: Name;
  spacing?: Spacing;
  surface?: Surface;
  color?: Color;
}) => {
  const space = useSpacing(spacing);
  const iconColor = useForeground(surface, color);

  return (
    <Text style={[space, styles[size], { color: iconColor }]}>
      {iconMap[size][name]}
    </Text>
  );
};

const styles = StyleSheet.create({
  small: {
    fontFamily: 'CoinbaseIconsSmall',
    fontSize: 12,
  },
  medium: {
    fontFamily: 'CoinbaseIconsMedium',
    fontSize: 16,
  },
  large: {
    fontFamily: 'CoinbaseIconsLarge',
    fontSize: 32,
  },
});
