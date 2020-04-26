import { useTheme, border } from '@designSystem/theme';
import { ButtonVariant } from '@designSystem/types';

export const useButtonVariant = (
  variant: ButtonVariant,
  disabled?: boolean,
) => {
  const { colors } = useTheme();

  if (disabled) {
    switch (variant) {
      case 'primary':
      case 'positive':
      case 'negative':
        return {
          textColor: colors.onBackground.muted,
          backgroundColor: colors.onBackground.line,
          borderColor: colors.onBackground.line,
          borderWidth: border.width,
        };
      case 'secondary':
        return {
          textColor: colors.onBackground.line,
          backgroundColor: colors.background.default,
          borderColor: colors.onBackground.line,
          borderWidth: border.width,
        };
      case 'tertiary':
        return {
          textColor: colors.onBackground.line,
          backgroundColor: colors.background.default,
        };
    }
  }

  return {
    primary: {
      textColor: colors.onBrand.primary,
      backgroundColor: colors.brand.primary,
      borderColor: colors.brand.primary,
      borderWidth: border.width,
    },
    secondary: {
      textColor: colors.onBackground.primary,
      backgroundColor: colors.background.default,
      borderColor: colors.onBackground.line,
      borderWidth: border.width,
    },
    positive: {
      textColor: colors.onBrand.positive,
      backgroundColor: colors.brand.positive,
      borderColor: colors.brand.positive,
      borderWidth: border.width,
    },
    negative: {
      textColor: colors.onBrand.negative,
      backgroundColor: colors.brand.negative,
      borderColor: colors.brand.positive,
      borderWidth: border.width,
    },
    tertiary: {
      textColor: colors.onBackground.muted,
      backgroundColor: colors.background.default,
    },
  }[variant];
};
