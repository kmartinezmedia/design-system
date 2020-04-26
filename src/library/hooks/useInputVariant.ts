import { useTheme } from '@designSystem/theme';
import { InputVariant, OnBackgroundColor } from '@designSystem/types';
import { ViewStyle, TextStyle } from 'react-native';

// Android: color needs to be a required field.
// Otherwise, AndroidTextInput throws error 🐒
type TextInputsStyle = TextStyle & { color: string };

export const useInputVariant = (
  variant: InputVariant,
  focused: boolean,
): [ViewStyle, TextStyle, OnBackgroundColor] => {
  const { colors } = useTheme();

  const border: ViewStyle = {
    backgroundColor: colors.background.default,
    borderColor: colors.onBackground.line,
  };

  const input: TextInputsStyle = {
    color: colors.onBackground.default,
    borderColor: colors.background.default,
    backgroundColor: colors.background.default,
  };

  let label: OnBackgroundColor = focused ? 'primary' : 'default';

  if (focused && variant === 'negative') {
    input.color = colors.onBackground.negative;
    border.borderColor = colors.onBackground.negative;
    label = 'negative';
  } else if (variant === 'positive') {
    input.color = colors.onBackground.positive;
    border.borderColor = colors.onBackground.positive;
    label = 'positive';
  } else {
    input.color = colors.onBackground.default;
    border.borderColor = focused
      ? colors.onBackground.primary
      : colors.onBackground.line;
  }

  return [border, input, label];
};
