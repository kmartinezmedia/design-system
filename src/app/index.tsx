import React from 'react';
import { registerRootComponent } from 'expo';
import { StyleSheet, View } from 'react-native';
import * as System from '@designSystem';
import { ThemeProvider, Title1 } from '@designSystem';

export default function App() {
  return (
    <ThemeProvider>
      <Title1>akjsdfklajsdf</Title1>
      <View style={styles.container}>
        {Object.keys(System).map((item) => (
          <Title1 key={item}>{item}</Title1>
        ))}
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

registerRootComponent(App);
