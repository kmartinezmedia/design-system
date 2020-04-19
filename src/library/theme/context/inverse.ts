import { palette } from '@designSystem/theme/palette';

export const inverseTheme = {
  colors: {
    background: {
      default: '#000', // todo we should probably migrate this to colors.black,
      alternate: palette.black,
      overlay: palette.blackAlpha20,
    },
    onBackground: {
      default: palette.white,
      muted: palette.whiteAlpha60,
      line: palette.whiteAlpha60,
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
    barStyle: 'light-content',
    backgroundColor: 'transparent',
  },
};
