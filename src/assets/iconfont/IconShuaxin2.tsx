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

const IconShuaxin2: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M87.552 225.645714l59.318857 46.665143c76.434286-113.078857 228.790857-198.217143 364.982857-198.217143 165.668571 0 336.749714 122.075429 401.042286 264.045715-50.249143 18.870857-140.288 95.451429-140.288 95.451428L1023.634286 614.4V511.853714C1023.707429 229.668571 794.038857 0 511.853714 0a511.268571 511.268571 0 0 0-424.301714 225.645714z m31.158857 454.948572C168.96 661.430857 251.026286 590.262857 251.026286 590.262857L0 409.453714v102.4c0 282.185143 229.668571 511.853714 511.853714 511.853715a511.268571 511.268571 0 0 0 424.374857-225.645715l-58.587428-44.032c-76.434286 113.005714-229.449143 197.924571-365.787429 197.924572-165.668571 0-328.850286-129.462857-393.142857-271.36z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconShuaxin2.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconShuaxin2) : IconShuaxin2;
