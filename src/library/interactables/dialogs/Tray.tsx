import React, { useState, useRef, ReactNode } from 'react';
import { ViewStyle, StyleSheet, View, Easing } from 'react-native';
import Modal from 'react-native-modal';
import { Component } from '@root/types/Component';
import { useTheme, border } from '@designSystem/theme';
import { useSpacing } from '@designSystem/hooks/useSpacing';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import { onGestureEvent, withSpring } from 'react-native-redash';

// Dragging the handle down by more than this distance will dismiss the Tray
const DISMISSAL_DRAG_THRESHOLD = 150;

const Handle: Component = () => {
  const { colors } = useTheme();
  const style: ViewStyle = {
    width: 40,
    height: 6,
    borderRadius: 4,
    backgroundColor: colors.onBackground.line,
    alignSelf: 'center',
  };
  return <View style={style} />;
};

const show = {
  toValue: 1,
  useNativeDriver: true,
  duration: 200,
  easing: Easing.ease,
};
const hide = {
  toValue: 0,
  useNativeDriver: true,
  duration: 200,
  easing: Easing.ease,
};

interface TrayProps {
  onDismiss: () => void;
  isVisible: boolean;
  children: ReactNode;
}
export const Tray: Component<TrayProps> = ({
  children,
  onDismiss,
  isVisible,
}) => {
  const { colors } = useTheme();
  const [cardAnim] = useState(new Animated.Value(0));
  const [overlayAnim] = useState(new Animated.Value(0));
  const translationY = useRef(new Animated.Value(0)).current;
  const velocityY = useRef(new Animated.Value(0)).current;
  const state = useRef(new Animated.Value(State.UNDETERMINED)).current;
  const gestureHandler = onGestureEvent({ translationY, state, velocityY });

  // const [animating, setAnimating] = useState(true);
  // const touchY = useRef(new Animated.Value(0)).current;
  // const onPanGestureEvent = Animated.event(
  //   [{ nativeEvent: { translationY: touchY } }],
  //   { useNativeDriver: true },
  // );

  // useEffect(() => {
  //   isVisible &&
  //     Animated.parallel([
  //       Animated.timing(overlayAnim, show),
  //       Animated.timing(cardAnim, show),
  //     ]).start(() => {
  //       setAnimating(false);
  //     });
  // }, [isVisible, overlayAnim, cardAnim]);

  // const handleRequestClose = (closedFromGesture?: boolean) => {
  //   // When closed from a pan gesture, we don't animate the card position.
  //   // Instead, just fade everything out. We need to prevent the translateY from
  //   // the PanResponder from being overwritten with the value from cardAnim.
  //   if (!closedFromGesture) {
  //     setAnimating(true);
  //   }

  //   Animated.parallel([
  //     Animated.timing(cardAnim, hide),
  //     Animated.timing(overlayAnim, hide),
  //   ]).start(() => {
  //     pan.setValue({ x: 0, y: 0 });
  //     pan.setOffset({ x: 0, y: 0 });
  //     pan.flattenOffset();
  //     onDismiss();
  //   });
  // };

  const overlayStyles = ({
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.background.overlay,
    opacity: overlayAnim,
  } as any) as ViewStyle;

  const modalStyles: ViewStyle = {
    margin: 0,
  };

  // const panResponder = useRef(
  //   PanResponder.create({
  //     onStartShouldSetPanResponder: () => true,
  //     onPanResponderMove: (e, gestureState) => {
  //       if (gestureState.dy <= 0) {
  //         // It can only be pulled down, not up
  //         return;
  //       }

  //       return Animated.event([null, { dy: pan.y }], {
  //         // PanResponder doesn't support native animations
  //         useNativeDriver: false,
  //       })(e, gestureState);
  //     },
  //     onPanResponderRelease: (_, gestureState) => {
  //       const distance = gestureState.dy;
  //       if (distance > DISMISSAL_DRAG_THRESHOLD) {
  //         return handleRequestClose(true);
  //       }

  //       // Reset the tray position
  //       Animated.timing(pan, {
  //         toValue: { x: 0, y: 0 },
  //         useNativeDriver: true,
  //         duration: 200,
  //         easing: Easing.ease,
  //       }).start();
  //     },
  //   }),
  // ).current;

  const cardStyles = ({
    ...useSpacing([4, 0, 10, 0]),
    backgroundColor: colors.background.default,
    borderTopLeftRadius: border.cardRadius * 2,
    borderTopRightRadius: border.cardRadius * 2,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    opacity: 1,
    transform: [
      {
        translateY: withSpring({
          state,
          velocity: velocityY,
          value: translationY,
          snapPoints: [0, DISMISSAL_DRAG_THRESHOLD],
        }),
      },
    ],
  } as any) as ViewStyle;

  return (
    <Modal
      useNativeDriver
      isVisible={isVisible}
      hasBackdrop={false}
      style={modalStyles}
      /* Doing my best to disable the built-in animations */
      hideModalContentWhileAnimating
      animationIn={{ from: { opacity: 1 }, to: { opacity: 1 } }}
      animationOut={{ from: { opacity: 1 }, to: { opacity: 1 } }}
      animationInTiming={1}
      animationOutTiming={1} // 0 makes it take an incredibly long time to hide
    >
      <Animated.View style={overlayStyles} />
      <PanGestureHandler {...gestureHandler}>
        <Animated.View style={cardStyles}>
          <Handle />
          {children}
        </Animated.View>
      </PanGestureHandler>
    </Modal>
  );
};
