import React, { FunctionComponent } from 'react';
import { gutter } from '@designSystem/theme';
import { Spacing } from '@designSystem/types';

import { View, ViewProps } from './View';

const defaultSpacing = [0, gutter, 4];

export const Screen: FunctionComponent<ViewProps> = ({
  spacing = defaultSpacing,
  ...props
}) => <View {...props} spacing={spacing as Spacing} />;

export { ViewProps as ScreenProps };
