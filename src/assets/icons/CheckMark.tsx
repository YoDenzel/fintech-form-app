import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { TIcon } from './types';

export const CheckMark = ({ color, height = 11, width = 16, style }: TIcon) => (
  <Svg
    width={width}
    height={height}
    style={style}
    fill="none"
    viewBox="0 0 16 11">
    <Path
      fill={color || '#fff'}
      fillRule="evenodd"
      d="M15.73.317a1 1 0 0 1-.047 1.413l-9.625 9a1 1 0 0 1-1.366 0L.317 6.64a1 1 0 1 1 1.366-1.46L5.375 8.63 14.317.27a1 1 0 0 1 1.413.047Z"
      clipRule="evenodd"
    />
  </Svg>
);
