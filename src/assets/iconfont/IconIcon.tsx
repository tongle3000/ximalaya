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

const IconIcon: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M844.8 179.2h-179.2c-15.36 0-25.6 12.8-25.6 25.6s10.24 25.6 25.6 25.6h112.64L391.68 599.04c-10.24 10.24-10.24 25.6 0 35.84 10.24 10.24 25.6 10.24 35.84 0L819.2 261.12V384c0 12.8 10.24 25.6 25.6 25.6s25.6-12.8 25.6-25.6V204.8c0-15.36-12.8-25.6-25.6-25.6z m-25.6 614.4c0 28.16-23.04 51.2-51.2 51.2H253.44c-28.16 0-51.2-23.04-51.2-51.2L204.8 281.6c0-28.16 23.04-51.2 51.2-51.2h281.6V179.2H256c-56.32 0-102.4 56.32-102.4 112.64v504.32C153.6 849.92 199.68 896 253.44 896h504.32c56.32 0 112.64-46.08 112.64-102.4V512h-51.2v281.6z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconIcon.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconIcon) : IconIcon;
