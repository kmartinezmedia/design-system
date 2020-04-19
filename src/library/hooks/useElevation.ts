import { ViewStyle } from 'react-native';
import { useTheme } from '@designSystem/theme';
import { ElevationLevels } from '@designSystem/types';
import { palette, border } from '@designSystem/theme';

export const useElevation = (elevation?: ElevationLevels) => {
  const { colors } = useTheme();

  if (elevation === undefined) {
    return {};
  }

  const styles: { [key in ElevationLevels]: ViewStyle } = {
    1: {
      borderWidth: border.width,
      borderColor: colors.onBackground.line,
      shadowColor: palette.black,
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.02,
      shadowRadius: 12,
    },
    2: {
      borderWidth: border.width,
      borderColor: colors.onBackground.line,
      shadowColor: palette.black,
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.24,
      shadowRadius: 40,
    },
  };

  return styles[elevation] ?? {};
};
