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

const IconZiyuan1: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 650.497842a176.805755 176.805755 0 0 0 176.805755-176.805756V176.805755a176.805755 176.805755 0 0 0-353.61151 0v296.886331a176.805755 176.805755 0 0 0 176.805755 176.805756zM394.129496 176.805755a117.870504 117.870504 0 0 1 235.741008 0v296.886331a117.870504 117.870504 0 1 1-235.741008 0z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M806.676259 443.708777a29.467626 29.467626 0 0 0-29.467626 29.467626v7.366906c0 142.844317-118.97554 259.094101-265.208633 259.094101s-265.208633-116.249784-265.208633-259.094101v-7.366906a29.467626 29.467626 0 0 0-58.935252 0v7.366906c0 165.018705 128.773525 301.011799 292.834532 316.776979V965.064748H364.661871a29.467626 29.467626 0 0 0 0 58.935252h294.676258a29.467626 29.467626 0 0 0 0-58.935252H539.625899v-167.891798c165.829065-13.776115 296.517986-150.579568 296.517986-316.776979v-7.366906a29.467626 29.467626 0 0 0-29.467626-29.320288z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconZiyuan1.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconZiyuan1) : IconZiyuan1;
