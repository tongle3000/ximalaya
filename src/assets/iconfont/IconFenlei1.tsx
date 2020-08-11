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

const IconFenlei1: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M309.1 131.2c-97.6 0-176.7 79.1-176.7 176.7s79.1 176.7 176.7 176.7h176.7V307.9c0-97.5-79.1-176.7-176.7-176.7zM893.5 307.9c0-97.6-79.1-176.7-176.7-176.7s-176.7 79.1-176.7 176.7v176.7h176.7c97.6 0 176.7-79.1 176.7-176.7zM132.4 715.7c0 97.6 79.1 176.7 176.7 176.7s176.7-79.1 176.7-176.7V539H309.1c-97.6 0-176.7 79.1-176.7 176.7zM716.9 539H540.2v176.7c0 97.6 79.1 176.7 176.7 176.7s176.7-79.1 176.7-176.7S814.4 539 716.9 539z"
        fill={getIconColor(color, 0, '#3259CE')}
      />
    </Svg>
  );
};

IconFenlei1.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconFenlei1) : IconFenlei1;
