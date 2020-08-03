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

const IconZiyuan: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1026 1024" width={size} height={size} {...rest}>
      <Path
        d="M511.996235 68.456224A443.547541 443.547541 0 1 1 68.448695 512.003765 444.232028 444.232028 0 0 1 511.996235 68.456224m0-68.448695A511.996235 511.996235 0 1 0 1026.730418 512.003765 511.996235 511.996235 0 0 0 511.996235 0.007529z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M515.41867 198.508744a100.619581 100.619581 0 1 1-100.619581 100.619581A100.619581 100.619581 0 0 1 515.41867 198.508744m0-68.448695A169.068276 169.068276 0 1 0 684.486946 299.128325 169.068276 169.068276 0 0 0 515.41867 130.060049z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <Path
        d="M144.426746 811.12456a39.015756 39.015756 0 0 1-15.058713 0 34.224347 34.224347 0 0 1-15.7432-45.860625 444.916515 444.916515 0 0 1 802.2187 0 34.224347 34.224347 0 0 1-61.603825 30.117425 374.414359 374.414359 0 0 0-338.821038-217.666849 379.205768 379.205768 0 0 0-342.243473 214.244414 33.53986 33.53986 0 0 1-28.748451 19.165635z"
        fill={getIconColor(color, 2, '#333333')}
      />
    </Svg>
  );
};

IconZiyuan.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconZiyuan) : IconZiyuan;
