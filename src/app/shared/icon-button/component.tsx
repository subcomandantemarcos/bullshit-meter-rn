import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Icons } from '../../../assets/icons';
import { createStyles, variables } from '../../styles';
import { AppText } from '../text/component';
import { IconButtonTheme, IconName } from './enums';

export function AppIconButton(
  props: {
    title?: string,
    iconName?: IconName,
    theme?: IconButtonTheme
    isDisabled?: boolean
  } & TouchableOpacityProps
): JSX.Element {
  const { style: elementStyle = {}, title, iconName, theme, isDisabled, ...restProps } = props;
  const Icon = Icons[iconName];

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={[
        styles.button,
        styles.buttonPrimary,
        isDisabled && styles.buttonDisabled,
        elementStyle,
        styles[theme]
      ]}
      disabled={isDisabled}
      {...restProps}
    >
      <Icon />
      {title && <AppText
        style={[
          textStyles.text,
          textStyles[theme]
        ]}>
        {title}
      </AppText>}
    </TouchableOpacity>
  );
}

const styles = createStyles({
  button: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderWidth: 1,
    borderRadius: 15
  },
  buttonPrimary: {
    backgroundColor: variables.color.primary,
    borderColor: variables.color.primary
  },
  buttonDisabled: {
    opacity: 0.6
  },
  google: {
    backgroundColor: variables.color.white,
    borderColor: variables.color.blue
  },
  apple: {
    backgroundColor: variables.color.black,
    borderColor: variables.color.black
  },
  facebook: {
    backgroundColor: variables.color.blueDark,
    borderColor: variables.color.blueDark
  }
});

const textStyles = createStyles({
  text: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    textAlignVertical: 'center',
    lineHeight: 22,
    marginLeft: 10
  },
  google: {
    color: variables.color.blue
  },
  facebook: {},
  apple: {}
});
