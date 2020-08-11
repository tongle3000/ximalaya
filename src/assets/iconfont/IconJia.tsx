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

const IconJia: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 70.283c-244.514 0-442.732 197.763-442.732 441.717s198.218 441.717 442.732 441.717 442.732-197.763 442.732-441.717-198.218-441.717-442.732-441.717M735.045 558.604h-176.442v176.442c0 25.738-20.866 46.604-46.604 46.604s-46.604-20.866-46.604-46.604v-176.442h-176.442c-25.738 0-46.604-20.866-46.604-46.604s20.866-46.604 46.604-46.604h176.442v-176.442c0-25.738 20.866-46.604 46.604-46.604s46.604 20.866 46.604 46.604v176.442h176.442c25.738 0 46.604 20.866 46.604 46.604s-20.866 46.604-46.604 46.604z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconJia.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconJia) : IconJia;
