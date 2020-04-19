import { debounce as _debounce } from 'lodash';

// React Native is historically trash at debouncing touch events
// This can cause a lot of unwanted behavior (in UMO - mostly double navigations
// where we push a screen/experience onto the stack 2 times). Debouncing the event
// 500 miliseconds, but taking the leading event prevents this effect and the accidental "double-tap"
// https://medium.com/@devmrin/debouncing-touch-events-in-react-native-prevent-navigating-twice-or-more-times-when-button-is-90687e4a8113
export const debounce = (fn: any) => {
  return _debounce(fn, 500, {
    leading: true,
  });
};
