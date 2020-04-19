import { useTheme } from '@designSystem/theme';
import { SurfaceColorMap } from '@designSystem/types';

export const useForeground = <T extends keyof SurfaceColorMap>(
  surface: T,
  color: SurfaceColorMap[T],
) => {
  const { colors } = useTheme();

  if (surface === 'wash' && color in colors.brand) {
    // we special case wash becauses it's a bizare color relationship
    // and we 🙏 yitong will kill it for us
    return colors.brand[color as SurfaceColorMap['wash']];
  }

  if (surface === 'brand' && color in colors.onBrand) {
    return colors.onBrand[color as SurfaceColorMap['brand']];
  }

  if (surface === 'background' && color in colors.onBackground) {
    return colors.onBackground[color as SurfaceColorMap['background']];
  }
};
