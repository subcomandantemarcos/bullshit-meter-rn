import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export function App(): JSX.Element {
  return (
    <SafeAreaView>
      <View>
        <Text>Привет!</Text>
      </View>
    </SafeAreaView>
  );
}
