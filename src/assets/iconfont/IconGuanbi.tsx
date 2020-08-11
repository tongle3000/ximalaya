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

const IconGuanbi: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M666.17 716.5c-7.73 0-15.46-2.95-21.36-8.85L336.47 399.31c-11.8-11.8-11.8-30.92 0-42.72s30.92-11.8 42.72 0l308.35 308.35c11.8 11.8 11.8 30.92 0 42.72a30.184 30.184 0 0 1-21.37 8.84z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M357.83 716.5c-7.73 0-15.46-2.95-21.36-8.85-11.8-11.8-11.8-30.92 0-42.72l308.35-308.35c11.8-11.8 30.92-11.8 42.72 0s11.8 30.92 0 42.72L379.19 707.65c-5.9 5.9-13.63 8.85-21.36 8.85z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <Path
        d="M512 945C273.25 945 79 750.76 79 512S273.25 79 512 79s433 194.24 433 433-194.25 433-433 433z m0-805.58c-205.45 0-372.58 167.13-372.58 372.58S306.55 884.58 512 884.58 884.58 717.45 884.58 512 717.45 139.42 512 139.42z"
        fill={getIconColor(color, 2, '#333333')}
      />
    </Svg>
  );
};

IconGuanbi.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconGuanbi) : IconGuanbi;
