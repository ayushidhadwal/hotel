import * as React from 'react';
import {Box, HStack} from 'native-base';
import {Colors} from '../../styles/Colors';

type Props = {
  data: any[];
  activeIndex: number;
};

export const Slider: React.FC<Props> = ({data, activeIndex}) => {
  return (
    <HStack
      w={'30%'}
      h={8}
      space={2}
      justifyContent={'center'}
      alignItems={'center'}>
      {data.map((_, index) => {
        if (index === activeIndex) {
          return (
            <Box key={index} flex={1} bg={Colors.primary} h={1} rounded={6} />
          );
        }

        return (
          <Box key={index} flex={1} bg={Colors.secondary} h={1} rounded={10} />
        );
      })}
    </HStack>
  );
};
