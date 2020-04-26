import React, { FunctionComponent } from 'react';
import { View, ViewProps } from './View';

export const HStack: FunctionComponent<ViewProps> = ({
  spacing = 4,
  ...props
}) => <View {...props} spacing={spacing} flexDirection="row" />;

export { ViewProps as HStackProps };
