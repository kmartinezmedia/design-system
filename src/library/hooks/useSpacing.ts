import { SpacingScale, SpacingDirection } from '@designSystem/types';
import { spacing as spacingConstants } from '@designSystem/theme';
import { isPlainObject, capitalize } from 'lodash';

export const useSpacing = (
  spacing?:
    | { [key in SpacingDirection]?: SpacingScale }
    | SpacingScale[]
    | SpacingScale,
) => {
  const styles = {};

  if (!spacing) {
    return undefined;
  }

  const setSpacing = (
    direction: SpacingDirection | '',
    value: number | string,
  ) => {
    const variant =
      /-/.test(value.toString()) || value < 0 ? 'margin' : 'padding';
    const propName = `${variant}${capitalize(direction)}`;

    const spacingKey =
      typeof value === 'number' && Number.isInteger(value)
        ? Math.abs(value)
        : value.toString().replace(/-/, '');

    const spacingValue = (spacingConstants as any)[spacingKey];
    const offset = (variant === 'margin' ? -1 : 1) * spacingValue;

    (styles as any)[propName] = offset;
  };

  if (isPlainObject(spacing)) {
    Object.keys(spacing).forEach((direction: SpacingDirection) =>
      setSpacing(
        direction,
        (spacing as { [key in SpacingDirection]?: SpacingScale })[
          direction
        ] as number,
      ),
    );
  } else if (Array.isArray(spacing)) {
    switch (spacing.length) {
      case 4:
        setSpacing('top', spacing[0] as number);
        setSpacing('right', spacing[1] as number);
        setSpacing('bottom', spacing[2] as number);
        setSpacing('left', spacing[3] as number);
        break;
      case 3:
        setSpacing('top', spacing[0] as number);
        setSpacing('horizontal', spacing[1] as number);
        setSpacing('bottom', spacing[2] as number);
        break;
      case 2:
        setSpacing('vertical', spacing[0] as number);
        setSpacing('horizontal', spacing[1] as number);
        break;
      case 1:
        setSpacing('', spacing[0] as number);
        break;
    }
  } else {
    setSpacing('', spacing as string);
  }

  return styles;
};
