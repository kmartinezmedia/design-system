import React from 'react';
import { Title1, Label } from '@designSystem/primitives/typography';
import { VStack } from '@designSystem/primitives/spacing';

import { glyphMap } from './glyphMap';
import { Icon } from './Icon';

export const IconExample = () => {
  return (
    <VStack spacing={0}>
      <Title1>Icons</Title1>
      {Object.keys(glyphMap).map((name) => (
        <VStack key={name} spacing={{ vertical: 3 }}>
          <Label>{name}</Label>
          <Icon name={name as keyof typeof glyphMap} />
        </VStack>
      ))}
    </VStack>
  );
};
