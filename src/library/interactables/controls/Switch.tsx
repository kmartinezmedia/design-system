import React, { FunctionComponent } from 'react';
import { Switch as RNSwitch, SwitchProps } from 'react-native';
import { useTheme } from '@designSystem/theme';

export const Switch: FunctionComponent<SwitchProps> = (props) => {
  const { colors } = useTheme();

  return (
    <RNSwitch
      trackColor={{
        false: colors.onBackground.line,
        true: colors.onBackground.primary,
      }}
      {...props}
    />
  );
};

export { SwitchProps };
