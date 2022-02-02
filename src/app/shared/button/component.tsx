import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { createStyles, variables } from '../../styles';
import { AppText } from '../text/component';

export function AppButton(
  props: {
    title?: string,
    isOutlined?: boolean,
    isDisabled?: boolean,
    isLoading?: boolean
  } & TouchableOpacityProps
): JSX.Element {
  const { children, style: elementStyle = {}, isDisabled, isOutlined, isLoading, title, ...restProps } = props;

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={[
        elementStyle,
        styles.button,
        isDisabled && styles.buttonDisabled,
        isOutlined && styles.buttonOutline
      ]}
      disabled={isDisabled}
      {...restProps}
    >
      {children}
      <AppText>{title}</AppText>
    </TouchableOpacity>
  )
}

const styles = createStyles({
  button: {
    width: '100%',
    borderRadius: 15,
    alignItems: 'center',
    borderWidth: 1,
    paddingVertical: 16
  },
  buttonPrimary: {
    backgroundColor: variables.color.primary
  },
  buttonDisabled: {},
  buttonOutline: {
    backgroundColor: variables.color.white
  }
});

const textStyles = createStyles({
  text: {
    
  }
})