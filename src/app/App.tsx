import React from 'react';
import * as System from '@designSystem';
import { registerRootComponent } from 'expo';
import { Platform } from 'react-native';
import { VStack, ThemeProvider, Body, Button } from '@designSystem';

// const components = Object.keys(System).filter(
//   (name) =>
//     typeof System[name] === 'function' &&
//     !name.includes('use') &&
//     !name.includes('with') &&
//     name !== 'debounce',
// );

if (process.env.NODE_ENV !== 'production' && Platform.OS === 'web') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const whyDidYouRender = require('@welldone-software/why-did-you-render');
  whyDidYouRender(React, {
    trackAllPureComponents: true,
  });
  Object.keys(System).forEach((item) => {
    if (typeof System[item] === 'function') {
      System[item].displayName = item;
      System[item].whyDidYouRender = {
        logOnDifferentValues: true,
        customName: item,
      };
    }
  });
}

function App() {
  return (
    <VStack>
      <ThemeProvider>
        <Counter />
      </ThemeProvider>
    </VStack>
  );
}

const Counter = () => {
  const [count, setCount] = React.useState(0);
  const increment = React.useCallback(() => {
    setCount((c) => c + 1);
  }, [setCount]);
  return (
    <>
      <Button onClick={increment}>Click me</Button>
      <Body>Some body text that should only render once</Body>
    </>
  );
};

registerRootComponent(App);

// const AllExports = () => {
//   return Object.keys(System).map((name) => <Body>{name}</Body>);
// };
