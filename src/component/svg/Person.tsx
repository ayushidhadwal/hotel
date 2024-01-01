import React from 'react';
import {SvgXml} from 'react-native-svg';

export const Person = ({
  width,
  height,
  color,
}: {
  width: number;
  height: number;
  color: string;
}) => {
  const icon = `<svg width={width} height={height} viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.6667 22.75V20.5833C21.6667 19.4341 21.2101 18.3319 20.3975 17.5192C19.5848 16.7065 18.4826 16.25 17.3333 16.25H8.66666C7.51739 16.25 6.41519 16.7065 5.60253 17.5192C4.78987 18.3319 4.33333 19.4341 4.33333 20.5833V22.75" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 11.9167C15.3932 11.9167 17.3333 9.97657 17.3333 7.58333C17.3333 5.1901 15.3932 3.25 13 3.25C10.6068 3.25 8.66667 5.1901 8.66667 7.58333C8.66667 9.97657 10.6068 11.9167 13 11.9167Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>`;

  return <SvgXml xml={icon} width={width} height={height} color={color} />;
};
