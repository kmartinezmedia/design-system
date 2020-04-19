import React from 'react';
import { Platform, Text } from 'react-native';
import { useSpacing, useForeground } from '@designSystem/hooks';
import { SurfaceColorMap, Spacing } from '@designSystem/types';

import { glyphMap } from './glyphMap';
const FONT_FAMILY = 'CoinbaseIcons';
const FONT_FILE = '../assets/fonts/CoinbaseIcons.ttf';

type IconName = keyof typeof glyphMap;
type IconProps<
  T extends keyof SurfaceColorMap = keyof SurfaceColorMap,
  C extends SurfaceColorMap[T] = SurfaceColorMap[T]
> = {
  name: IconName;
  size?: number;
  spacing?: Spacing;
  surface?: T;
  color?: C;
};

// Heavily inspired by createIconSet in react-native-vector-icons
// https://github.com/oblador/react-native-vector-icons/blob/master/lib/create-icon-set.js
export const Icon = <
  T extends keyof SurfaceColorMap,
  C extends SurfaceColorMap[T]
>({
  name,
  size = 32,
  spacing = undefined,
  surface = 'background' as T,
  color = 'primary' as C,
}: IconProps<T, C>) => {
  const space = useSpacing(spacing);
  const iconColor = useForeground(surface, color);

  return (
    <Text
      style={{
        ...space,
        fontSize: size,
        color: iconColor,
        fontFamily: fontReference,
      }}
    >
      {glyphMap[name]}
    </Text>
  );
};

// Android doesn't care about actual fontFamily name, it will only look in fonts folder.
const fontBasename = FONT_FILE ? FONT_FILE.replace('.ttf', '') : FONT_FAMILY;

const fontReference = Platform.select({
  android: fontBasename,
  web: fontBasename,
  default: FONT_FAMILY,
});
