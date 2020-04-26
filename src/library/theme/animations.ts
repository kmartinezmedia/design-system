import { Easing } from 'react-native';

export const animations = {
  // https://gist.github.com/jondot/1317ee27bab54c482e87
  iosKeyboardEase: Easing.bezier(0.1, 0.76, 0.55, 0.9),
  slideIn: {
    toValue: 1,
    friction: 6,
    tension: 24,
    useNativeDriver: true,
  },
  slideOut: {
    toValue: 0,
    friction: 6,
    tension: 24,
    useNativeDriver: true,
  },
};
