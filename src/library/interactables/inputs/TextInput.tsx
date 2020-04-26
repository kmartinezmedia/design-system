import React, { useState, ReactNode } from 'react';
import {
  View,
  TextInput as RNTextInput,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  TextInputProps as RNTextInputProps,
  StyleSheet,
  Keyboard,
} from 'react-native';
import {
  useTheme,
  elevation,
  border,
  spacing,
  fontSize,
  sizing,
} from '@designSystem/theme';
import { Caption, Label, VStack } from '@designSystem/primitives';
import { InputVariant } from '@designSystem/types';
import { useInputVariant } from '@designSystem/hooks';

export interface TextInputProps extends RNTextInputProps {
  testID?: string;
  children?: (p: TextInputProps) => ReactNode;
  variant?: InputVariant;
  width?: '100%' | 'auto';
  label?: string;
  description?: React.ReactNode;
  icon?: React.ReactNode;
  append?: boolean;
  error?: string;
}

export const TextInput = React.forwardRef<RNTextInput, TextInputProps>(
  (
    {
      variant = 'default',
      width = '100%',
      autoCapitalize = 'sentences',
      returnKeyType = 'next',
      textContentType = 'none',
      onSubmitEditing = Keyboard.dismiss,
      onFocus,
      onBlur,
      value,
      label,
      description,
      icon,
      children,
      append,
      error,
      testID,
      ...inputProps
    },
    ref,
  ) => {
    const { colors } = useTheme();
    const [focused, setFocused] = useState(false);
    const [borderStyles, inputStyles, labelColor] = useInputVariant(
      variant,
      focused,
    );

    const props = {
      testID,
      style: [styles.input, inputStyles, append && styles.append],
      value,
      autoCapitalize,
      returnKeyType,
      autoCorrect: false,
      placeholderTextColor: colors.onBackground.muted,
      onFocus: (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
        onFocus && onFocus(e);
        setFocused(true);
      },
      onBlur: (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
        onBlur && onBlur(e);
        setFocused(false);
      },
      onSubmitEditing,
      ...inputProps,
    };

    return (
      <VStack spacing={error || description ? { bottom: 2 } : 0}>
        {!!label && <Label color={labelColor}>{label}</Label>}
        <View
          style={[
            {
              width,
              marginBottom: description || error ? spacing[1] : spacing[4],
            },
            styles.border,
            append && styles.append,
            borderStyles,
          ]}>
          {children ? (
            children(props)
          ) : (
            <RNTextInput
              {...props}
              textContentType={textContentType}
              keyboardAppearance="light"
              ref={ref}
            />
          )}
          {!!icon && <View style={styles.icon}>{icon}</View>}
        </View>
        {description ||
          (!!error && <Caption color="negative">{error}</Caption>)}
      </VStack>
    );
  },
);

const styles = StyleSheet.create({
  // Note: we do this nasty hack for brownfield consumer integration
  // for some reason consumer iOS was animating the padding property, so
  // we're faking padding by using a background colored border as spacing on the text
  // input - then adding a wrapper element to show the actual border outline
  border: {
    borderRadius: border.inputRadius,
    borderWidth: border.width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  append: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },

  input: {
    fontSize: fontSize.body,
    width: '100%',
    borderStyle: 'solid',
    borderRadius: border.inputRadius - border.width,
    paddingHorizontal: spacing[3],
    paddingVertical: 0,
    flex: 1,
    height: sizing.input - 2 * border.width,
  },

  icon: {
    paddingRight: spacing[3],
    zIndex: elevation.layer2,
  },
});
