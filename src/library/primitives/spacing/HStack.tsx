import React, { FunctionComponent } from 'react';

import { View, ViewProps } from './View';

export type HStackProps = ViewProps;
export const HStack: FunctionComponent<ViewProps> = React.memo(View);

HStack.displayName = 'HStack';
HStack.defaultProps = {
  spacing: 4,
  flexDirection: 'row',
};
