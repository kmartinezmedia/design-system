import React, { useRef, useState } from 'react';
import Animated, {
  Clock,
  block,
  clockRunning,
  cond,
  not,
  startClock,
} from 'react-native-reanimated';
import { Button, Text, VStack } from '@designSystem';

const { Value, set, useCode } = Animated;

export default function Animation1() {
  const [show, setShow] = useState(true);
  const opacity = useRef(new Value(0)).current;
  const time = useRef(new Value(0)).current;
  const clock = useRef(new Clock()).current;

  useCode(
    () =>
      block([
        // 1. if clock is not running start the clock and save original clock value
        cond(not(clockRunning(clock)), [startClock(clock), set(time, clock)]),
        // 2. calculate progress of animation
        // 3. If animation is over i.e. , stop the clock
      ]),
    [],
  );

  return (
    <VStack>
      <Animated.View style={{ opacity }}>
        <Text>here is some text</Text>
        <Button onPress={() => setShow((prev) => !prev)}>Show something</Button>
      </Animated.View>
    </VStack>
  );
}
