import { DefaultTheme, NavigationContainerRef, NavigationState, Route } from '@react-navigation/native';
import React from 'react';

export const navigationRef = React.createRef<NavigationContainerRef>();

export const navigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent'
  }
};

class AppNavigationService {
  public get currentRoute(): Route<string> | undefined {
    return navigationRef.current?.getCurrentRoute();
  }

  public get currentState(): NavigationState | undefined {
    return navigationRef.current?.getRootState();
  }

  public goBack(): void {
    return navigationRef.current?.goBack();
  }

  public resetRoute(name: string, params: any = {}, index: number = 0): void {
    return navigationRef.current.reset({ index, routes: [{ name, params }] });
  }

  public resetToState(state: NavigationState): void {
    return navigationRef.current.reset(state);
  }
}

export const appNavigationService = new AppNavigationService();