import { YellowBox } from 'react-native';
export function ignoreWarnings() {
  YellowBox.ignoreWarnings([
    // This warning is coming from within React Native code,
    // so I'm not sure there's anything we can do about it right now.
    'Require cycle:',
  ]);
}
