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

const IconGerenganburenshidanganzhuandishenpidan: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M937.21 226.86v622.8a83.19 83.19 0 0 1-83.2 83.2h-622.8a126 126 0 0 1-126-126v-580a125.93 125.93 0 0 1 126-126h580a126 126 0 0 1 126 126z"
        fill={getIconColor(color, 0, '#FF6161')}
      />
      <Path
        d="M740.31 932.86h-509.1a126 126 0 0 1-126-126v-432q12.42-0.5 25-0.5 15.06 0 29.93 0.72c294.43 14.17 534.34 236.22 576.13 522.58q2.48 17.46 4.04 35.2z"
        fill={getIconColor(color, 1, '#FFFFFF')}
        opacity=".2"
      />
      <Path
        d="M937.21 226.86v622.8a82.87 82.87 0 0 1-6.69 32.74 635.16 635.16 0 0 1-146.61 17.06q-24.06 0-47.69-1.77C445.22 876 209 657.66 160.09 375.11a638.8 638.8 0 0 1 8.24-257.47 125.48 125.48 0 0 1 62.88-16.78h580a126 126 0 0 1 126 126z"
        fill={getIconColor(color, 2, '#FFFFFF')}
        opacity=".14"
      />
      <Path
        d="M430.18 296.32h84a36 36 0 0 0 0-72h-84a36 36 0 0 0 0 72z"
        fill={getIconColor(color, 3, '#FFFFFF')}
      />
      <Path
        d="M643.27 564.32a121.42 121.42 0 0 1 31.41 4.11V319.84a49.66 49.66 0 0 0-49.52-49.52h-48a50.05 50.05 0 0 1-49.89 49H417.1a50.05 50.05 0 0 1-49.89-49h-48a49.67 49.67 0 0 0-49.53 49.52v366a49.68 49.68 0 0 0 49.53 49.52h213.07a121.56 121.56 0 0 1 111-171z m-293.59-167h245a15 15 0 0 1 0 30h-245a15 15 0 0 1 0-30z m-15 105.42a13.64 13.64 0 0 1 13.6-13.6h198.89a13.64 13.64 0 0 1 13.6 13.6v2.8a13.64 13.64 0 0 1-13.6 13.6H348.28a13.64 13.64 0 0 1-13.6-13.6z m145.09 94A14.26 14.26 0 0 1 465.55 611H348.9a14.26 14.26 0 0 1-14.22-14.22v-1.56A14.26 14.26 0 0 1 348.9 581h116.65a14.26 14.26 0 0 1 14.22 14.22zM709.26 710.62h3.18l-3.18-6.8v6.8zM695.17 643.73h-65.78a4.71 4.71 0 0 0-4.7 4.7v62.19h9.39a4.69 4.69 0 0 1 4.7 4.7v14.09a4.71 4.71 0 0 0 4.7 4.7h37.59a4.71 4.71 0 0 0 4.7-4.7v-14.09a4.69 4.69 0 0 1 4.7-4.7h9.39v-62.19a4.71 4.71 0 0 0-4.69-4.7z m-9.74 61.08h-47a4.7 4.7 0 0 1 0-9.4h47a4.7 4.7 0 0 1 0 9.4z m0-18.79h-47a4.7 4.7 0 0 1 0-9.4h47a4.7 4.7 0 1 1 0 9.4z m0-18.8h-47a4.7 4.7 0 0 1 0-9.4h47a4.7 4.7 0 1 1 0 9.4zM615.29 710.62v-7.32l-3.53 7.32h3.53z"
        fill={getIconColor(color, 4, '#FFFFFF')}
      />
      <Path
        d="M661.24 586.4a111.5 111.5 0 1 0 111.5 111.5 111.5 111.5 0 0 0-111.5-111.5z m66.81 166.5A14.11 14.11 0 0 1 714 767H610.59a14.11 14.11 0 0 1-14.09-14.1v-28.19a13.71 13.71 0 0 1 0.19-1.93 4.6 4.6 0 0 1 0.28-3.13l16-33.18a4.65 4.65 0 0 1 2.31-2.18v-35.86a14.12 14.12 0 0 1 14.1-14.1h65.78a14.11 14.11 0 0 1 14.09 14.1v35.92a4.6 4.6 0 0 1 2.31 2.23L726.28 718a14 14 0 0 1 1.77 6.71z"
        fill={getIconColor(color, 5, '#FFFFFF')}
      />
    </Svg>
  );
};

IconGerenganburenshidanganzhuandishenpidan.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconGerenganburenshidanganzhuandishenpidan) : IconGerenganburenshidanganzhuandishenpidan;
