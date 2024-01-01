import React, {FC} from 'react';

import {HStack, Image, Box, VStack, ScrollView, Pressable} from 'native-base';
import {Colors} from '../../../styles/Colors';
import {Dimensions, ImageBackground, Text, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import FontStyle from '../../../styles/FontStyle';
import {useTranslation} from 'react-i18next';
const {width, height} = Dimensions.get('screen');

const LocationCard: FC<{location: string}> = ({location}) => {
  return (
    <Box
      px={3}
      py={1}
      mr={2}
      backgroundColor={'white'}
      shadow={2}
      borderRadius={5}>
      <Text
        style={{
          ...FontStyle.CustomFont,
          textAlign: 'center',
          fontWeight: 400,
          fontSize: 14,
          color: Colors.black,
        }}>
        {location}
      </Text>
    </Box>
  );
};

const SearchCard: FC<{
  id: string;
  rating: string;
  dollar: string;
  cafe: string;
  food: string;
  distance: string;
  onPress: (id: string) => void;
}> = ({id, rating, distance, dollar, food, cafe, onPress}) => {
  return (
    <Pressable
      ml={2}
      mt={3}
      alignSelf={'center'}
      onPress={() => onPress(id)}
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
              source={require('../../../assets/wishlist.png')}
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
            textAlign: 'left',
          }}>
          {cafe}
        </Text>
        <Text
          style={{
            ...FontStyle.CustomFont,
            fontWeight: 400,
            fontSize: 14,
            color: Colors.secondary,
            textAlign: 'left',
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
                textAlign: 'left',
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

          <Box
            mr={1}
            borderRadius={100}
            backgroundColor={Colors.primary}
            padding={1}
            alignItems={'center'}
            justifyContent={'center'}
            mb={1}>
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
  onPress: (id: string) => void;
  lunches: {
    id: string;
    rating: string;
    dollar: string;
    cafe: string;
    food: string;
    distance: string;
  }[];
};

export const SearchArea: FC<Props> = ({onPress, lunches = []}) => {
  const {t} = useTranslation();
  return (
    <Box>
      <HStack px={3} pt={3} justifyContent={'space-between'}>
        <Text
          style={{
            ...FontStyle.CustomFont,
            fontWeight: 600,
            fontSize: 20,
            lineHeight: 20,
            color: Colors.primary,

            // marginLeft: 5,
          }}>
          {t('Search by area')}
        </Text>
      </HStack>
      <ScrollView
        margin={2}
        // bgColor={'yellow.100'}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        <View
          style={{marginVertical: 5, marginLeft: 4}}
          w={'100%'}
          flexDirection={'row'}>
          <LocationCard location="Salmiya" />
          <LocationCard location="Kuwait city" />
          <LocationCard location="Qurain" />
          <LocationCard location="Salmiya" />
          <LocationCard location="Salmiya" />
          <LocationCard location="Kuwait city" />
        </View>
      </ScrollView>

      <ScrollView showsVerticalScrollIndicator={false} p={1}>
        <View style={{flex: 1, paddingLeft: 5, flexDirection: 'column'}}>
          {lunches.map(lunch => {
            return (
              <SearchCard
                key={lunch.id}
                onPress={onPress}
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
    </Box>
  );
};
