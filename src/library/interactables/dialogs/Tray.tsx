import React, { useEffect, useState, useRef, ReactNode } from 'react';
import {
  ViewStyle,
  StyleSheet,
  Animated,
  View,
  PanResponder,
  Easing,
} from 'react-native';
import Modal from 'react-native-modal';
import { useTheme, border } from '@designSystem/theme';
import { useSpacing } from '@designSystem/hooks/useSpacing';

// Dragging the handle down by more than this distance will dismiss the Tray
const DISMISSAL_DRAG_THRESHOLD = 150;

const Handle: React.FunctionComponent = () => {
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
export const Tray: React.FunctionComponent<TrayProps> = ({
  children,
  onDismiss,
  isVisible,
}) => {
  const { colors } = useTheme();
  const [cardAnim] = useState(new Animated.Value(0));
  const [overlayAnim] = useState(new Animated.Value(0));
  const pan = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    isVisible &&
      Animated.parallel([
        Animated.timing(overlayAnim, show),
        Animated.timing(cardAnim, show),
      ]).start(() => {
        setAnimating(false);
      });
  }, [isVisible, overlayAnim, cardAnim]);

  const handleRequestClose = (closedFromGesture?: boolean) => {
    // When closed from a pan gesture, we don't animate the card position.
    // Instead, just fade everything out. We need to prevent the translateY from
    // the PanResponder from being overwritten with the value from cardAnim.
    if (!closedFromGesture) {
      setAnimating(true);
    }

    Animated.parallel([
      Animated.timing(cardAnim, hide),
      Animated.timing(overlayAnim, hide),
    ]).start(() => {
      pan.setValue({ x: 0, y: 0 });
      pan.setOffset({ x: 0, y: 0 });
      pan.flattenOffset();
      onDismiss();
    });
  };

  const overlayStyles = ({
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.background.overlay,
    opacity: overlayAnim,
  } as any) as ViewStyle;

  const modalStyles: ViewStyle = {
    margin: 0,
  };

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (e, gestureState) => {
        if (gestureState.dy <= 0) {
          // It can only be pulled down, not up
          return;
        }

        return Animated.event([null, { dy: pan.y }], {
          // PanResponder doesn't support native animations
          useNativeDriver: false,
        })(e, gestureState);
      },
      onPanResponderRelease: (_, gestureState) => {
        const distance = gestureState.dy;
        if (distance > DISMISSAL_DRAG_THRESHOLD) {
          return handleRequestClose(true);
        }

        // Reset the tray position
        Animated.timing(pan, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: true,
          duration: 200,
          easing: Easing.ease,
        }).start();
      },
    }),
  ).current;

  const cardStyles = ({
    ...useSpacing([4, 0, 10, 0]),
    backgroundColor: colors.background.default,
    borderTopLeftRadius: border.cardRadius * 2,
    borderTopRightRadius: border.cardRadius * 2,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    opacity: cardAnim,
    transform: [
      {
        translateY: animating
          ? cardAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [200, 0],
            })
          : pan.y,
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
      onBackButtonPress={() => handleRequestClose()}
    >
      <Animated.View
        style={overlayStyles}
        onStartShouldSetResponder={() => true}
        onResponderEnd={() => handleRequestClose()}
      />
      <Animated.View style={cardStyles} {...panResponder.panHandlers}>
        <Handle />
        {children}
      </Animated.View>
    </Modal>
  );
};
