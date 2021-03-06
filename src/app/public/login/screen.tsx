import React from 'react';
import { Image, Text, View } from 'react-native';
import { Icons } from '../../../assets/icons';
import { useTranslation } from '../../shared/i18n';
import { AppIconButton } from '../../shared/icon-button/component';
import { IconButtonTheme, IconName } from '../../shared/icon-button/enums';
import { AppScreen } from '../../shared/screen/component';
import { createStyles, variables } from '../../styles';

export function LoginScreen(): JSX.Element {
  const translate = useTranslation('PUBLIC.LOGIN');

  return (
    <AppScreen elementStyle={styles.screen}>
      <View style={styles.logoContainer}>
        <Icons.logo />
        <Text style={styles.title}>{translate('TITLE')}!</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../../../assets/images/login-foreground.png')}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <AppIconButton
          style={styles.button}
          iconName={IconName.GOOGLE}
          theme={IconButtonTheme.GOOGLE}
          title={translate('BUTTON_GOOGLE')}
        />
        <AppIconButton
          style={styles.button}
          iconName={IconName.APPLE}
          theme={IconButtonTheme.APPLE}
          title={translate('BUTTON_APPLE')}
        />
        <AppIconButton
          style={styles.button}
          iconName={IconName.FACEBOOK}
          theme={IconButtonTheme.FACEBOOK}
          title={translate('BUTTON_FACEBOOK')}
        />
      </View>
    </AppScreen>
  );
}

const styles = createStyles({
  screen: {
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  logoContainer: {
    paddingTop: 30,
    alignItems: 'center',
    paddingHorizontal: 22
  },
  title: {
    marginTop: 20,
    color: 'black',
    fontSize: 28,
    textAlign: 'center',
    fontFamily: variables.fontFamily.sfCompactSemiBold
  },
  iconButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: '25%',
    marginVertical: 10
  },
  image: {
    width: '100%',
    height: '100%'
  },
  buttonsContainer: {
    alignItems: 'center',
    paddingHorizontal: 22
  },
  button: {
    marginBottom: 16
  }
});
