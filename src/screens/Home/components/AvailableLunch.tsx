import React, {FC} from 'react';

import {Box, HStack, Pressable, VStack, ScrollView} from 'native-base';
import {Colors} from '../../../styles/Colors';
import {Dimensions, Image, ImageBackground, View, Text} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import FontStyle from '../../../styles/FontStyle';
import {useTranslation} from 'react-i18next';

const {width, height} = Dimensions.get('screen');

const LunchCard: FC<{
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
      onPress={() => onPress(id)}
      shadow={2}
      mr={3}
      borderRadius={5}
      bgColor={'white'}
      style={{
        width: (width * 75) / 100,
      }}>
      <View
        style={{
          borderTopRightRadius: 5,
          borderTopLeftRadius: 5,
          overflow: 'hidden',
        }}>
        <ImageBackground
          style={{
            height: (width * 35) / 100,
            width: '100%',
          }}
          source={require('../../../assets/venueimage.png')}>
          <View
            style={{
              padding: 3,
              alignSelf: 'flex-end',
              backgroundColor: Colors.primary,
            }}>
            <Image
              style={{height: 17, width: 17}}
              source={require('../../../assets/wishlist.png')}
              alt={'no img'}
            />
          </View>
        </ImageBackground>
      </View>
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
              style={{height: 12, width: 12}}
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

export const AvailableLunch: FC<Props> = ({onPress, lunches = []}) => {
  const {t} = useTranslation();
  return (
    <View>
      <View
        style={{
          marginTop: 25,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 10,
        }}>
        <Text
          style={{
            ...FontStyle.CustomFont,
            fontWeight: 600,
            fontSize: 20,
            lineHeight: 20,
            color: Colors.primary,
            marginLeft: 13,
          }}>
          {t('Available for lunch')}
        </Text>

        <Image
          style={{height: 20, width: 20, marginRight: 10}}
          source={require('../../../assets/arrow.png')}
          alt={'no img'}
        />
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        p={1}
        horizontal={true}>
        <View
          style={{
            paddingVertical: 2,
            flex: 1,
            flexDirection: 'row',
            paddingLeft: 10,
          }}>
          {lunches.map(lunch => {
            return (
              <LunchCard
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
    </View>
  );
};
