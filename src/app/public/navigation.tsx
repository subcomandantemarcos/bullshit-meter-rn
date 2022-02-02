import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { LoginScreen } from './login/screen';

export type PublicNavigationParams = {
  Login: undefined;
};

const Stack = createStackNavigator<PublicNavigationParams>();

export function PublicNavigation(): JSX.Element {
  const initialRouteName = 'Login';

  return (
    <Stack.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name='Login'
        component={LoginScreen}
      />
    </Stack.Navigator>
  );
}
