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

const IconShuaxin: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M962.074 490.554L647.271 355.638l125.831-89.881c-65.56-69.108-157.968-112.493-260.747-112.493-174.244 0-319.503 123.884-352.634 288.369l-83.949-34.777C123.56 209.825 300.628 63.32 512.355 63.32c132.973 0 252.063 58.09 334.393 149.833l115.326-82.375v359.776z m-710.47 269.773c65.556 69.108 157.973 112.488 260.752 112.488 174.918 0 320.546-124.873 352.931-290.307l83.868 35.874c-47.481 197.458-224.77 344.377-436.799 344.377-132.973 0-252.068-58.086-334.398-149.828l-115.322 82.37V535.525L377.44 670.441l-125.836 89.886z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconShuaxin.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconShuaxin) : IconShuaxin;
