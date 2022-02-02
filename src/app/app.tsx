import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Localization from 'expo-localization';
import I18n from 'i18n-js';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { appLinking } from './linking';
import { PublicNavigation } from './public/navigation';
import { navigationRef, navigationTheme } from './shared/navigation';
import { createStyles, variables } from './styles';

const Stack = createStackNavigator();

export function App(): JSX.Element {
  I18n.translations = {
    en: require('./../assets/i18n/en.json')
  };

  const locale = Localization?.locale;
  I18n.locale = locale || 'en';

  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer
        linking={appLinking}
        theme={navigationTheme}
        ref={navigationRef}
      >
        <Stack.Navigator
          headerMode='screen'
          initialRouteName='Public'
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen
            name='Public'
            component={PublicNavigation}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = createStyles({
  screen: {
    flex: 1,
    backgroundColor: variables.color.white
  }
});
