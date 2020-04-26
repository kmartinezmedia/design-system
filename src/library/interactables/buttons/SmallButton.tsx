import React, { FunctionComponent } from 'react';
import {
  TouchableWithoutFeedback,
  GestureResponderEvent,
  Animated,
  StyleSheet,
  Text,
} from 'react-native';
import { View, ViewProps } from '@designSystem/primitives';
import { usePressAnimation, useSmallButtonVariant } from '@designSystem/hooks';
import {
  border,
  spacing,
  fontFamily,
  fontSize,
  fontWeight,
} from '@designSystem/theme';
import { SmallButtonVariant } from '@designSystem/types';

export interface SmallButtonProps extends Omit<ViewProps, 'onPress'> {
  disabled?: boolean;
  variant?: SmallButtonVariant;
  onPress?: (event: GestureResponderEvent) => void;
  testID?: string;
}

export const SmallButton: FunctionComponent<SmallButtonProps> = ({
  children,
  disabled,
  onPress,
  testID,
  variant = 'primary',
  ...props
}) => {
  const [pressIn, pressOut, scale] = usePressAnimation();
  const variantStyles = useSmallButtonVariant(variant);
  return (
    <View {...props} alignSelf="flex-start">
      <TouchableWithoutFeedback
        onPress={onPress}
        onPressIn={pressIn}
        onPressOut={pressOut}
        disabled={disabled}>
        <Animated.View
          style={[
            styles.smallButton,
            disabled && styles.disabled,
            { transform: [{ scale }] },
            variantStyles,
          ]}
          testID={testID}>
          <Text style={[styles.text, { color: variantStyles.textColor }]}>
            {children}
          </Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  smallButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'solid',
    borderRadius: border.buttonRadius,
    paddingVertical: spacing[2],
    paddingHorizontal: spacing[4],
  },
  disabled: {
    opacity: 0.5,
  },
  text: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.body,
    fontWeight: fontWeight.medium,
  },
});
