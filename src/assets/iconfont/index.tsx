/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';
import IconWode from './IconWode';
import IconFaxian from './IconFaxian';
import IconFaxian1 from './IconFaxian1';
import IconZiyuan from './IconZiyuan';
import IconTingshu from './IconTingshu';
import IconTingshu1 from './IconTingshu1';
import IconDaohangshouye from './IconDaohangshouye';
import IconFavoritesFill from './IconFavoritesFill';

export type IconNames = 'wode' | 'faxian' | 'faxian1' | 'ziyuan' | 'tingshu' | 'tingshu1' | 'daohangshouye' | 'favorites-fill';

interface Props extends GProps, ViewProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

const IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'wode':
      return <IconWode key="1" {...rest} />;
    case 'faxian':
      return <IconFaxian key="2" {...rest} />;
    case 'faxian1':
      return <IconFaxian1 key="3" {...rest} />;
    case 'ziyuan':
      return <IconZiyuan key="4" {...rest} />;
    case 'tingshu':
      return <IconTingshu key="5" {...rest} />;
    case 'tingshu1':
      return <IconTingshu1 key="6" {...rest} />;
    case 'daohangshouye':
      return <IconDaohangshouye key="7" {...rest} />;
    case 'favorites-fill':
      return <IconFavoritesFill key="8" {...rest} />;
  }

  return null;
};

export default React.memo ? React.memo(IconFont) : IconFont;
