import { useMemo } from 'react';
import { ElevationLevels } from '@designSystem/types';

const elevationLevels: { [key in ElevationLevels]: number } = {
  1: 1,
  2: 16,
};

export const useElevation = (elevation?: ElevationLevels) => {
  return useMemo(
    () =>
      elevation !== undefined
        ? {
            elevation: elevationLevels[elevation],
          }
        : undefined,
    [elevation],
  );
};
