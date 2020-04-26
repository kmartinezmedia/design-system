import React, { FunctionComponent } from 'react';
import { View, ViewProps, StyleSheet } from 'react-native';

export const Spacer: FunctionComponent<ViewProps> = (props) => (
  <View {...props} style={styles.Spacer} />
);

const styles = StyleSheet.create({
  Spacer: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 'auto',
  },
});
