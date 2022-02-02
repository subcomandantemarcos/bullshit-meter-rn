import { registerRootComponent } from 'expo';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { App } from './app';

export default function Root(): JSX.Element {
  return (
    <SafeAreaProvider>
      <App />
    </SafeAreaProvider>
  );
}

registerRootComponent(Root);
