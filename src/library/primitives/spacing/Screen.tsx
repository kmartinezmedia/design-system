import React, { FunctionComponent } from 'react';
import { View, ViewProps } from './View';
import { gutter } from '@designSystem/theme';

export const Screen: FunctionComponent<ViewProps> = ({
  spacing = [0, gutter, 4],
  ...props
}) => <View {...props} spacing={spacing} />;

export { ViewProps as ScreenProps };
