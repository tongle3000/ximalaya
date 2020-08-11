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

const IconShaixuan: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M885.293894 165.976616c-13.712002-23.84251-38.27081-38.066154-65.797142-38.066154L191.302888 127.910463c-27.526332 0-52.08514 14.223643-65.797142 38.066154-13.712002 23.84251-13.507345 52.289797 0.306985 76.029979l0.920955 1.637254 218.061757 287.952034 0 245.281103c0 17.498151 14.223643 31.721795 31.721795 31.721795s31.721795-14.223643 31.721795-31.721795L408.239033 523.204957c0.511642-7.367643-1.534926-15.04227-6.344359-21.386629L180.046767 208.749875c-2.251224-4.911762-0.61397-9.004897 0.61397-11.153792 1.330269-2.353553 4.502448-6.242031 10.744479-6.242031L819.496752 191.354052c6.242031 0 9.41421 3.888478 10.744479 6.242031 1.22794 2.148896 2.865194 6.344359 0.61397 11.256121l-223.48516 294.705706c-0.102328 0.102328-0.204657 0.306985-0.306985 0.409313-4.093135 5.321075-6.446687 11.972419-6.446687 19.237734l0 388.438493c0 17.498151 14.223643 31.721795 31.721795 31.721795s31.721795-14.223643 31.721795-31.721795L664.059958 533.744779l220.005996-290.100929 0.920955-1.637254C898.801239 218.266414 899.005896 189.921455 885.293894 165.976616z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconShaixuan.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconShaixuan) : IconShaixuan;
