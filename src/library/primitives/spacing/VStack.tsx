import React, { FunctionComponent } from 'react';

import { View, ViewProps } from './View';

export type VStackProps = ViewProps;
export const VStack: FunctionComponent<ViewProps> = React.memo(View);

VStack.displayName = 'VStack';
VStack.defaultProps = {
  spacing: 4,
};
