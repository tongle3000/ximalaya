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

const IconJia1: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M901.1 541.5H571.6V895c0 32.9-26.7 59.6-59.6 59.6-32.9 0-59.5-26.7-59.6-59.6V541.5H122.9c-32.5 0-58.9-26.4-58.9-58.9s26.4-58.9 58.9-58.9h329.5V129c0-32.9 26.7-59.6 59.6-59.6 32.9 0 59.5 26.7 59.6 59.6v294.6h329.5c32.5 0 58.9 26.4 58.9 58.9 0 32.6-26.4 59-58.9 59z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconJia1.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconJia1) : IconJia1;
