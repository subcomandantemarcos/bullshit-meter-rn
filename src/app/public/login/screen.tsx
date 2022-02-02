import React from 'react';
import { Image, Text, View } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { AppScreen } from '../../shared/screen/component';
import { Svg } from '../../shared/svg';
import { createStyles } from '../../styles';

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
      <View style={styles.footerScreen}>
        <TouchableHighlight>
          <View style={[styles.button, { backgroundColor: 'black' }]}>
            <Apple />
            <Text style={{ color: 'white', marginLeft: 10 }}>Continue with apple</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight>
          <View style={[styles.button, { backgroundColor: 'white', borderColor: '#518EF8', borderWidth: 2 }]}>
            <Google />
            <Text style={{ color: '#518EF8', marginLeft: 10 }}>Continue with apple</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight>
          <View style={[styles.button, { backgroundColor: '#1B6DD1' }]}>
            <Facebook />
            <Text style={{ color: 'white', marginLeft: 10 }}>Continue with apple</Text>
          </View>
        </TouchableHighlight>
      </View>
    </AppScreen>
  );
}

const styles = createStyles({
  screen: {
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  headerScreen: {
    marginTop: 30,
    alignItems: 'center'
  },
  mainScreen: {
    width: '100%',
    aspectRatio: 1 * 2.09
  },
  footerScreen: {
    marginBottom: 40,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  text: {
    color: 'black',
    fontSize: 28,
    textAlign: 'center'
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    minWidth: 330,
    marginVertical: 8,
    borderRadius: 15,
    paddingVertical: 16
  }
});
