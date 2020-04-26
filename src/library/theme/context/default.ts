import { createTheming } from '@callstack/react-theme-provider';
import { palette } from '@designSystem/theme/palette';

export const { ThemeProvider, withTheme, useTheme } = createTheming({
  colors: {
    background: {
      default: palette.white,
      alternate: palette.greyWash,
      overlay: palette.blackAlpha20,
    },
    onBackground: {
      default: palette.black,
      muted: palette.greyDark,
      line: palette.greyLight,
      primary: palette.blue,
      negative: palette.red,
      positive: palette.green,
      warning: palette.yellow,
    },
    brand: {
      primary: palette.blue,
      negative: palette.red,
      positive: palette.green,
      warning: palette.yellow,
    },
    onBrand: {
      primary: palette.white,
      negative: palette.white,
      positive: palette.white,
      warning: palette.white,
    },
    wash: {
      primary: palette.blueWash,
      negative: palette.redWash,
      positive: palette.greenWash,
      warning: palette.yellowWash,
    },
  },
  statusBar: {
    barStyle: 'dark-content',
    backgroundColor: palette.white,
  },
});
