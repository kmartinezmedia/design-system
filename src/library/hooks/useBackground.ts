import { useMemo } from 'react';
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

  useMemo(() => {
    if (surface in colors && color in colors[surface]) {
      return colors[surface][color];
    }
  }, [surface, color, colors]);
};
