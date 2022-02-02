import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { createStyles, variables } from '../../styles';

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

const styles = createStyles({
  button: {
    borderRadius: 15,
    alignItems: 'center',
    borderWidth: 1,
    paddingVertical: 16
  },
  buttonPrimary: {
    backgroundColor: variables.color.primary,
    color: variables.color.white
  },
  buttonDisabled: {}
});