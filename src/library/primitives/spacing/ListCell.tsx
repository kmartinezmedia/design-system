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
import { useAnalytics } from '@utils/analytics/useAnalytics';
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

const defaultSpacing = { vertical: 4, horizontal: gutter } as const;

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
  spacing = defaultSpacing,
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
            <Icon size="small" name="check" />
          </VStack>
        ) : null}
        {variant === 'action' ? (
          <VStack spacing={{ left: 4 }}>
            <Icon size="small" name="caretRight" color="muted" />
          </VStack>
        ) : null}
      </HStack>
    </TouchableWithoutFeedback>
  );
};
