import React, { FunctionComponent } from 'react';
import {
  GestureResponderEvent,
  Text,
  TouchableWithoutFeedback,
  Animated,
  ActivityIndicator,
  StyleSheet,
  View as RNView,
} from 'react-native';
import { View, ViewProps } from '@designSystem/primitives';
import {
  border,
  fontFamily,
  fontSize,
  fontWeight,
  spacing as spacingConstant,
} from '@designSystem/theme';
import { ButtonVariant } from '@designSystem/types';
import { useButtonVariant, usePressAnimation } from '@designSystem/hooks';

const defaultSpacing = { bottom: 4 } as const;

export interface ButtonProps extends Omit<ViewProps, 'onPress'> {
  testID?: string;
  variant?: ButtonVariant;
  disabled?: boolean;
  isLoading?: boolean;
  outline?: boolean;
  onPress?: (e: GestureResponderEvent) => void;
}

export const Button: FunctionComponent<ButtonProps> = ({
  variant = 'primary',
  spacing = defaultSpacing,
  flexGrow = 0,
  testID,
  children,
  disabled,
  isLoading,
  onPress,
  ...props
}) => {
  const { textColor, ...variantStyles } = useButtonVariant(variant, disabled);
  const [pressIn, pressOut, scale] = usePressAnimation();

  return (
    <View flexGrow={flexGrow} spacing={spacing} {...props}>
      <TouchableWithoutFeedback
        testID={testID}
        onPress={onPress}
        onPressIn={pressIn}
        onPressOut={pressOut}
        disabled={disabled || isLoading}
      >
        <Animated.View
          style={[
            styles.button,
            variant === 'tertiary' && styles.tertiary,
            variantStyles,
            { transform: [{ scale }] },
          ]}
          {...props}
        >
          {isLoading ? (
            <RNView style={styles.loading}>
              <ActivityIndicator size="small" color={textColor} />
            </RNView>
          ) : (
            <Text style={[styles.text, { color: textColor }]}>{children}</Text>
          )}
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    borderStyle: 'solid',
    width: '100%',
    borderRadius: border.buttonRadius,
    padding: spacingConstant[4],
  },
  tertiary: {
    padding: spacingConstant[1],
  },
  loading: {
    height: 18,
  },
  text: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.body,
    fontWeight: fontWeight.medium,
  },
});
