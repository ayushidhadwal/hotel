import React, {FC} from 'react';

import {HStack, Image, Box, VStack, ScrollView, Pressable} from 'native-base';
import {Colors} from '../../../styles/Colors';
import {Dimensions, ImageBackground, Text, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import FontStyle from '../../../styles/FontStyle';
const {width, height} = Dimensions.get('screen');

const WishListNearCard: FC<{
  id: string;
  rating: string;
  dollar: string;
  cafe: string;
  food: string;
  distance: string;
  // onPress: (id: string) => void;
}> = ({id, rating, distance, dollar, food, cafe, onPress}) => {
  return (
    <Pressable
      ml={2}
      mt={3}
      alignSelf={'center'}
      // onPress={() => onPress(id)}
      shadow={2}
      mr={3}
      borderRadius={5}
      bgColor={'white'}
      style={{
        width: (width * 90) / 100,
      }}>
      <Box borderTopRadius={5} overflow="hidden">
        <ImageBackground
          style={{
            height: (width * 35) / 100,
            width: '100%',
          }}
          source={require('../../../assets/venueimage.png')}>
          <Box p={1} alignSelf={'flex-end'} bgColor={Colors.primary}>
            <Image
              h={5}
              w={5}
              source={require('../../../assets/heart.png')}
              alt={'no img'}
            />
          </Box>
        </ImageBackground>
      </Box>
      <VStack pl={2} pt={1}>
        <Text
          style={{
            ...FontStyle.CustomFont,
            fontWeight: 500,
            fontSize: 16,
            color: Colors.primary,
          }}>
          {cafe}
        </Text>
        <Text
          style={{
            ...FontStyle.CustomFont,
            fontWeight: 400,
            fontSize: 14,
            color: Colors.secondary,
          }}>
          {food}
        </Text>
        <HStack justifyContent={'space-between'}>
          <HStack alignItems={'center'} w={'60%'}>
            <Image
              style={{height: 11, width: 11}}
              source={require('../../../assets/star.png')}
              alt={'no img'}
            />
            <Text
              style={{
                ...FontStyle.CustomFont,
                fontWeight: 400,
                fontSize: 14,
                color: '#04AA3D',
                marginLeft: 4,
              }}>
              {rating}
            </Text>
            <Entypo name="dot-single" size={20} color={Colors.secondary} />
            <Text
              style={{
                ...FontStyle.CustomFont,
                fontWeight: 400,
                fontSize: 14,
                color: Colors.primary,
              }}>
              {dollar}
            </Text>
            <Entypo name="dot-single" size={20} color={Colors.secondary} />
            <Text
              style={{
                ...FontStyle.CustomFont,
                fontWeight: 400,
                fontSize: 14,
                color: Colors.primary,
              }}>
              {distance}
            </Text>
          </HStack>

          <Box p={2} borderRadius={100} backgroundColor={Colors.primary}>
            <Image
              style={{height: 12, width: 11.97}}
              source={require('../../../assets/Vector.png')}
              alt={'no img'}
            />
          </Box>
        </HStack>
      </VStack>
    </Pressable>
  );
};

type Props = {
  // onPress: (id: string) => void;
  lunches: {
    id: string;
    rating: string;
    dollar: string;
    cafe: string;
    food: string;
    distance: string;
  }[];
};

export const WishListCard: FC<Props> = ({onPress, lunches = []}) => {
  return (
    <ScrollView mt={2} showsVerticalScrollIndicator={false} p={1}>
      <View
        style={{
          flex: 1,
          paddingLeft: 5,
          flexDirection: 'column',
          marginBottom: 15,
        }}>
        {lunches.map(lunch => {
          return (
            <WishListNearCard
              key={lunch.id}
              // onPress={onPress}
              id={lunch.id}
              cafe={lunch.cafe}
              rating={lunch.rating}
              distance={lunch.distance}
              dollar={lunch.dollar}
              food={lunch.food}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};
