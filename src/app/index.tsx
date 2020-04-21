import React from 'react';
import { registerRootComponent } from 'expo';
import { StyleSheet, Text } from 'react-native';
import * as System from '@designSystem';
import {
  VStack,
  ThemeProvider,
  Body,
  Title1,
  Label,
  ListCell,
} from '@designSystem';

const components = Object.keys(System).filter(
  (name) =>
    typeof System[name] === 'function' &&
    !name.includes('use') &&
    !name.includes('with') &&
    name !== 'debounce',
);

if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const whyDidYouRender = require('@welldone-software/why-did-you-render');
  whyDidYouRender(React, {
    trackAllPureComponents: true,
  });
  components.map((item) => {
    System[item].displayName = item;
    System[item].whyDidYouRender = {
      logOnDifferentValues: true,
      customName: item,
    };
  });
}

export default function App() {
  return (
    <>
      <ThemeProvider>
        <Counter />
      </ThemeProvider>
    </>
  );
}

const names = ['Peter', 'Bruce', 'Clark'];

const Counter = () => {
  const [randomName, setRandomName] = React.useState(names[0]);
  const [count, setCount] = React.useState(0);
  const increment = React.useCallback(() => {
    setCount((c) => c + 1);
    setRandomName(names[Math.floor(Math.random() * names.length)]);
  }, [setCount]);
  return (
    <>
      <button onClick={increment}>The count is {count}</button>
      <Label>count</Label>
      <Title1>{count}</Title1>
      <Body>{randomName}</Body>
      <Body>Some body text that should only render once</Body>
      <ListCell title="Some title" />
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
      ].map((item) => (
        <PureItem item={item} />
      ))}
    </>
  );
};

const PureItem = React.memo(({ item }) => (
  <VStack>
    <Text>{item}</Text>
  </VStack>
));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

registerRootComponent(App);
