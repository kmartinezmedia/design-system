import React, { useRef, FunctionComponent } from 'react';
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
import { border, fontFamily, fontSize, fontWeight } from '@designSystem/theme';
import { ButtonVariant } from '@designSystem/types';
import { useButtonVariant } from '@designSystem/hooks';

export interface ButtonProps extends Omit<ViewProps, 'onPress'> {
  name?: string;
  variant?: ButtonVariant;
  disabled?: boolean;
  isLoading?: boolean;
  outline?: boolean;
  layout?: 'block' | 'inline';
  onPress?: (e: GestureResponderEvent) => void;
}

export const Button: FunctionComponent<ButtonProps> = ({
  variant = 'primary',
  layout = 'block',
  spacing = { bottom: 4 },
  name,
  children,
  disabled,
  isLoading,
  onPress,
  ...props
}) => {
  const variantStyles = useButtonVariant(variant, disabled);
  const buttonScale = useRef(new Animated.Value(1)).current;

  const handleOnPressIn = () => {
    Animated.spring(buttonScale, {
      toValue: 0.98,
      useNativeDriver: true,
    }).start();
  };

  const handleOnPressOut = () => {
    Animated.spring(buttonScale, {
      friction: 3,
      tension: 5,
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View spacing={spacing} {...props}>
      <TouchableWithoutFeedback
        testID={name}
        onPress={onPress}
        onPressIn={handleOnPressIn}
        onPressOut={handleOnPressOut}
        disabled={disabled || isLoading}
      >
        <Animated.View
          style={[
            styles.button,
            variantStyles,
            { transform: [{ scale: buttonScale }] },
            layout === 'block' ? styles.buttonBlock : styles.buttonInline,
          ]}
          {...props}
        >
          {isLoading ? (
            <RNView style={styles.loading}>
              <ActivityIndicator size="small" color={variantStyles.textColor} />
            </RNView>
          ) : (
            <Text style={[styles.text, { color: variantStyles.textColor }]}>
              {children}
            </Text>
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
    borderRadius: border.buttonRadius,
  },
  buttonBlock: {
    width: '100%',
  },
  buttonInline: {
    flexGrow: 1,
  },
  loading: {
    padding: 1,
  },
  text: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.body,
    fontWeight: fontWeight.medium,
  },
});
