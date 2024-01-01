import React, {FC} from 'react';

import {HStack, Box, VStack} from 'native-base';
import {Text, Image} from 'react-native';
import {Colors} from '../../../styles/Colors';
import FontStyle from '../../../styles/FontStyle';

type Props = {
  dollar: string;
  heading: string;
  rate: string;
  food: string;
  location: string;
  rating: string;
  reviews: string;
};

export const RestaurantDetailsCard: FC<Props> = ({
  dollar,
  heading,
  rate,
  food,
  location,
  rating,
  reviews,
}) => {
  return (
    <Box pb={5}>
      <HStack w={'95%'} justifyContent={'space-between'} alignItems={'center'}>
        <Text
          style={{
            color: Colors.primary,
            ...FontStyle.CustomFont,
            fontSize: 22,
            fontWeight: 600,
            marginLeft: 10,
          }}>
          {heading}
        </Text>
        <Image
          style={{height: 30, width: 30}}
          source={require('../../../assets/whatsapp.png')}
          alt={'no img'}
        />
      </HStack>
      <VStack mt={1}>
        <HStack ml={4}>
          <Image
            source={require('../../../assets/cutlery.png')}
            alt={'no img'}
            style={{height: 19.5, width: 10, marginRight: 10}}
          />
          <Text
            style={{
              color: Colors.blue,
              ...FontStyle.CustomFont,
              fontSize: 14,
              fontWeight: 400,
            }}>
            {food}
          </Text>
        </HStack>
        <HStack w={'95%'} justifyContent={'space-between'}>
          <HStack ml={3} mt={2}>
            <Image
              source={require('../../../assets/locationpin.png')}
              alt={'no img'}
              style={{height: 20, width: 20, marginRight: 7}}
            />
            <Text
              style={{
                color: Colors.secondary,
                ...FontStyle.CustomFont,
                fontSize: 13,
                fontWeight: 400,
              }}>
              {location}
            </Text>
          </HStack>

          <VStack borderRadius={3} borderWidth={1} borderColor={Colors.primary}>
            <HStack>
              <HStack px={1} alignItems={'center'} bg={Colors.primary}>
                <Image
                  source={require('../../../assets/whitestar.png')}
                  alt={'no img'}
                  style={{height: 10, width: 10, marginRight: 3}}
                />
                <Text
                  style={{
                    color: Colors.white,
                    ...FontStyle.CustomFont,
                    fontSize: 12,
                    fontWeight: 500,
                  }}>
                  {rating}
                </Text>
              </HStack>
              <HStack
                borderTopRightRadius={3}
                px={1}
                alignItems={'center'}
                bgColor={Colors.blue}>
                <Text
                  style={{
                    color: Colors.white,
                    ...FontStyle.CustomFont,
                    fontSize: 13,
                    fontWeight: 400,
                    marginHorizontal: 2,
                  }}>
                  {dollar}
                </Text>
              </HStack>
            </HStack>

            <HStack space={1} justifyContent={'center'} alignItems={'center'}>
              <Text
                style={{
                  color: Colors.primary,
                  ...FontStyle.CustomFont,
                  fontSize: 12,
                  fontWeight: 500,
                }}>
                {rate}
              </Text>
              <Text
                style={{
                  color: Colors.blue,
                  ...FontStyle.CustomFont,
                  fontSize: 12,
                  fontWeight: 500,
                }}>
                {reviews}
              </Text>
            </HStack>
          </VStack>
        </HStack>
      </VStack>
    </Box>
  );
};
