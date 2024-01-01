import React, {FC} from 'react';

import {Text, HStack, Image} from 'native-base';
import {Colors} from '../../../styles/Colors';
import {HomeHeaderCard} from './HomeHeaderCard';

type Props = {text1: string; text2: string};

export const HomeHeader: FC<Props> = ({text1, text2}) => {
  return <HomeHeaderCard text1={text1} text2={text2} />;
};
