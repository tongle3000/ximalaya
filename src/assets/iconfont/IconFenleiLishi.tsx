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

const IconFenleiLishi: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 1024A512 512 0 1 1 512 0a512 512 0 0 1 0 1024z m238.208-481.792H528V320a80 80 0 1 0-160 0v382.208h382.208a80 80 0 1 0 0-160z"
        fill={getIconColor(color, 0, '#FF4029')}
      />
    </Svg>
  );
};

IconFenleiLishi.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconFenleiLishi) : IconFenleiLishi;
