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

const IconXiasanjiaoxing: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M325.456896 862.27968"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M882.05824 862.27968"
        fill={getIconColor(color, 1, '#333333')}
      />
      <Path
        d="M236.027904 877.161472"
        fill={getIconColor(color, 2, '#333333')}
      />
      <Path
        d="M960.132096 877.161472"
        fill={getIconColor(color, 3, '#333333')}
      />
      <Path
        d="M63.683584 788.737024"
        fill={getIconColor(color, 4, '#333333')}
      />
      <Path
        d="M958.46912 788.737024"
        fill={getIconColor(color, 5, '#333333')}
      />
      <Path
        d="M64.77824 858.791936"
        fill={getIconColor(color, 6, '#333333')}
      />
      <Path
        d="M163.396608 289.168384c-40.577024 0-66.526208 54.183936-35.44064 85.25824L477.217792 723.704832c20.031488 20.031488 49.82272 20.031488 69.853184 0l349.274112-349.278208c30.30528-30.294016 6.677504-85.25824-34.927616-85.25824L163.396608 289.168384z"
        fill={getIconColor(color, 7, '#333333')}
      />
      <Path
        d="M959.522816 858.791936"
        fill={getIconColor(color, 8, '#333333')}
      />
    </Svg>
  );
};

IconXiasanjiaoxing.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconXiasanjiaoxing) : IconXiasanjiaoxing;
