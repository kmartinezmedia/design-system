import React from 'react';
import { Body, Button } from '@designSystem';

export default function Counter() {
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
}
