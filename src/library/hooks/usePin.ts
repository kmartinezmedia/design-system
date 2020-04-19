import { useMemo } from 'react';
import { ViewStyle } from 'react-native';
import { PinningDirection } from '@designSystem/types';

export const usePin = (pin?: PinningDirection) => {
  return useMemo(() => {
    const styles: ViewStyle = {};

    if (!pin) {
      return styles;
    }

    styles.position = 'absolute';

    switch (pin) {
      case 'top':
        styles.top = 0;
        styles.left = 0;
        styles.right = 0;
        break;
      case 'bottom':
        styles.bottom = 0;
        styles.left = 0;
        styles.right = 0;
        break;
      case 'right':
        styles.top = 0;
        styles.bottom = 0;
        styles.right = 0;
        break;
      case 'left':
        styles.top = 0;
        styles.bottom = 0;
        styles.left = 0;
        break;
      case 'all':
        styles.top = 0;
        styles.bottom = 0;
        styles.left = 0;
        styles.right = 0;
    }

    return styles;
  }, [pin]);
};
