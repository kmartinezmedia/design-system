import React, { useEffect, useRef, FunctionComponent } from 'react';
import {
  TouchableWithoutFeedback,
  Animated,
  Keyboard,
  StyleSheet,
  GestureResponderEvent,
} from 'react-native';
import { Icon, Caption, HStack, VStack } from '@designSystem/primitives';
import { useTheme, border, spacing } from '@designSystem/theme';
import { debounce } from '@utils/Events';

export interface CheckBoxProps {
  testID?: string;
  label?: React.ReactNode;
  value?: boolean;
  onChange?: (e: GestureResponderEvent) => void;
}

export const CheckBox: FunctionComponent<CheckBoxProps> = ({
  testID,
  label,
  value,
  onChange,
}) => {
  const { colors } = useTheme();
  const boxValue = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(0.1)).current; /* android needs 0.1 */

  useEffect(() => {
    Animated.parallel([
      Animated.spring(scale, {
        toValue: value ? 1 : 0,
        friction: 7,
        useNativeDriver: false,
      }),
      Animated.timing(boxValue, {
        toValue: value ? 150 : 0,
        duration: 150,
        useNativeDriver: false,
      }),
    ]).start();
  }, [value, boxValue, scale]);

  return (
    <HStack spacing={0}>
      <TouchableWithoutFeedback
        onPress={debounce((e: GestureResponderEvent) => {
          onChange && onChange(e);
          Keyboard.dismiss();
        })}
        testID={testID}>
        <Animated.View
          style={[
            styles.box,
            {
              borderColor: boxValue.interpolate({
                inputRange: [0, 150],
                outputRange: [
                  colors.onBackground.line,
                  colors.onBackground.primary,
                ],
              }),
            },
          ]}>
          <Animated.View style={{ transform: [{ scale }] }}>
            <Icon size="small" name="check" />
          </Animated.View>
        </Animated.View>
      </TouchableWithoutFeedback>
      <VStack spacing={{ horizontal: 4 }} flexShrink={1}>
        <Caption testID={`${testID}Label`}>{label}</Caption>
      </VStack>
    </HStack>
  );
};

const styles = StyleSheet.create({
  box: {
    marginVertical: spacing[1],
    borderStyle: 'solid',
    borderWidth: border.width,
    borderRadius: border.inputRadius,
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
