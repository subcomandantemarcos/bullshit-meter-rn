import React from 'react';
import { Image, Text, View } from 'react-native';
import { AppButton } from '../../shared/button';
import { AppScreen } from '../../shared/screen/component';
import { Svg } from '../../shared/svg';
import { createStyles, variables } from '../../styles';

export function LoginScreen(): JSX.Element {
  const Logo = Svg(require('../../../assets/images/logo.svg'));
  const Apple = Svg(require('../../../assets/images/apple.svg'));
  const Google = Svg(require('../../../assets/images/google.svg'));
  const Facebook = Svg(require('../../../assets/images/facebook.svg'));

  return (
    <AppScreen elementStyle={styles.screen}>
      <View style={styles.headerScreen}>
        <Logo />
        <Text style={[styles.text, { width: '80%' }]}>Stay informed about everything!</Text>
      </View>
      <View style={styles.mainScreen}>
        <Image style={{ minWidth: '100%', height: '100%', resizeMode: 'cover' }} source={require('../../../assets/images/login-foreground.png')} />
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton style={{ backgroundColor: 'black' }}>
          <View style={styles.iconButton}>
            <Apple />
            <Text style={{ color: 'white', marginLeft: 10, lineHeight: 22 }}>Continue with apple</Text>
          </View>
        </AppButton>
        <AppButton style={{ borderColor: variables.color.blue }} isOutlined>
          <View style={styles.iconButton}>
            <Google />
            <Text style={{ color: variables.color.blue, marginLeft: 10, lineHeight: 22 }}>Continue with google</Text>
          </View>
        </AppButton>
        <AppButton style={{ backgroundColor: variables.color.blueDark, borderColor: variables.color.blueDark }}>
          <View style={styles.iconButton}>
            <Facebook />
            <Text style={{ color: variables.color.white, marginLeft: 10, lineHeight: 22 }}>Continue with facebook</Text>
          </View>
        </AppButton>
      </View>
    </AppScreen>
  );
}

const styles = createStyles({
  screen: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: 22
  },
  iconButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerScreen: {
    marginTop: 30,
    alignItems: 'center'
  },
  mainScreen: {
    width: '100%',
    aspectRatio: 1 * 2.09
  },
  buttonsContainer: {
    marginBottom: 40,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  text: {
    color: 'black',
    fontSize: 28,
    textAlign: 'center'
  },
});
