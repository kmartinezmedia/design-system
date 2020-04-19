import React, { FC } from 'react';
import { View, ViewProps, StyleSheet } from 'react-native';
import { useTheme } from '@designSystem/theme';

export const Divider: FC<ViewProps> = (props) => {
  const { colors } = useTheme();
  return (
    <View
      style={{ ...styles.divider, backgroundColor: colors.onBackground.line }}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  divider: {
    height: 1,
    width: '100%',
  },
});
