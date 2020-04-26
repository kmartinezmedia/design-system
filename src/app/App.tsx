import React from 'react';
import { registerRootComponent, AppLoading } from 'expo';
import { VStack, ThemeProvider, Screen, Button } from '@designSystem';
import { useAssetLoader } from '@app/hooks';
import { fonts } from '@designSystem/assets';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';

console.disableYellowBox = true;

const App = () => {
  const { isLoadingAssets, ...callbackFns } = useAssetLoader({
    fonts: fonts,
  });

  return (
    <SafeAreaProvider>
      {isLoadingAssets ? <AppLoading {...callbackFns} /> : <AppContent />}
    </SafeAreaProvider>
  );
};

const AppContent = () => {
  return (
    <ScrollView>
      <Screen spacing={{ top: 10 }}>
        <VStack>
          <ThemeProvider>
            <Button>Button</Button>
          </ThemeProvider>
        </VStack>
      </Screen>
    </ScrollView>
  );
};

registerRootComponent(App);
