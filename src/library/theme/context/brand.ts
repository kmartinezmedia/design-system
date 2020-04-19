import { palette } from '@designSystem/theme/palette';

export const brandTheme = {
  colors: {
    background: {
      default: palette.blue,
      alternate: palette.blue,
      overlay: palette.blackAlpha20,
    },
    onBackground: {
      default: palette.white,
      muted: palette.whiteAlpha60,
      line: palette.greyLight,
      primary: palette.blue,
      negative: palette.red,
      positive: palette.green,
      warning: palette.yellow,
    },
    brand: {
      primary: palette.white,
      negative: palette.red,
      positive: palette.green,
      warning: palette.yellow,
    },
    onBrand: {
      primary: palette.blue,
      negative: palette.white,
      positive: palette.white,
      warning: palette.white,
    },
    wash: {
      primary: palette.whiteAlpha60,
      negative: palette.redWash,
      positive: palette.greenWash,
      warning: palette.yellowWash,
    },
  },
  statusBar: {
    barStyle: 'light-content',
    backgroundColor: palette.blue,
  },
};
