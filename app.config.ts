import { ExpoConfig } from '@expo/config';

export const defaultAppConfig = {
  production: false
};

const defaultExpoConfig: ExpoConfig = {
  name: 'Bullshit Meter',
  description: 'It\'s a News Site',
  entryPoint: './src/app/index.tsx',
  slug: 'bullshit-meter-rn',
  owner: 'Sergey Zheleshchenko',
  privacy: 'hidden',
  platforms: ['android'],
  githubUrl: 'https://github.com/subcomandantemarcos/bullshit-meter-rn',
  orientation: 'portrait',
  icon: './assets/icon.png',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff'
  },
  updates: {
    fallbackToCacheTimeout: 0
  },
  assetBundlePatterns: [
    '**/*'
  ],
  ios: {
    'supportsTablet': true
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#FFFFFF'
    }
  },
  web: {
    favicon: './assets/favicon.png'
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

