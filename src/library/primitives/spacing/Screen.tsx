import React, { FunctionComponent } from 'react';
import { gutter } from '@designSystem/theme';

import { View, ViewProps } from './View';

export const Screen: FunctionComponent<ViewProps> = ({
  spacing = [0, gutter, 4],
  ...props
}) => <View {...props} spacing={spacing} />;

export type ScreenProps = ViewProps;
