import React, { FunctionComponent, ReactNode } from 'react';
import {
  HStack,
  VStack,
  HStackProps,
  Caption,
  Body,
  Icon,
} from '@designSystem/primitives';
import { noop } from 'lodash';
import { TouchableWithoutFeedback } from 'react-native';
import { GestureResponderEvent } from 'react-native';
import { useAnalytics } from '@designSystem/utils';
import { gutter } from '@designSystem/theme';

export interface ListCellProps extends Omit<HStackProps, 'onPress'> {
  name?: string;
  icon?: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
  value?: ReactNode;
  tertiary?: ReactNode;
  ellipsize?: 'fade' | 'tail';
  variant?: 'static' | 'action';
  marker?: 'checked';
  onPress?: (event: GestureResponderEvent) => void;
}

export const ListCell: FunctionComponent<ListCellProps> = ({
  ellipsize = 'tail',
  variant = 'static',
  onPress = noop,
  name,
  icon,
  title,
  subtitle,
  value,
  tertiary,
  marker,
  children,
  spacing = { vertical: 4, horizontal: gutter },
  ...props
}) => {
  const { tapped } = useAnalytics();

  const handlePress = (event: GestureResponderEvent) => {
    tapped(name);
    onPress(event);
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <HStack spacing={spacing} alignItems="center" {...props}>
        {icon}
        <VStack
          spacing={icon ? { horizontal: 4 } : 0}
          flexGrow={1}
          flexShrink={1}
          overflow={ellipsize === 'fade' ? 'gradient' : undefined}
        >
          <Body
            ellipsize={ellipsize === 'fade' ? 'clip' : ellipsize}
            spacing={0}
          >
            {title}
          </Body>
          {subtitle ? (
            <Caption ellipsize={ellipsize === 'fade' ? 'clip' : ellipsize}>
              {subtitle}
            </Caption>
          ) : null}
        </VStack>
        {children}
        {value ? (
          <VStack spacing={0} alignItems="flex-end" minWidth="20%">
            <Body spacing={0}>{value}</Body>
            {tertiary ? <Caption>{tertiary}</Caption> : null}
          </VStack>
        ) : null}
        {marker === 'checked' ? (
          <VStack spacing={{ left: 4 }}>
            <Icon name="checkmarkFilled" />
          </VStack>
        ) : null}
        {variant === 'action' ? (
          <VStack spacing={{ left: 4 }}>
            <Icon name="chevron" />
          </VStack>
        ) : null}
      </HStack>
    </TouchableWithoutFeedback>
  );
};
