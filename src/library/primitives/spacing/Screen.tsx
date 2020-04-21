import React, { FunctionComponent } from 'react';
import { gutter } from '@designSystem/theme';

import { View, ViewProps } from './View';

export type ScreenProps = ViewProps;
export const Screen: FunctionComponent<ViewProps> = React.memo(View);

Screen.displayName = 'Screen';
Screen.defaultProps = {
  spacing: [0, gutter, 4],
  flexDirection: 'row',
};
