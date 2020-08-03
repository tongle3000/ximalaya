/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

const IconFaxian: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 116.363636A395.636364 395.636364 0 1 1 116.363636 512 395.636364 395.636364 0 0 1 512 116.363636m0-69.818181a465.454545 465.454545 0 1 0 465.454545 465.454545A465.454545 465.454545 0 0 0 512 46.545455z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M648.843636 375.156364l-51.432727 205.265454a23.272727 23.272727 0 0 1-16.989091 16.989091l-205.265454 51.432727 51.432727-205.265454a23.272727 23.272727 0 0 1 16.989091-16.989091l205.265454-51.432727m64-87.272728h-5.818181l-279.272728 69.818182a93.090909 93.090909 0 0 0-67.723636 67.723637l-69.818182 280.436363a23.272727 23.272727 0 0 0 23.272727 29.090909h5.818182l280.436364-69.818182a93.090909 93.090909 0 0 0 67.723636-67.723636l69.818182-280.436364a23.272727 23.272727 0 0 0-23.272727-29.090909z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <Path
        d="M512 477.090909a34.909091 34.909091 0 1 0 34.909091 34.909091 34.909091 34.909091 0 0 0-34.909091-34.909091z"
        fill={getIconColor(color, 2, '#333333')}
      />
    </Svg>
  );
};

IconFaxian.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconFaxian) : IconFaxian;
