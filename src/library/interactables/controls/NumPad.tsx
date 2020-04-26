import React, { FunctionComponent, ReactNode } from 'react';
import { HStack, VStack, Title2, Icon } from '@designSystem/primitives';
import { IconButton } from '@designSystem/interactables';
import { TouchableWithoutFeedback } from 'react-native';
import { debounce } from '@utils/Events';

export type NumPadValue = number | 'SEPARATOR' | 'BACK';

interface Props {
  onPress: (value: NumPadValue) => void;
  onLongPress?: (value: NumPadValue) => void;
  separator?: string;
}

interface NumPadContentProps {
  onPress: () => void;
  onLongPress?: () => void;
  testID?: string;
}

const NumPad: FunctionComponent<Props> = ({
  onPress,
  onLongPress,
  separator = '.',
}) => {
  const buttonValues = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    'SEPARATOR',
    0,
    'BACK',
  ] as const;

  return (
    <HStack spacing={0} flexWrap="wrap">
      {buttonValues.map((value) => {
        let Component: FunctionComponent<NumPadContentProps>;
        let children: ReactNode;

        if (value === 'BACK') {
          Component = NumPadImage;
          children = <Icon size="large" name="close" />;
        } else if (value === 'SEPARATOR') {
          Component = NumPadText;
          children = separator;
        } else {
          Component = NumPadText;
          children = value;
        }

        return (
          <NumPadButton key={value}>
            <Component
              testID={`NumPad_${value}`}
              onPress={() => onPress(value)}
              onLongPress={() => onLongPress && onLongPress(value)}
            >
              {children}
            </Component>
          </NumPadButton>
        );
      })}
    </HStack>
  );
};

const NumPadButton: FunctionComponent = ({ children }) => {
  return (
    <VStack flexBasis="33.3333333%" height={76} justifyContent="center">
      {children}
    </VStack>
  );
};

const NumPadText: FunctionComponent<NumPadContentProps> = ({
  children,
  onPress,
  onLongPress,
  testID,
}) => {
  return (
    <TouchableWithoutFeedback
      onPress={debounce(onPress)}
      onLongPress={onLongPress}
      testID={testID}
    >
      <Title2 align="center" spacing={0}>
        {children}
      </Title2>
    </TouchableWithoutFeedback>
  );
};

const NumPadImage: FunctionComponent<NumPadContentProps> = ({
  children,
  onPress,
  onLongPress,
  testID,
}) => {
  return (
    <IconButton onPress={onPress} onLongPress={onLongPress} testID={testID}>
      {children}
    </IconButton>
  );
};

export { NumPad };
