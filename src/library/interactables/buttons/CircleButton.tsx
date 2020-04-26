import React, { FunctionComponent } from 'react';
import {
  TouchableWithoutFeedback,
  GestureResponderEvent,
  Animated,
  StyleSheet,
} from 'react-native';
import { View, ViewProps } from '@designSystem/primitives';
import { usePressAnimation, useButtonVariant } from '@designSystem/hooks';
import { sizing } from '@designSystem/theme';

export interface CircleButtonProps extends Omit<ViewProps, 'onPress'> {
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
  onPress?: (event: GestureResponderEvent) => void;
  testID?: string;
}

export const CircleButton: FunctionComponent<CircleButtonProps> = ({
  children,
  disabled,
  onPress,
  testID,
  variant = 'primary',
  ...props
}) => {
  const [pressIn, pressOut, scale] = usePressAnimation();
  const variantStyles = useButtonVariant(variant);
  return (
    <View {...props}>
      <TouchableWithoutFeedback
        onPress={onPress}
        onPressIn={pressIn}
        onPressOut={pressOut}
        disabled={disabled}>
        <Animated.View
          style={[
            styles.circleButton,
            disabled && styles.disabled,
            { transform: [{ scale }] },
            variantStyles,
          ]}
          testID={testID}>
          {children}
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  circleButton: {
    height: sizing.icons.button,
    width: sizing.icons.button,
    borderRadius: sizing.icons.button / 2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  disabled: {
    opacity: 0.5,
  },
});
