import React, { useEffect, useState, useRef } from 'react';
import {
  ViewStyle,
  StyleSheet,
  Animated,
  View,
  PanResponder,
  Easing,
  GestureResponderEvent,
  PanResponderGestureState,
} from 'react-native';
import Modal from 'react-native-modal';
import { noop } from 'lodash';
import { useTheme, border, spacing, animations } from '@designSystem/theme';

// Dragging the handle down by more than this distance will dismiss the Tray
const DISMISSAL_DRAG_THRESHOLD = 150;

interface TrayProps {
  onDismiss: () => void;
  isVisible: boolean;
  isSwipeable?: boolean;
}

export const Tray: React.FunctionComponent<TrayProps> = ({
  children,
  onDismiss,
  isVisible,
  isSwipeable = true,
}) => {
  const { colors } = useTheme();
  const pan = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  const [animation] = useState(new Animated.Value(0));
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    isVisible &&
      Animated.spring(animation, animations.slideIn).start(() => {
        setAnimating(false);
      });
  }, [isVisible, animation]);

  const handleRequestClose = (closedFromGesture?: boolean) => {
    // When closed from a pan gesture, we don't animate the card position.
    // Instead, just fade everything out. We need to prevent the translateY from
    // the PanResponder from being overwritten with the value from cardAnim.
    if (!closedFromGesture) {
      setAnimating(true);
    }

    Animated.spring(animation, animations.slideOut).start(() => {
      pan.setValue({ x: 0, y: 0 });
      pan.setOffset({ x: 0, y: 0 });
      pan.flattenOffset();
      onDismiss();
    });
  };

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: shouldCaptureGestures,
      onMoveShouldSetPanResponderCapture: shouldCaptureGestures,
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
    backgroundColor: colors.background.default,
    opacity: animation,
    transform: [
      {
        translateY: animating
          ? animation.interpolate({
              inputRange: [0, 1],
              outputRange: [100, 0],
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
      style={styles.modal}
      /* Doing my best to disable the built-in animations */
      hideModalContentWhileAnimating
      animationIn={{ from: { opacity: 1 }, to: { opacity: 1 } }}
      animationOut={{ from: { opacity: 1 }, to: { opacity: 1 } }}
      animationInTiming={1}
      animationOutTiming={1} // 0 makes it take an incredibly long time to hide
      onBackButtonPress={() => handleRequestClose()}>
      <Animated.View
        style={[
          styles.overlay,
          {
            backgroundColor: colors.background.overlay,
            opacity: animation,
          },
        ]}
        onTouchStart={isSwipeable ? () => handleRequestClose() : noop}
      />
      <Animated.View
        style={[styles.card, cardStyles]}
        {...(isSwipeable ? panResponder.panHandlers : {})}>
        {isSwipeable && (
          <View style={styles.handleTouchableArea}>
            <View
              style={[
                styles.handleBar,
                { backgroundColor: colors.onBackground.line },
              ]}
            />
          </View>
        )}
        {children}
      </Animated.View>
    </Modal>
  );
};

function shouldCaptureGestures(
  _: GestureResponderEvent,
  { dx, dy }: PanResponderGestureState,
) {
  return dx > 2 || dx < -2 || dy > 2 || dy < -2;
}

const styles = StyleSheet.create({
  overlay: StyleSheet.absoluteFillObject,
  handleTouchableArea: {
    position: 'absolute',
    top: -60,
    height: 60,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  handleBar: {
    marginBottom: spacing[3],
    width: 64,
    height: 4,
    borderRadius: 4,
  },
  card: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopLeftRadius: border.cardRadius * 2,
    borderTopRightRadius: border.cardRadius * 2,
    paddingTop: spacing[4],
    paddingBottom: spacing[10],
  },
  modal: {
    margin: 0,
  },
});
