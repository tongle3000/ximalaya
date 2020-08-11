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

const IconTouting: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M221.248 526.08c16.576 0 30.656 14.016 30.656 30.656v244.608c0 16.64-14.016 30.656-30.656 30.656A125.44 125.44 0 0 1 96 706.752v-55.36A125.44 125.44 0 0 1 221.248 526.08m0-64A189.824 189.824 0 0 0 32 651.392v55.36A189.824 189.824 0 0 0 221.248 896c52.032 0 94.656-42.56 94.656-94.656V556.736c0-52.032-42.56-94.656-94.656-94.656zM802.752 526.08a125.44 125.44 0 0 1 125.248 125.248v55.36a125.44 125.44 0 0 1-125.248 125.248 31.104 31.104 0 0 1-30.656-30.656V556.736c0-16.576 14.016-30.656 30.656-30.656m0-64c-52.032 0-94.656 42.56-94.656 94.656v244.608c0 52.032 42.56 94.656 94.656 94.656a189.76 189.76 0 0 0 189.248-189.248v-55.36a189.824 189.824 0 0 0-189.248-189.312z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M850.048 509.312a32 32 0 0 1-32-32v-35.776c0-155.264-126.72-281.536-282.624-281.536h-46.912c-155.84 0-282.56 126.272-282.56 281.536v35.712a32 32 0 0 1-64 0v-35.712c0-190.528 155.456-345.536 346.56-345.536h46.912c191.104 0 346.624 155.008 346.624 345.536v35.776a32 32 0 0 1-32 32z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconTouting.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconTouting) : IconTouting;
