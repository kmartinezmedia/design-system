import React from 'react';
import * as DesignSystem from '@designSystem';

export function Typography() {
  return (
    <>
      {[
        'LargeTitle',
        'Title1',
        'Title2',
        'Title3',
        'Headline',
        'Body',
        'Label',
        'Caption',
        'Link',
      ].map((name) => {
        const Component = DesignSystem[name];
        return <Component key={name}>{name}</Component>;
      })}
    </>
  );
}
