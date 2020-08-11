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

const IconBiyanHuaban1: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M127.431111 455.111111a40.96 40.96 0 0 0 0 36.408889A427.235556 427.235556 0 0 0 493.226667 739.555556L158.72 404.48a444.302222 444.302222 0 0 0-31.288889 50.631111zM893.724444 449.422222C853.333333 384 732.728889 208.782222 512 208.782222a401.066667 401.066667 0 0 0-223.573333 66.56L207.644444 194.56 143.36 258.844444l74.524444 74.524445 100.693334 102.4 233.244444 231.537778 60.871111 61.44 101.262223 101.262222 64.284444-64.284445-72.248889-72.248888a455.111111 455.111111 0 0 0 189.44-193.422223 52.337778 52.337778 0 0 0-1.706667-50.631111zM638.293333 625.777778l-64.853333-65.422222a105.813333 105.813333 0 1 0-147.911111-147.911112L360.675556 347.591111A197.404444 197.404444 0 1 1 638.293333 625.777778z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconBiyanHuaban1.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconBiyanHuaban1) : IconBiyanHuaban1;
