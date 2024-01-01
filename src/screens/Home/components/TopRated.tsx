import React, {FC} from 'react';

import {
  Text,
  HStack,
  Image,
  Box,
  VStack,
  ScrollView,
  Divider,
} from 'native-base';
import {Colors} from '../../../styles/Colors';
import {ImageBackground} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {useTranslation} from 'react-i18next';

type Props = {
  rating: string;
  dollar: string;
  cafe: string;
  food: string;
  distance: string;
};

export const TopRated: FC<Props> = ({rating, distance, dollar, food, cafe}) => {
  const {t} = useTranslation();
  return (
    <Box>
      <HStack p={3} justifyContent={'space-between'}>
        <Text
          fontWeight={600}
          fontSize={'lg'}
          color={Colors.primary}
          textAlign={'left'}>
          {t('Top rated')}
        </Text>
        <Image
          source={require('../../../assets/arrow.png')}
          alt={'no img'}
          h={6}
          w={6}
        />
      </HStack>
      <VStack
        flex={1}
        borderRadius={5}
        alignSelf={'center'}
        backgroundColor={'white'}
        w={'95%'}
        shadow={2}
        p={2}>
        <HStack p={1}>
          <Box>
            <Image
              mx={2}
              my={2}
              p={7}
              h={'15%'}
              w={'20%'}
              source={require('../../../assets/Cheesecake.png')}
              alt={'no img'}
            />
          </Box>
          <VStack>
            <HStack w={'77%'} justifyContent={'space-between'}>
              <Text
                mt={1}
                fontSize={'md'}
                color={Colors.blue}
                textAlign={'left'}>
                {cafe}
              </Text>
              <Image
                h={4}
                w={4}
                source={require('../../../assets/blueheart.png')}
                alt={'no img'}
              />
            </HStack>

            <Text textAlign={'left'} fontSize={'sm'} color={Colors.secondary}>
              {food}
            </Text>
            <HStack justifyContent={'space-between'}>
              <HStack w={'78%'} justifyContent={'space-between'}>
                <HStack alignItems={'center'} w={'77%'}>
                  <Image
                    p={1}
                    source={require('../../../assets/redheart.png')}
                    alt={'no img'}
                    h={3}
                    w={3}
                  />
                  <Text fontSize={'sm'} color={Colors.blue}>
                    {rating}
                  </Text>
                  <Entypo name="dot-single" size={20} color={Colors.blue} />
                  <Text fontSize={'sm'} color={Colors.blue}>
                    {dollar}
                  </Text>
                  <Entypo name="dot-single" size={20} color={Colors.blue} />
                  <Text fontSize={'sm'} color={Colors.blue}>
                    {distance}
                  </Text>
                </HStack>
                <Box bgColor={Colors.primary} borderRadius={100} p={1}>
                  <Image
                    h={3}
                    w={3}
                    source={require('../../../assets/whitemap.png')}
                    alt={'no img'}
                  />
                </Box>
              </HStack>
            </HStack>
          </VStack>
        </HStack>
        <Divider my={1} w={'80%'} alignSelf={'flex-end'} />
        <HStack p={1}>
          <Box>
            <Image
              bgColor={'red.100'}
              mx={2}
              my={2}
              p={7}
              h={'15%'}
              w={'20%'}
              source={require('../../../assets/pace.png')}
              alt={'no img'}
            />
          </Box>
          <VStack>
            <HStack w={'77%'} justifyContent={'space-between'}>
              <Text mt={1} fontSize={'md'} color={Colors.blue}>
                {cafe}
              </Text>
              <Image
                h={4}
                w={4}
                source={require('../../../assets/blueheart.png')}
                alt={'no img'}
              />
            </HStack>

            <Text textAlign={'left'} fontSize={'sm'} color={Colors.secondary}>
              {food}
            </Text>
            <HStack justifyContent={'space-between'}>
              <HStack w={'78%'} justifyContent={'space-between'}>
                <HStack alignItems={'center'} w={'77%'}>
                  <Image
                    p={1}
                    source={require('../../../assets/redheart.png')}
                    alt={'no img'}
                    h={3}
                    w={3}
                  />
                  <Text fontSize={'sm'} color={Colors.blue}>
                    {rating}
                  </Text>
                  <Entypo name="dot-single" size={20} color={Colors.blue} />
                  <Text fontSize={'sm'} color={Colors.blue}>
                    {dollar}
                  </Text>
                  <Entypo name="dot-single" size={20} color={Colors.blue} />
                  <Text fontSize={'sm'} color={Colors.blue}>
                    {distance}
                  </Text>
                </HStack>
                <Box bgColor={Colors.primary} borderRadius={100} p={1}>
                  <Image
                    h={3}
                    w={3}
                    source={require('../../../assets/whitemap.png')}
                    alt={'no img'}
                  />
                </Box>
              </HStack>
            </HStack>
          </VStack>
        </HStack>
        <Divider my={1} w={'80%'} alignSelf={'flex-end'} />
        <HStack p={1}>
          <Box>
            <Image
              mx={2}
              my={2}
              p={7}
              h={'15%'}
              w={'20%'}
              source={require('../../../assets/Cheesecake.png')}
              alt={'no img'}
            />
          </Box>
          <VStack>
            <HStack w={'77%'} justifyContent={'space-between'}>
              <Text mt={1} fontSize={'md'} color={Colors.blue}>
                {cafe}
              </Text>
              <Image
                h={4}
                w={4}
                source={require('../../../assets/blueheart.png')}
                alt={'no img'}
              />
            </HStack>

            <Text textAlign={'left'} fontSize={'sm'} color={Colors.secondary}>
              {food}
            </Text>
            <HStack justifyContent={'space-between'}>
              <HStack w={'78%'} justifyContent={'space-between'}>
                <HStack alignItems={'center'} w={'77%'}>
                  <Image
                    p={1}
                    source={require('../../../assets/redheart.png')}
                    alt={'no img'}
                    h={3}
                    w={3}
                  />
                  <Text fontSize={'sm'} color={Colors.blue}>
                    {rating}
                  </Text>
                  <Entypo name="dot-single" size={20} color={Colors.blue} />
                  <Text fontSize={'sm'} color={Colors.blue}>
                    {dollar}
                  </Text>
                  <Entypo name="dot-single" size={20} color={Colors.blue} />
                  <Text fontSize={'sm'} color={Colors.blue}>
                    {distance}
                  </Text>
                </HStack>
                <Box bgColor={Colors.primary} borderRadius={100} p={1}>
                  <Image
                    h={3}
                    w={3}
                    source={require('../../../assets/whitemap.png')}
                    alt={'no img'}
                  />
                </Box>
              </HStack>
            </HStack>
          </VStack>
        </HStack>
      </VStack>
    </Box>
  );
};
