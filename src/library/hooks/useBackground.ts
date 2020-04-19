import { useTheme } from '@designSystem/theme';
import { SurfaceModifier, Theme } from '@designSystem/types';

export const useBackground = <
  T extends SurfaceModifier,
  C extends keyof Theme['colors'][T]
>(
  surface: T,
  color: C,
) => {
  const { colors } = useTheme();

  if (surface in colors && color in colors[surface]) {
    return colors[surface][color];
  }
};
