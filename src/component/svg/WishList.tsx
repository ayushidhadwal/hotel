import React from 'react';
import {SvgXml} from 'react-native-svg';

export const WishList = ({
  width,
  height,
  color,
}: {
  width: number;
  height: number;
  color: string;
}) => {
  const icon = `<svg width={width} height={height} viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.5767 4.99419C22.0233 4.44061 21.3664 4.00147 20.6433 3.70187C19.9202 3.40226 19.1452 3.24805 18.3625 3.24805C17.5798 3.24805 16.8048 3.40226 16.0817 3.70187C15.3586 4.00147 14.7017 4.44061 14.1483 4.99419L13 6.14252L11.8517 4.99419C10.734 3.87652 9.21812 3.24863 7.6375 3.24863C6.05688 3.24863 4.541 3.87652 3.42333 4.99419C2.30566 6.11186 1.67776 7.62774 1.67776 9.20836C1.67776 10.789 2.30566 12.3049 3.42333 13.4225L4.57166 14.5709L13 22.9992L21.4283 14.5709L22.5767 13.4225C23.1302 12.8692 23.5694 12.2122 23.869 11.4892C24.1686 10.7661 24.3228 9.99105 24.3228 9.20836C24.3228 8.42566 24.1686 7.65064 23.869 6.92756C23.5694 6.20448 23.1302 5.54751 22.5767 4.99419Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>`;

  return <SvgXml xml={icon} width={width} height={height} color={color} />;
};
