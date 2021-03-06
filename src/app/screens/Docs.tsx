import React from 'react';
import * as DesignSystem from '@designSystem';

export function Docs() {
  return (
    <>
      {Object.keys(DesignSystem).map((name) => (
        <DesignSystem.Body key={name}>{name}</DesignSystem.Body>
      ))}
    </>
  );
}
