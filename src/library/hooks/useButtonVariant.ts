import { useTheme, border, spacing } from '@designSystem/theme';
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
          padding: spacing[4],
        };
      case 'secondary':
        return {
          textColor: colors.onBackground.line,
          backgroundColor: colors.background.default,
          borderColor: colors.onBackground.line,
          borderWidth: border.width,
          padding: spacing[4],
        };
      case 'tertiary':
        return {
          textColor: colors.onBackground.line,
          backgroundColor: colors.background.default,
          padding: spacing[1],
        };
    }
  }

  return {
    primary: {
      textColor: colors.onBrand.primary,
      backgroundColor: colors.brand.primary,
      borderColor: colors.brand.primary,
      borderWidth: border.width,
      padding: spacing[4],
    },
    secondary: {
      textColor: colors.onBackground.primary,
      backgroundColor: colors.background.default,
      borderColor: colors.onBackground.line,
      borderWidth: border.width,
      padding: spacing[4],
    },
    positive: {
      textColor: colors.onBrand.positive,
      backgroundColor: colors.brand.positive,
      borderColor: colors.brand.positive,
      borderWidth: border.width,
      padding: spacing[4],
    },
    negative: {
      textColor: colors.onBrand.negative,
      backgroundColor: colors.brand.negative,
      borderColor: colors.brand.positive,
      borderWidth: border.width,
      padding: spacing[4],
    },
    tertiary: {
      textColor: colors.onBackground.muted,
      backgroundColor: colors.background.default,
      padding: spacing[1],
    },
  }[variant];
};
