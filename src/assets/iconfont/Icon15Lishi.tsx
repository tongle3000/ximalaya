/* tslint:disable */
/* eslint-disable */
import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { GProps, Path, Svg } from 'react-native-svg';

import { getIconColor } from './helper';






interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

const Icon15Lishi: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 938.7C276.7 938.7 85.3 747.2 85.3 512 85.3 276.7 276.7 85.3 512 85.3c235.2 0 426.7 191.4 426.7 426.7 0 235.2-191.5 426.7-426.7 426.7z m0-768c-188.2 0-341.3 153.1-341.3 341.3S323.8 853.3 512 853.3 853.3 700.2 853.3 512 700.2 170.7 512 170.7z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M661.3 704c-10.9 0-21.8-4.2-30.2-12.5L469.3 529.7v-231c0-23.6 19.1-42.7 42.7-42.7s42.7 19.1 42.7 42.7v195.7l136.8 136.8c16.7 16.7 16.7 43.7 0 60.3-8.3 8.3-19.3 12.5-30.2 12.5z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

Icon15Lishi.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Icon15Lishi) : Icon15Lishi;
