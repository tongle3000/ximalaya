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

const IconTubiaoFanhuidingbu: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M900.8 131.2H123.2c-12.8 0-24-11.2-24-24s11.2-24 24-24h777.6c12.8 0 24 11.2 24 24s-11.2 24-24 24z m-406.4 52.8c9.6-9.6 25.6-9.6 33.6 0L872 528c9.6 9.6 9.6 25.6 0 33.6-9.6 9.6-25.6 9.6-33.6 0L536 259.2v673.6c0 12.8-11.2 24-24 24s-24-11.2-24-24V259.2L185.6 561.6c-9.6 9.6-25.6 9.6-33.6 0-9.6-9.6-9.6-25.6 0-33.6l342.4-344z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconTubiaoFanhuidingbu.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconTubiaoFanhuidingbu) : IconTubiaoFanhuidingbu;
