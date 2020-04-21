import React from 'react';
import { registerRootComponent, AppLoading } from 'expo';
import { VStack, ThemeProvider, Screen } from '@designSystem';
import useAssetLoader from '@app/hooks/useAssetLoader';
import { fonts } from '@designSystem/assets';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Animation1 from '@app/screens/Animation1';
import Counter from '@app/screens/Counter';
import Docs from '@app/screens/Docs';
import initPerf from '@app/utils/initPerf';
import { ScrollView } from 'react-native-gesture-handler';

initPerf(false);

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
      <Screen>
        <VStack>
          <ThemeProvider>
            <Animation1 />
            <Counter />
            <Docs />
          </ThemeProvider>
        </VStack>
      </Screen>
    </ScrollView>
  );
};

registerRootComponent(App);
