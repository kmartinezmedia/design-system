import React, { useState } from 'react';
import { TouchableOpacity, TextInput as RNTextInput } from 'react-native';
import { TextInput, TextInputProps } from './TextInput';
import { Icon, Caption, Spacer, HStack } from '@designSystem/primitives';
import { OnBackgroundColor, InputVariant } from '@designSystem/types';
import { debounce } from '@utils/Events';

export interface PasswordInputProps extends TextInputProps {
  strength?: 0 | 1 | 2 | 3;
}

export const PasswordInput = React.forwardRef<RNTextInput, PasswordInputProps>(
  ({ keyboardType = 'default', strength, onBlur, onFocus, ...props }, ref) => {
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const [isFocused, setIsFocused] = useState(false);

    let descriptionText = '';
    let descriptionColor: OnBackgroundColor = 'default';
    let variant: InputVariant = 'default';

    if (strength !== undefined) {
      if (isFocused) {
        switch (strength) {
          case 1:
            descriptionText = 'Weak password';
            descriptionColor = 'negative';
            variant = 'negative';
            break;
          case 2:
            descriptionText = 'Good password';
            descriptionColor = 'muted';
            variant = 'default';
            break;
          case 3:
            descriptionText = 'Strong password';
            descriptionColor = 'positive';
            variant = 'positive';
            break;
        }
      } else {
        switch (strength) {
          case 1:
            descriptionText = 'Weak password';
            descriptionColor = 'negative';
            break;
          case 2:
          case 3:
            descriptionText = 'Looks good!';
            descriptionColor = 'positive';
            break;
        }
      }
    }

    const showSuccess =
      descriptionColor === 'positive' && variant === 'default';

    return (
      <TextInput
        {...props}
        keyboardType={keyboardType}
        ref={ref}
        onFocus={(e) => {
          onFocus && onFocus(e);
          setIsFocused(true);
        }}
        onBlur={(e) => {
          onBlur && onBlur(e);
          setIsFocused(false);
        }}
        variant={variant}
        textContentType="password"
        secureTextEntry={secureTextEntry}
        icon={
          <TouchableOpacity
            onPress={debounce(() => setSecureTextEntry(!secureTextEntry))}>
            {secureTextEntry ? (
              <Icon size="medium" name="visible" color="muted" />
            ) : (
              <Icon size="medium" name="notVisible" color="muted" />
            )}
          </TouchableOpacity>
        }
        description={
          ((isFocused && descriptionText) || showSuccess) && (
            <HStack alignItems="center" spacing={0}>
              <Caption color={descriptionColor}>{descriptionText}</Caption>
              <Spacer />
              {descriptionColor === 'positive' && variant === 'default' && (
                <Icon size="small" name="check" color="positive" />
              )}
            </HStack>
          )
        }
      />
    );
  },
);
