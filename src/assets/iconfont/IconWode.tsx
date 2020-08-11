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

const IconWode: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M511 84.2c104.9 0 190.2 85.3 190.2 190.2S615.9 464.6 511 464.6c-104.9 0-190.2-85.3-190.2-190.2S406.1 84.2 511 84.2z m156.4 369.1c28.8 8.7 54.6 20.2 77.2 34.4 52.5 33 115.1 97.9 115.1 219.9v74H162.3v-74c0-122 62.6-187 115.1-219.9 22.6-14.2 48.4-25.7 77.2-34.4 41.8 36.6 96.6 58.8 156.4 58.8 59.8 0 114.6-22.2 156.4-58.8z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconWode.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconWode) : IconWode;
