// @CB Text Base Component - should not be imported outside of design system
import React from 'react';
import {
  Text as RNText,
  TextStyle,
  TextProps as RNTextProps,
  StyleSheet,
} from 'react-native';
import { SurfaceColorMap, Spacing } from '@designSystem/types';
import { debounce } from '@utils/Events';
import { useSpacing, useForeground } from '@designSystem/hooks';

export interface TextProps<
  T extends keyof SurfaceColorMap = keyof SurfaceColorMap,
  C extends SurfaceColorMap[T] = SurfaceColorMap[T]
> extends RNTextProps {
  align?: TextStyle['textAlign'];
  ellipsize?: RNTextProps['ellipsizeMode'];
  style?: TextStyle;
  spacing?: Spacing;
  lineHeight?: number | 'none';
  dangerouslySetStyle?: TextStyle;
  surface?: T;
  color?: C;
}

export const Text = <
  T extends keyof SurfaceColorMap,
  C extends SurfaceColorMap[T]
>({
  surface = 'background' as T,
  color = 'default' as C,
  children,
  align,
  ellipsize,
  style,
  onPress,
  spacing,
  lineHeight,
  dangerouslySetStyle,
  ...textProps
}: React.PropsWithChildren<TextProps<T, C>>) => {
  const textColor = useForeground(surface, color);

  const computedLineHeight =
    lineHeight === undefined ? style?.lineHeight : lineHeight;

  const ellipsizeProps =
    ellipsize &&
    (() => {
      return {
        numberOfLines: textProps.numberOfLines || 1,
        ellipsizeMode: ellipsize,
      };
    })();

  return (
    <RNText
      onPress={onPress && debounce(onPress)}
      style={[
        style,
        {
          color: textColor,
          textAlign: align,
          lineHeight:
            computedLineHeight === 'none' ? undefined : computedLineHeight,
        },
        ellipsize && styles.withEllipse,
        useSpacing(spacing),
        dangerouslySetStyle,
      ]}
      {...ellipsizeProps}
      {...textProps}
    >
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  withEllipse: {
    overflow: 'hidden',
  },
});
