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

const IconUser: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1046 1024" width={size} height={size} {...rest}>
      <Path
        d="M520.550074 474.417258c-130.773611 0-237.208629-106.385599-237.208629-237.208629s106.397954-237.208629 237.208629-237.208629 237.208629 106.385599 237.208629 237.208629-106.385599 237.208629-237.208629 237.208629z m0-395.261233a158.139086 158.139086 0 1 0 158.139086 158.139086 158.274987 158.274987 0 0 0-158.139086-158.139086zM646.83896 580.580474h399.906568v79.069543H646.83896zM646.83896 756.473143h399.906568v79.069543H646.83896zM646.83896 932.365812h399.906568v79.069543H646.83896z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M79.070223 1023.987645H0.00068v-106.731528a514.446214 514.446214 0 0 1 41.054389-202.220356 525.182375 525.182375 0 0 1 277.262294-277.262294 514.532696 514.532696 0 0 1 202.232711-41.091454v79.069543C277.164137 475.751556 79.070223 673.783698 79.070223 917.219053z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconUser.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconUser) : IconUser;
