import React, { FunctionComponent } from 'react';
import { Text, TextProps, StyleSheet } from 'react-native';

const Number: FunctionComponent<TextProps> = ({ children }) => (
  <Text style={styles.number}>{children}</Text>
);

const styles = StyleSheet.create({
  number: {
    fontVariant: ['tabular-nums'],
  },
});

export { Number };
