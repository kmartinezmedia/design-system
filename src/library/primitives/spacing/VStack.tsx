import React, { FunctionComponent } from 'react';

import { View, ViewProps } from './View';

export const VStack: FunctionComponent<ViewProps> = ({
  spacing = 4,
  ...props
}) => <View {...props} spacing={spacing} />;

export type VStackProps = ViewProps;
