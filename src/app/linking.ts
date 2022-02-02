import { getStateFromPath, LinkingOptions, PathConfig } from '@react-navigation/native';
import * as Linking from 'expo-linking';
import { PublicNavigationParams } from './public/navigation';

type ScreenLinkingOptions = Parameters<typeof getStateFromPath>[1];

type ScreenRoutingOptions<T extends Object> = {
  [key in keyof T]?: string | ScreenLinkingOptions| PathConfig
};

const appLink = Linking.makeUrl('/');

export const appLinking: LinkingOptions = {
  prefixes: [appLink],
  config: {
    screens: {
      Public: {
        initialRouteName: 'Signup',
        screens: <ScreenRoutingOptions<PublicNavigationParams>>{
          Login: 'login'
        }
      }
    }
  }
};
