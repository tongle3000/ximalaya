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

const IconShijian: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M546.688 494.68416V370.3552a34.68288 34.68288 0 0 0-34.69312-34.67776 34.66752 34.66752 0 0 0-34.6624 34.67776v153.0624l148.85888 148.85376a34.56 34.56 0 0 0 24.51456 10.15808 34.56 34.56 0 0 0 24.50944-10.15808 34.65216 34.65216 0 0 0 0-49.02912l-128.52736-128.55808z"
        fill={getIconColor(color, 0, '#2B3B94')}
      />
      <Path
        d="M835.10272 306.97472l-73.35936 15.7952c38.94784 52.06016 62.35136 116.41344 62.35136 186.28096 0 172.08832-140.01152 312.09472-312.09984 312.09472-172.0576 0-312.07936-140.0064-312.07936-312.09472 0-172.06272 140.02176-312.07936 312.07936-312.07936 17.45408 0 34.54976 1.5616 51.18976 4.3776l-18.66752 67.74784 193.31072-50.29376-140.2368-142.2592-15.85664 57.51808a378.4192 378.4192 0 0 0-69.74464-6.44608C301.3376 127.616 130.56 298.3936 130.56 509.05088c0 210.688 170.7776 381.45024 381.43488 381.45024 210.688 0 381.45024-170.76224 381.45024-381.45024 0-74.33216-21.4784-143.50848-58.3424-202.07616z"
        fill={getIconColor(color, 1, '#2B3B94')}
      />
    </Svg>
  );
};

IconShijian.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconShijian) : IconShijian;
