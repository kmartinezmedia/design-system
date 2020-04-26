import { useTheme, border } from '@designSystem/theme';
import { SmallButtonVariant } from '@designSystem/types';

export const useSmallButtonVariant = (
  variant: SmallButtonVariant,
  disabled?: boolean,
) => {
  const { colors } = useTheme();

  if (disabled) {
    return {
      textColor: colors.onBackground.muted,
      backgroundColor: colors.onBackground.line,
      borderColor: colors.onBackground.line,
      borderWidth: border.width,
    };
  }

  return {
    primary: {
      textColor: colors.onBackground.primary,
      backgroundColor: colors.background.default,
      borderColor: colors.onBackground.line,
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
  }[variant];
};
