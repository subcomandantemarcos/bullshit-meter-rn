import { StyleSheet, View } from 'react-native';
import { variables } from '../../styles/variables';

export function AppScreen(props: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <View style={styles.screen}>

    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: variables.color.white
  }
});