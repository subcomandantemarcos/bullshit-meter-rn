import React from 'react';
import { ImageStyle, Platform } from 'react-native';
import { SvgRequire } from './types';

type Props = {
  width?: number | string;
  height?: number | string;
  style?: ImageStyle;
  fill?: string;
  color?: string;
  stroke?: string;
};

export const Svg = (SvgElement?: SvgRequire) => {
  return function Component(props: Props = {}): JSX.Element {
    if (Platform.OS === 'web') {
      return <img
        {...SvgElement.props}
        {...props}
        src={SvgElement}
        alt='' />;
    }

    return <SvgElement.default
      {...SvgElement.props}
      {...props} />;
  };
};
