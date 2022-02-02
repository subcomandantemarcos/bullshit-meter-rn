import { ExpoConfig } from '@expo/config';

export const defaultAppConfig = {
  production: false
};

const defaultExpoConfig: ExpoConfig = {
  name: 'Bullshit Meter',
  description: 'It\'s a News Site',
  entryPoint: './src/app/index.tsx',
  slug: 'bullshit-meter-rn',
  scheme: 'myapp',
  owner: 'Sergey Zheleshchenko',
  privacy: 'hidden',
  platforms: ['android'],
  githubUrl: 'https://github.com/subcomandantemarcos/bullshit-meter-rn',
  orientation: 'portrait',
  icon: './src/assets/images/icon.png',
  splash: {
    image: './src/assets/images/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff'
  },
  updates: {
    fallbackToCacheTimeout: 0
  },
  assetBundlePatterns: ['./src/assets/images/*', './src/assets/fonts/*', './src/assets/i18n/*'],
  ios: {
    'supportsTablet': true
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './src/assets/images/adaptive-icon.png',
      backgroundColor: '#FFFFFF'
    }
  },
  web: {
    favicon: './src/assets/images/favicon.png'
  },
  packagerOpts: {
    config: 'metro.config.js',
    sourceExts: ['ts', 'tsx', 'js', 'jsx', 'json', 'wasm', 'svg']
  },
  extra: defaultAppConfig
}

module.exports = () => {
  if (process.env.APP_ENV === 'production') {
    return defaultExpoConfig;
  } else {
    return {
      ...defaultExpoConfig,
      extra: defaultAppConfig
    }
  }
};

