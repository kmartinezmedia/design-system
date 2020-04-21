import React, { FunctionComponent } from 'react';
import { View, ViewProps, StyleSheet } from 'react-native';

export const Spacer: FunctionComponent<ViewProps> = React.memo(View);

const styles = StyleSheet.create({
  spacer: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 'auto',
  },
});

Spacer.displayName = 'Spacer';
Spacer.defaultProps = {
  style: styles.spacer,
};
