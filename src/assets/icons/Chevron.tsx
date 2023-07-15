import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';
import { TIcon } from './types';

export const Chevron = ({ color, height = 24, style, width = 24 }: TIcon) => (
  <Svg width={width} height={height} fill="none" style={style}>
    <G clipPath="url(#a)">
      <Path
        fill={color || '#1E1E20'}
        d="m10.828 12 4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414-4.95 4.95Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
