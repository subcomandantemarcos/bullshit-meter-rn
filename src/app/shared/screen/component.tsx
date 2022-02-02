import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { createStyles, variables } from '../../styles';

export function AppScreen(props: {
  children?: React.ReactNode,
  elementStyle?: StyleProp<ViewStyle>
}): JSX.Element {
  const { children, elementStyle } = props;
  
  return (
    <View style={[styles.screen, elementStyle]}>
      { children }
    </View>
  );
}

const styles = createStyles({
  screen: {
    flex: 1,
    backgroundColor: variables.color.white
  }
});
