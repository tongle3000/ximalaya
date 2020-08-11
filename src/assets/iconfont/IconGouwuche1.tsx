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

const IconGouwuche1: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M372.621 553.482c9.956 3.259 20.07 5.063 29.8 5.063h330.768c38.24 0 83.85-27.375 102.323-61.988l179.143-335.66c18.271-34.235 1.886-61.988-37.394-61.988H236.612L180.364 0H0v89.15h104.116l7.027 9.76h-1.063l188.17 387.668-73.947 131.925c-35.473 63.285-5.366 120.324 53.498 126.06h641.472v-92.781h-588.5c-9.656 0-13.328-6.885-8.678-14.59l50.526-83.71z m-55.53 441.427c59.446 0 107.636-48.19 107.636-107.636s-48.19-107.637-107.636-107.637-107.636 48.19-107.636 107.637c0 59.446 48.19 107.636 107.636 107.636z m494.545 0c59.446 0 107.637-48.19 107.637-107.636s-48.19-107.637-107.637-107.637C752.19 779.636 704 827.826 704 887.273c0 59.446 48.19 107.636 107.636 107.636z"
        fill={getIconColor(color, 0, '#FF0000')}
      />
    </Svg>
  );
};

IconGouwuche1.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconGouwuche1) : IconGouwuche1;
