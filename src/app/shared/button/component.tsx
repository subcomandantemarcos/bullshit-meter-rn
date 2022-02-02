import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

export function AppButton(
  props: {
    title?: string
  } & TouchableOpacityProps
): JSX.Element {
  const { children, style: elementStyle = {}, title, ...restProps } = props;

  return (
    <TouchableOpacity
      {...restProps}
    >
      {children}
    </TouchableOpacity>
  )
}
