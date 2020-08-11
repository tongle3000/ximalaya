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

const IconShengdanfanhuidingbu: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1031 1024" width={size} height={size} {...rest}>
      <Path
        d="M0 704 108.8 704 108.8 1017.6 192 1017.6 192 704 300.8 704 300.8 633.6 0 633.6Z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M499.2 627.2c-57.6 0-102.4 19.2-140.8 57.6-32 38.4-51.2 83.2-51.2 147.2 0 57.6 19.2 102.4 51.2 140.8C390.4 1004.8 435.2 1024 492.8 1024c57.6 0 102.4-19.2 134.4-57.6 32-38.4 51.2-83.2 51.2-147.2 0-57.6-19.2-102.4-51.2-140.8C595.2 646.4 550.4 627.2 499.2 627.2z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <Path
        d="M876.8 633.6l-128 0 0 384 83.2 0 0-134.4 44.8 0c44.8 0 76.8-12.8 108.8-32 25.6-25.6 44.8-57.6 44.8-96C1017.6 678.4 966.4 633.6 876.8 633.6zM857.6 819.2l-32 0 0-121.6 38.4 0c44.8 0 70.4 19.2 70.4 57.6C928 800 908.8 819.2 857.6 819.2z"
        fill={getIconColor(color, 2, '#333333')}
      />
      <Path
        d="M864 320 793.6 249.6 761.6 332.8 832 403.2Z"
        fill={getIconColor(color, 3, '#333333')}
      />
      <Path
        d="M390.4 198.4 358.4 115.2 288 185.6 320 268.8Z"
        fill={getIconColor(color, 4, '#333333')}
      />
      <Path
        d="M627.2 204.8 697.6 268.8 729.6 185.6 665.6 121.6Z"
        fill={getIconColor(color, 5, '#333333')}
      />
      <Path
        d="M505.6 83.2 505.6 83.2l57.6 57.6 32-83.2L569.6 25.6C550.4 6.4 531.2 0 505.6 0c0 0 0 0 0 0C486.4 0 460.8 6.4 448 25.6L422.4 51.2l32 83.2L505.6 83.2z"
        fill={getIconColor(color, 6, '#333333')}
      />
      <Path
        d="M953.6 512c12.8 0 19.2-6.4 32-12.8 19.2-19.2 19.2-44.8 0-57.6L928 384 896 467.2l32 32C934.4 505.6 940.8 512 953.6 512z"
        fill={getIconColor(color, 7, '#333333')}
      />
      <Path
        d="M89.6 499.2 128 460.8 96 377.6 32 441.6c-19.2 19.2-19.2 44.8 0 57.6C51.2 512 76.8 512 89.6 499.2z"
        fill={getIconColor(color, 8, '#333333')}
      />
      <Path
        d="M262.4 332.8 224 249.6 153.6 313.6 192 396.8Z"
        fill={getIconColor(color, 9, '#333333')}
      />
    </Svg>
  );
};

IconShengdanfanhuidingbu.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconShengdanfanhuidingbu) : IconShengdanfanhuidingbu;
