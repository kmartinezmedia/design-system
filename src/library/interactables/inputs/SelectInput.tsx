import React, { FunctionComponent } from 'react';
import {
  TouchableWithoutFeedback,
  StyleSheet,
  GestureResponderEvent,
  View,
  TextInputProps,
} from 'react-native';
import { Body, Label, HStack, Spacer, Icon } from '@designSystem/primitives';
import {
  useTheme,
  border,
  spacing,
  fontSize,
  sizing,
} from '@designSystem/theme';

export interface SearchInputProps extends TextInputProps {
  prepend?: boolean;
  caret: 'right' | 'down' | 'none';
  placeholder?: string;
  label?: string;
  width?: 'auto' | '100%';
  onPress?: (event: GestureResponderEvent) => void;
}

export const SearchInput: FunctionComponent<SearchInputProps> = ({
  caret = 'right',
  value,
  placeholder,
  label,
  width,
  prepend,
  onPress,
  children,
}) => {
  const { colors } = useTheme();
  const isPlaceholder = value === '';

  return (
    <View>
      {!!label && <Label>{label}</Label>}
      <TouchableWithoutFeedback onPress={onPress}>
        <View
          style={[
            {
              width,
              backgroundColor: colors.background.default,
              borderColor: colors.onBackground.line,
            },
            styles.searchSelect,
            prepend && styles.prepend,
          ]}>
          <HStack spacing={0} alignItems="center">
            <Body
              ellipsize="tail"
              color={prepend || !isPlaceholder ? 'default' : 'muted'}
              spacing={{ right: 4 }}>
              {value || placeholder}
            </Body>
            <Spacer />
            {caret !== 'none' && (
              <Icon
                size="small"
                name={caret === 'right' ? 'caretRight' : 'caretDown'}
                color="muted"
              />
            )}
          </HStack>
        </View>
      </TouchableWithoutFeedback>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  searchSelect: {
    padding: spacing[3],
    paddingTop: spacing[3] - 2, // account for border top and bottom
    fontSize: fontSize.body,
    marginBottom: spacing[4],
    borderStyle: 'solid',
    borderRadius: border.inputRadius,
    borderWidth: border.width,
    minWidth: 80,
    height: sizing.input,
  },

  prepend: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
});
