import React from 'react';
import Animated from 'react-native-reanimated';
import { Screen, Text } from '@designSystem';

export default function Animation1() {
  const opacity = new Animated.Value(0);
  return (
    <Screen>
      <Animated.View style={{ opacity }}>
        <Text>here is some text</Text>
      </Animated.View>
    </Screen>
  );
}
