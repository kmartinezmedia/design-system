import { Animated } from 'react-native';

// This is in its own file so we can mock it in tests so it doesn't break them
export const DangerousAnimatedScrollView = Animated.ScrollView as any;
