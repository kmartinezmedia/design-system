import React from 'react';
import * as System from '@designSystem';
import { Platform } from 'react-native';
type DS = typeof System;
type DSExport = keyof DS;
const dsExports = Object.keys(System) as DSExport[];

export default function initPerf(forceLog = false) {
  if (
    forceLog ||
    (process.env.NODE_ENV !== 'production' && Platform.OS === 'web')
  ) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const whyDidYouRender = require('@welldone-software/why-did-you-render');
    whyDidYouRender(React, {
      trackAllPureComponents: true,
    });
    dsExports.forEach((item) => {
      if (typeof System[item] === 'function') {
        System[item].displayName = item;
        System[item].whyDidYouRender = {
          logOnDifferentValues: true,
          customName: item,
        };
      }
    });
  }
}
