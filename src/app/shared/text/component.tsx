import React from 'react';
import { StyleProp, Text, TextProps, TextStyle } from 'react-native';
import { TextTheme } from './enums';

export function AppText(
  props: {
    children?: React.ReactNode,
    theme?: TextTheme
  } & TextProps
): JSX.Element {
  const { theme, children, ...restProps } = props;
  const textStyle: StyleProp<TextStyle> = [];

  return (
    <Text
      style={textStyle}
      {...restProps}
    >
      { children }
    </Text>
  )
}