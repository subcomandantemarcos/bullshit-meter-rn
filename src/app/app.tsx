import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Localization from 'expo-localization';
import I18n from 'i18n-js';
import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { appLinking } from './linking';
import { PublicNavigation } from './public/navigation';
import { navigationRef, navigationTheme } from './shared/navigation';
import { AppActions, store } from './shared/store';
import { createStyles, variables } from './styles';

const Stack = createStackNavigator();

export function App(): JSX.Element {
  I18n.translations = {
    en: require('./../assets/i18n/en.json'),
    'ru-RU': require('./../assets/i18n/ru.json')
  };

  const locale = Localization.locale;
  I18n.locale = locale || 'en';
  I18n.fallbacks = true;

  useEffect(() => {
    store.dispatch(AppActions.init());
  }, []);

  return (
    <SafeAreaView style={styles.screen}>
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
