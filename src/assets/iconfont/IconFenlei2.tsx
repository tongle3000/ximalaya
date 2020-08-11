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

const IconFenlei2: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M192 149.33504h213.33504c47.1296 0 85.33504 38.20544 85.33504 85.33504V448a42.66496 42.66496 0 0 1-42.66496 42.66496h-256a42.66496 42.66496 0 0 1-42.66496-42.66496v-256a42.6496 42.6496 0 0 1 42.65984-42.66496z m512 341.32992c-94.2592 0.01024-170.6752-76.3904-170.69056-170.6496-0.01024-94.25408 76.3904-170.6752 170.6496-170.68544h0.04096c94.2592 0.01024 170.65984 76.43136 170.64448 170.68544-0.01024 94.24384-76.40576 170.63936-170.64448 170.6496z m-512 42.66496h213.33504c47.1296 0 85.33504 38.21056 85.33504 85.34016V832a42.66496 42.66496 0 0 1-42.66496 42.67008h-256a42.66496 42.66496 0 0 1-42.66496-42.67008v-256a42.65472 42.65472 0 0 1 42.65984-42.67008z m384 0h213.32992c47.1296 0 85.34016 38.21056 85.34016 85.34016V832a42.67008 42.67008 0 0 1-42.67008 42.67008h-256a42.67008 42.67008 0 0 1-42.67008-42.67008v-256a42.67008 42.67008 0 0 1 42.67008-42.67008z"
        fill={getIconColor(color, 0, '#B8B9B9')}
      />
    </Svg>
  );
};

IconFenlei2.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconFenlei2) : IconFenlei2;
