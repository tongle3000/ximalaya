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

const IconMore1: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M749.6 466.4l-384-384-91.2 91.2L613.6 512l-339.2 338.4 91.2 91.2 384-384 44.8-45.6z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconMore1.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconMore1) : IconMore1;
