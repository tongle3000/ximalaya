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

const IconXiazai1: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1047 1024" width={size} height={size} {...rest}>
      <Path
        d="M523.987449 0a42.759353 42.759353 0 0 0-42.759353 42.759353v498.158822L301.663529 361.353608a43.500845 43.500845 0 0 0-60.555153 0 42.759353 42.759353 0 0 0 0 60.431572l227.020033 227.267198a79.092445 79.092445 0 0 0 111.223751 0l227.514362-227.143616a42.635771 42.635771 0 0 0 0-60.555154 42.882935 42.882935 0 0 0-60.555153 0L566.870384 540.918175V42.759353A42.882935 42.882935 0 0 0 523.987449 0z"
        fill={getIconColor(color, 0, '#4D4D4D')}
      />
      <Path
        d="M860.871832 120.245233a42.882935 42.882935 0 1 0 0 85.642288 101.584359 101.584359 0 0 1 101.460777 101.584359v529.301473a101.584359 101.584359 0 0 1-101.460777 101.584359H187.226647a101.707941 101.707941 0 0 1-101.584359-101.584359V307.47188a101.707941 101.707941 0 0 1 101.584359-101.584359 42.882935 42.882935 0 0 0 0-85.642288A187.473811 187.473811 0 0 0 0 307.47188v529.301473a187.473811 187.473811 0 0 0 187.226647 187.226647h673.645185A187.350229 187.350229 0 0 0 1047.974897 836.773353V307.47188A187.350229 187.350229 0 0 0 860.871832 120.245233z"
        fill={getIconColor(color, 1, '#4D4D4D')}
      />
    </Svg>
  );
};

IconXiazai1.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconXiazai1) : IconXiazai1;
