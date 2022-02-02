import { DefaultTheme, NavigationContainerRef } from '@react-navigation/native';
import React from 'react';

export const navigationRef = React.createRef<NavigationContainerRef>();

export const navigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent'
  }
};
