import React, { FunctionComponent } from 'react';

import { Text, TextProps } from './Text';

export const Link: FunctionComponent<TextProps> = React.memo(Text);

Link.displayName = 'Link';
Link.defaultProps = {
  color: 'primary',
};
