import React from 'react';
import { Body, TextInput } from '@designSystem';

export const PerformanceTest = () => {
  const [inputValue, setInputValue] = React.useState('');
  const handleOnChange = React.useCallback((e) => {
    setInputValue(e.target.value);
  }, []);

  return (
    <>
      <TextInput value={inputValue} onChange={handleOnChange} />
      {Array.from({ length: 250 }).map((_, i) => (
        <Body key={i}>This is some text</Body>
      ))}
    </>
  );
};
