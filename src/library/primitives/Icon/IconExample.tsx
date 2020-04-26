import React from 'react';
import { Title1, Label } from '@designSystem/primitives/typography';
import { VStack } from '@designSystem/primitives/spacing';

import {
  glyphMapLarge,
  glyphMapMedium,
  glyphMapSmall,
} from '@designSystem/assets/icons';
import { Icon } from './Icon';

export const IconExample = () => {
  return (
    <VStack spacing={0}>
      <Title1>Icons</Title1>
      {Object.keys(glyphMapLarge).map((name) => (
        <VStack key={name} spacing={{ vertical: 3 }}>
          <Label>{name}</Label>
          <Icon size="large" name={name as keyof typeof glyphMapLarge} />
        </VStack>
      ))}
      {Object.keys(glyphMapMedium).map((name) => (
        <VStack key={name} spacing={{ vertical: 3 }}>
          <Label>{name}</Label>
          <Icon size="medium" name={name as keyof typeof glyphMapMedium} />
        </VStack>
      ))}
      {Object.keys(glyphMapSmall).map((name) => (
        <VStack key={name} spacing={{ vertical: 3 }}>
          <Label>{name}</Label>
          <Icon size="small" name={name as keyof typeof glyphMapSmall} />
        </VStack>
      ))}
    </VStack>
  );
};
