import React from 'react';
import {SvgXml} from 'react-native-svg';

export const Search = ({
  width,
  height,
  color,
}: {
  width: number;
  height: number;
  color: string;
}) => {
  const icon = `<svg width={width} height={height} viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.4167 20.5833C17.2031 20.5833 21.0833 16.7031 21.0833 11.9167C21.0833 7.1302 17.2031 3.25 12.4167 3.25C7.6302 3.25 3.75 7.1302 3.75 11.9167C3.75 16.7031 7.6302 20.5833 12.4167 20.5833Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M23.25 22.7501L18.5375 18.0376" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>`;

  return <SvgXml xml={icon} width={width} height={height} color={color} />;
};
