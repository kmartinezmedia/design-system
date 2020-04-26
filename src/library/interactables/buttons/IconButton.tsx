import React, { FunctionComponent } from 'react';
import {
  TouchableWithoutFeedback,
  GestureResponderEvent,
  Animated,
  StyleSheet,
} from 'react-native';
import { View, ViewProps } from '@designSystem/primitives';
import { usePressAnimation } from '@designSystem/hooks';
import { sizing } from '@designSystem/theme';

export interface IconButtonProps extends Omit<ViewProps, 'onPress'> {
  disabled?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
  onLongPress?: (event: GestureResponderEvent) => void;
  testID?: string;
}

export const IconButton: FunctionComponent<IconButtonProps> = ({
  children,
  disabled,
  onPress,
  onLongPress,
  testID,
  ...props
}) => {
  const [pressIn, pressOut, scale] = usePressAnimation();
  return (
    <View {...props}>
      <TouchableWithoutFeedback
        onPress={onPress}
        onPressIn={pressIn}
        onPressOut={pressOut}
        onLongPress={onLongPress}
        disabled={disabled}>
        <Animated.View
          style={[
            styles.iconButton,
            disabled ? styles.disabled : undefined,
            { transform: [{ scale }] },
          ]}
          testID={testID}>
          {children}
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  iconButton: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    // todo: this should be more strict, but for backwards
    // compat until new icons land we're doing min*sizes
    minHeight: sizing.icons.button,
    minWidth: sizing.icons.button,
  },
  disabled: {
    opacity: 0.5,
  },
});
