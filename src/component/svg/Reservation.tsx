import React from 'react';
import {SvgXml} from 'react-native-svg';

export const Reservation = ({
  width,
  height,
  color,
}: {
  width: number;
  height: number;
  color: string;
}) => {
  const icon = `<svg width={width} height={height} viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.0833 4.33325H5.91667C4.72005 4.33325 3.75 5.3033 3.75 6.49992V21.6666C3.75 22.8632 4.72005 23.8333 5.91667 23.8333H21.0833C22.28 23.8333 23.25 22.8632 23.25 21.6666V6.49992C23.25 5.3033 22.28 4.33325 21.0833 4.33325Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.8333 2.16675V6.50008" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.16667 2.16675V6.50008" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.75 10.8333H23.25" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>`;

  return <SvgXml xml={icon} width={width} height={height} color={color} />;
};
