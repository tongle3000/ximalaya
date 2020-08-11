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

const IconDanzi: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M742.4 1017.6H326.4c-110.933333 0-200.533333-89.6-200.533333-200.533333V228.266667c0-110.933333 89.6-200.533333 200.533333-200.533334h416c110.933333 0 200.533333 89.6 200.533333 200.533334v588.8c0 110.933333-89.6 200.533333-200.533333 200.533333zM326.4 93.866667c-74.666667 0-136.533333 61.866667-136.533333 136.533333v588.8c0 74.666667 61.866667 136.533333 136.533333 136.533333h416c74.666667 0 136.533333-61.866667 136.533333-136.533333V228.266667c0-74.666667-61.866667-136.533333-136.533333-136.533334H326.4z"
        fill={getIconColor(color, 0, '#543E3E')}
      />
      <Path
        d="M548.266667 298.666667h-168.533334c-17.066667 0-32-14.933333-32-32S362.666667 234.666667 379.733333 234.666667h168.533334c17.066667 0 32 14.933333 32 32s-14.933333 32-32 32zM620.8 524.8H379.733333c-17.066667 0-32-14.933333-32-32s14.933333-32 32-32h241.066667c17.066667 0 32 14.933333 32 32s-14.933333 32-32 32z"
        fill={getIconColor(color, 1, '#FFBB12')}
      />
    </Svg>
  );
};

IconDanzi.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconDanzi) : IconDanzi;
