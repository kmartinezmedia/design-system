import { useState, useEffect, useCallback } from 'react';
import { SplashScreen } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import { Image } from 'react-native';

interface Props {
  images?: Array<string | number>;
  fonts?: {
    [name: string]: number;
  };
}

interface AssetLoaderState {
  isLoadingAssets: boolean;
  startAsync?: () => Promise<void>;
  onError?: (error: Error) => void;
  onFinish?: () => void;
}

// https://docs.expo.io/versions/v35.0.0/guides/preloading-and-caching-assets/
export const useAssetLoader = (config: Props): AssetLoaderState => {
  const { images, fonts } = config || {};
  const [isLoadingAssets, setIsLoadingAssets] = useState<boolean>(true);

  useEffect(() => {
    SplashScreen.preventAutoHide();
  }, []);

  const loadResourcesRequest = useCallback(async () => {
    const requests: any[] = [];
    if (images) {
      requests.push(
        images.map((image) =>
          typeof image === 'string'
            ? Image.prefetch(image)
            : Asset.fromModule(image).downloadAsync(),
        ),
      );
    }

    if (fonts) {
      requests.push(Font.loadAsync(fonts));
    }

    return (Promise.all(requests) as any) as Promise<void>;
  }, [images, fonts]);

  return {
    isLoadingAssets,
    startAsync: loadResourcesRequest,
    onFinish: () => setIsLoadingAssets(false),
    onError: (error: Error) => {
      throw new Error(`Error loading resources: ${error.message}`);
    },
  };
};
