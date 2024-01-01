import React, {FC} from 'react';

import {
  Text,
  HStack,
  Image,
  Box,
  VStack,
  ScrollView,
  Pressable,
} from 'native-base';
import {Colors} from '../../../styles/Colors';
import {ImageBackground} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

type Props = {
  food: string;
};

// const DATA: ItemData[] = [
//   {
//     id: '1',
//     title: 'Appetizer',
//   },
//   {
//     id: '2',
//     title: 'Appetizer',
//   },
//   {
//     id: '3',
//     title: 'Appetizer',
//   },
//   {
//     id: '4',
//     title: 'Third Item',
//   },
//   {
//     id: '5',
//     title: 'Third Item',
//   },
//   {
//     id: '6',
//     title: 'Third Item',
//   },
// ];

export const MenuListCard: FC<Props> = ({rate, food, description}) => {
  return (
    <Box
      borderRadius={4}
      mt={4}
      ml={4}
      w={'20%'}
      alignItems={'center'}
      backgroundColor={'white'}
      shadow={2}>
      <Image
        source={require('../../../assets/food.png')}
        alt={'no img'}
        h={20}
        w={20}
      />
      <Text textAlign={'center'} color={Colors.primary}>
        {food}
      </Text>
    </Box>
  );
};
