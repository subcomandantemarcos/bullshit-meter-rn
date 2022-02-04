import { registerRootComponent } from 'expo';
import { useFonts } from 'expo-font';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { App } from './app';

export default function Root(): JSX.Element {
  const [isFontLoaded] = useFonts({
    SFCompactNormal: require('../assets/fonts/SF-Compact-Rounded-Normal.ttf'),
    SFCompactSemiBold: require('../assets/fonts/SF-Compact-Rounded-Semi-Bold.ttf'),
    SFCompactBold: require('../assets/fonts/SF-Compact-Rounded-Bold.ttf')
  });

  if (!isFontLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <App />
    </SafeAreaProvider>
  );
}

registerRootComponent(Root);
