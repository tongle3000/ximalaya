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

const IconGudingzichantiaoboshenqingdan: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M944.9 234.09v622.8a83.19 83.19 0 0 1-83.2 83.2H238.9a126 126 0 0 1-126-126v-580a125.93 125.93 0 0 1 126-126h580a126 126 0 0 1 126 126z"
        fill={getIconColor(color, 0, '#FF6161')}
      />
      <Path
        d="M748 940.09H238.9a126 126 0 0 1-126-126v-432q12.42-0.5 24.95-0.5 15.06 0 29.93 0.72c294.43 14.17 534.34 236.22 576.13 522.58q2.54 17.46 4.09 35.2z"
        fill={getIconColor(color, 1, '#FFFFFF')}
        opacity=".2"
      />
      <Path
        d="M944.9 234.09v622.8a82.87 82.87 0 0 1-6.69 32.74 635.16 635.16 0 0 1-146.61 17.06q-24.06 0-47.69-1.77c-291-21.67-527.21-240-576.13-522.58A638.8 638.8 0 0 1 176 124.87a125.48 125.48 0 0 1 62.88-16.78h580a126 126 0 0 1 126.02 126z"
        fill={getIconColor(color, 2, '#FFFFFF')}
        opacity=".14"
      />
      <Path
        d="M657.47 534.91a134 134 0 0 1 32 3.86V314.91a52.15 52.15 0 0 0-52-52h-304a52.15 52.15 0 0 0-52 52v363a52.15 52.15 0 0 0 52 52h204.66a134 134 0 0 1 119.34-195z m-315-155a20.06 20.06 0 0 1 20-20h212a20.06 20.06 0 0 1 20 20 20.06 20.06 0 0 1-20 20h-212a20.06 20.06 0 0 1-20-20z m3.69 100.36a18.41 18.41 0 0 1 18.36-18.36h175.59a18.41 18.41 0 0 1 18.36 18.36v3.28a18.41 18.41 0 0 1-18.36 18.36H364.52a18.41 18.41 0 0 1-18.36-18.36z m157.31 108.28a18.41 18.41 0 0 1-18.36 18.36H365.52a18.41 18.41 0 0 1-18.36-18.36v-3.28a18.41 18.41 0 0 1 18.36-18.36h119.59a18.41 18.41 0 0 1 18.36 18.36zM669.85 667.88H637.7v25.48h32.15v9.7l25.49-22.44-25.49-22.45v9.71z"
        fill={getIconColor(color, 3, '#FFFFFF')}
      />
      <Path
        d="M662.88 559.18a114 114 0 1 0 114 114 114 114 0 0 0-114-114z m56.72 160.26a8.67 8.67 0 0 1-8.49 8.5h-96.46a8.3 8.3 0 0 1-8.5-8.5v-64.3a8.43 8.43 0 0 1 4.25-7.29l47.93-28.51a10.36 10.36 0 0 1 8.49 0l48.54 28.51c2.42 1.22 3.64 4.25 4.24 7.29z"
        fill={getIconColor(color, 4, '#FFFFFF')}
      />
    </Svg>
  );
};

IconGudingzichantiaoboshenqingdan.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconGudingzichantiaoboshenqingdan) : IconGudingzichantiaoboshenqingdan;
