import React, {FC} from 'react';

import {Text, HStack, Image, Box, ScrollView} from 'native-base';
import {Colors} from '../../../styles/Colors';

type Props = {text: string};

export const SearchAreaCard: FC<Props> = ({text}) => {
  return (
    <ScrollView
      p={1}
      mb={1}
      horizontal
      showsHorizontalScrollIndicator={false}
      mx={3}>
      <Box
        alignItems={'center'}
        h={6}
        borderRadius={4}
        bgColor={'white'}
        shadow={2}>
        <Text mt={1} fontSize={'xs'} mx={3} textAlign={'center'}>
          {text}
        </Text>
      </Box>
      <Box
        alignItems={'center'}
        h={6}
        borderRadius={4}
        bgColor={'white'}
        shadow={2}>
        <Text mx={2} textAlign={'center'}>
          {text}
        </Text>
      </Box>
      <Box
        alignItems={'center'}
        h={6}
        borderRadius={4}
        bgColor={'white'}
        shadow={2}>
        <Text mx={2} textAlign={'center'}>
          {text}
        </Text>
      </Box>
      <Box
        alignItems={'center'}
        h={6}
        borderRadius={4}
        bgColor={'white'}
        shadow={2}>
        <Text mx={2} textAlign={'center'}>
          {text}
        </Text>
      </Box>
      <Box
        alignItems={'center'}
        h={6}
        borderRadius={4}
        bgColor={'white'}
        shadow={2}>
        <Text mx={2} textAlign={'center'}>
          {text}
        </Text>
      </Box>
      <Box
        alignItems={'center'}
        h={6}
        borderRadius={4}
        bgColor={'white'}
        shadow={2}>
        <Text mx={2} textAlign={'center'}>
          {text}
        </Text>
      </Box>
      <Box
        alignItems={'center'}
        h={6}
        borderRadius={4}
        bgColor={'white'}
        shadow={2}>
        <Text mx={2} textAlign={'center'}>
          {text}
        </Text>
      </Box>
    </ScrollView>
  );
};
