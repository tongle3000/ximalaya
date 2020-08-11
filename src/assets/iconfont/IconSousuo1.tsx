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

const IconSousuo1: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M469.344 789.344c176.736 0 320-143.264 320-320s-143.264-320-320-320-320 143.264-320 320 143.264 320 320 320z m296.864-44.032l136.704 139.936a42.656 42.656 0 0 1-61.056 59.616l-140.096-143.424a403.488 403.488 0 0 1-232.416 73.216C245.44 874.656 64 693.216 64 469.344S245.472 64 469.344 64c223.84 0 405.312 181.472 405.312 405.344 0 106.592-41.152 203.584-108.448 275.968z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconSousuo1.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconSousuo1) : IconSousuo1;
