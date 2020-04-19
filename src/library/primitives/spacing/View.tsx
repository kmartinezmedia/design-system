import React, { FunctionComponent } from 'react';
import {
  View as RNView,
  ViewStyle,
  ViewProps as RNViewProps,
  FlexStyle,
  GestureResponderEvent,
  Animated,
  StyleSheet,
} from 'react-native';
import { useSpacing, usePin, useElevation } from '@designSystem/hooks';
import {
  Spacing,
  PinningDirection,
  ElevationLevels,
} from '@designSystem/types';
import LinearGradient from 'react-native-linear-gradient';
import { useTheme } from '@designSystem/theme';

export interface ViewProps
  extends Omit<RNViewProps, 'style'>,
    Pick<
      FlexStyle,
      | 'height'
      | 'width'
      | 'minWidth'
      | 'flexGrow'
      | 'flexShrink'
      | 'justifyContent'
      | 'alignItems'
      | 'alignContent'
      | 'alignSelf'
      | 'flexDirection'
      | 'flexWrap'
      | 'flexBasis'
    > {
  spacing?: Spacing;
  dangerouslySetStyle?: ViewStyle;
  elevation?: ElevationLevels;
  pin?: PinningDirection;
  onPress?: (event: GestureResponderEvent) => boolean;
  animated?: boolean;
  overflow?: 'visible' | 'hidden' | 'scroll' | 'gradient';
}

export const View: FunctionComponent<ViewProps> = ({
  overflow = 'visible',
  flexDirection = 'column',
  flexWrap = 'nowrap',
  justifyContent = 'flex-start',
  alignItems = 'stretch',
  alignSelf = 'auto',
  spacing = 0,
  dangerouslySetStyle = {},
  flexGrow,
  flexShrink,
  height,
  width,
  animated,
  elevation,
  pin,
  onPress,
  children,
  ...props
}) => {
  const { colors } = useTheme();
  const spacingStyles = useSpacing(spacing);
  const pinStyles = usePin(pin);
  const elevationStyles = useElevation(elevation);

  const Component = animated ? Animated.View : RNView;

  return (
    <Component
      onStartShouldSetResponder={onPress}
      style={
        {
          ...{
            flexDirection,
            flexWrap,
            justifyContent,
            alignItems,
            alignSelf,
            flexGrow,
            flexShrink,
            height,
            width,
          },
          ...spacingStyles,
          ...pinStyles,
          ...elevationStyles,
          ...dangerouslySetStyle,
        } as any
      }
      {...props}>
      {children}
      {overflow === 'gradient' ? (
        <LinearGradient
          style={styles.Gradient}
          colors={[
            '#ffffff00' /* oneoff color bc android can't gradient from 'transparent' */,
            colors.background.default,
          ]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        />
      ) : null}
    </Component>
  );
};

const styles = StyleSheet.create({
  Gradient: {
    width: 30,
    top: 0,
    right: 0,
    bottom: 0,
    position: 'absolute' as const,
  },
});
