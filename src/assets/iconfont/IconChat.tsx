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

const IconChat: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M886.016 279.744c15.744 0.576 31.232 3.52 46.016 9.344a136.32 136.32 0 0 1 77.312 79.232c5.056 13.824 7.616 28.224 8.192 42.944 0.896 75.264 0.896 150.528 0 225.792a142.08 142.08 0 0 1-9.344 46.08 136.448 136.448 0 0 1-82.368 78.4 139.392 139.392 0 0 1-43.136 7.104h-81.92l-2.112 73.6-0.192 2.56a29.76 29.76 0 0 1-3.264 9.664 25.984 25.984 0 0 1-26.24 12.352 27.84 27.84 0 0 1-9.536-3.648L609.856 768.64c-56.192 0-112.384 0.64-168.576-0.064a139.52 139.52 0 0 1-49.024-10.56 136.256 136.256 0 0 1-74.304-78.016 140.288 140.288 0 0 1-8.192-42.944 9483.584 9483.584 0 0 1 0-225.792c0.576-14.72 3.136-29.12 8.192-42.944a136.32 136.32 0 0 1 77.312-79.232c14.784-5.824 30.272-8.768 46.016-9.344 148.224-1.856 296.512-1.856 444.736 0z m-441.088 51.136a85.504 85.504 0 0 0-28.928 5.12 84.8 84.8 0 0 0-49.984 49.92 88 88 0 0 0-5.056 26.624c-0.96 75.136-2.752 150.336 0.128 225.408 0.512 8.384 2.048 16.576 4.928 24.448a84.032 84.032 0 0 0 76.608 54.976c58.176 0.768 116.416 0.064 174.656 0.064a29.248 29.248 0 0 1 13.632 3.968l117.824 74.496 1.536-53.568 0.192-2.496a25.6 25.6 0 0 1 22.976-22.272c37.76-1.856 75.648 1.216 113.408-0.256 8.384-0.512 16.576-2.048 24.448-4.928a84.736 84.736 0 0 0 55.04-76.608c0.96-75.136 2.752-150.336-0.128-225.344a86.912 86.912 0 0 0-4.928-24.512 84.864 84.864 0 0 0-48.064-49.216 87.232 87.232 0 0 0-28.544-5.76c-146.56-1.856-293.12-0.064-439.744-0.064z m51.008-172.736a117.568 117.568 0 0 1 82.368 37.056 34.88 34.88 0 0 1 9.344 14.464 25.856 25.856 0 0 1-23.616 32.32 26.688 26.688 0 0 1-17.088-5.632c-3.456-3.008-6.336-6.656-9.728-9.792a68.288 68.288 0 0 0-40.832-17.152 4655.872 4655.872 0 0 0-375.744 0 66.56 66.56 0 0 0-58.496 42.048 69.12 69.12 0 0 0-4.48 20.928 2503.68 2503.68 0 0 0 0 191.104c0.384 6.656 1.6 13.184 3.904 19.456a67.392 67.392 0 0 0 55.68 43.328c3.136 0.32 6.272 0.256 9.472 0.448 2.24 0.32 2.24 0.32 4.544 0.896a26.368 26.368 0 0 1 18.432 24l0.512 23.872 76.992-36.8c2.112-0.896 2.048-0.896 4.288-1.6a27.328 27.328 0 0 1 11.392-0.512 25.856 25.856 0 0 1 19.712 33.152 26.496 26.496 0 0 1-11.264 14.016c-37.44 20.032-76.48 36.736-114.752 55.04a25.792 25.792 0 0 1-36.608-22.528l-0.96-41.152c-3.392-0.704-6.656-1.664-9.92-2.624a120.576 120.576 0 0 1-35.456-18.112A118.4 118.4 0 0 1 6.4 463.104C5.568 399.68 5.568 336.192 6.4 272.768c0.512-13.76 3.072-27.264 8.128-40.128 12.224-31.04 37.76-55.936 69.056-67.392 12.096-4.416 24.64-6.656 37.44-7.104 124.992-1.6 249.984-1.792 374.912 0z m5.44 332.736a38.4 38.4 0 1 1-0.064 76.864 38.4 38.4 0 0 1 0.064-76.864z m162.24 0a38.4 38.4 0 1 1 0 76.8 38.4 38.4 0 0 1 0-76.8z m162.304 0a38.4 38.4 0 1 1-0.064 76.864 38.4 38.4 0 0 1 0.064-76.864z"
        fill={getIconColor(color, 0, '#515151')}
      />
    </Svg>
  );
};

IconChat.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconChat) : IconChat;
