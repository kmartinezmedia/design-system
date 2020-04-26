import React, { FunctionComponent } from 'react';
import { Text, TextProps } from './Text';

const Link: FunctionComponent<TextProps> = ({
  children,
  color = 'primary',
  ...textProps
}) => (
  <Text color={color} {...textProps}>
    {children}
  </Text>
);

export { Link };
