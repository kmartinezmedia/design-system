// Color scale
import { useTheme } from '@designSystem/theme';
export type Theme = ReturnType<typeof useTheme>;
export type SurfaceColorMap = {
  background: keyof Theme['colors']['onBackground'];
  brand: keyof Theme['colors']['onBrand'];
  wash: keyof Theme['colors']['brand'];
};
export type SurfaceModifier = keyof SurfaceColorMap;
export type OnBackgroundColor = SurfaceColorMap['background'];

// Spacing scale
export type SpacingScale =
  | -10
  | -9
  | -8
  | -7
  | -6
  | -5
  | -4
  | -3
  | -2
  | -1
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10;
export type SpacingDirection =
  | 'vertical'
  | 'horizontal'
  | 'all'
  | 'left'
  | 'right'
  | 'top'
  | 'bottom';
export type Spacing =
  | { [key in SpacingDirection]?: SpacingScale }
  | SpacingScale[]
  | SpacingScale;

// Pinning scale
export type PinningDirection = 'top' | 'bottom' | 'left' | 'right' | 'all';

// Elevation levels
export type ElevationLevels = 1 | 2;

// Button Variant
export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'positive'
  | 'negative'
  | 'tertiary';

// Small Button Variant
export type SmallButtonVariant = 'primary' | 'secondary' | 'positive';

// Input Variant
export type InputVariant = 'default' | 'positive' | 'negative';
