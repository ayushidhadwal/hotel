import React, {FC} from 'react';

import {Box, Button, HStack, Pressable, ScrollView} from 'native-base';

import {RootStackScreenProps} from '../../navigation/types';

import {FlatList, Text, Image} from 'react-native';
import {Colors} from '../../styles/Colors';
import FontStyle from '../../styles/FontStyle';
import {useTranslation} from 'react-i18next';

type Props = RootStackScreenProps<'Menus'>;

const data = [
  {
    id: 1,
    name: 'Appetizer',
    img: require('../../assets/food.png'),
  },
  {
    id: 2,
    name: 'Sandwiches',
    img: require('../../assets/Sandwiches.png'),
  },
  {
    id: 3,
    name: 'Salads',
    img: require('../../assets/Salads.png'),
  },
  {
    id: 4,
    name: 'Pizza',
    img: require('../../assets/pizza.png'),
  },
  {
    id: 5,
    name: 'Sides',
    img: require('../../assets/sides.png'),
  },
  {
    id: 6,
    name: 'Breakfast',
    img: require('../../assets/breakfast.png'),
  },
  {
    id: 7,
    name: 'Pastas',
    img: require('../../assets/pastas.png'),
  },
  {
    id: 8,
    name: 'Indians',
    img: require('../../assets/indians.png'),
  },
  {
    id: 9,
    name: 'Japenese',
    img: require('../../assets/japenese.png'),
  },
  {
    id: 10,
    name: 'Pizza',
    img: require('../../assets/pizza.png'),
  },
  {
    id: 11,
    name: 'Sides',
    img: require('../../assets/sides.png'),
  },
  {
    id: 12,
    name: 'Breakfast',
    img: require('../../assets/breakfast.png'),
  },
];

export const MenuListScreen: FC<Props> = ({navigation, name}) => {
  const {t} = useTranslation();
  const renderItem = ({item}: {item: any}) => {
    return (
      <Box flex={1} bgColor={'white'}>
        <Pressable
          style={{width: 100, height: 122, marginHorizontal: 15}}
          onPress={() => navigation.navigate('Appetizers')}
          borderRadius={4}
          my={3}
          backgroundColor={'white'}
          shadow={2}>
          <Image
            style={{
              height: 100,
              width: 100,
            }}
            source={item.img}
            alt={'no img'}
          />
          <Text
            style={{
              ...FontStyle.CustomFont,
              color: Colors.primary,
              textAlign: 'center',
              fontWeight: 500,
              fontSize: 14,
            }}
            textAlign={'center'}
            color={Colors.primary}>
            {item.name}
          </Text>
        </Pressable>
      </Box>
    );
  };
  return (
    <ScrollView bgColor={'white'} flex={1}>
      <FlatList
        data={data}
        numColumns={3}
        renderItem={renderItem}
        keyExtractor={(item, index) => index}
      />
      <Pressable
        style={{
          marginTop: 30,
          alignSelf: 'center',
          borderRadius: 5,
          marginVertical: 2,
          width: '95%',
          height: 45,
          justifyContent: 'center',
          marginBottom: 10,
        }}
        backgroundColor={Colors.primary}>
        <Text
          style={{
            ...FontStyle.CustomFont,
            fontSize: 22,
            fontWeight: 600,
            color: Colors.white,
            textAlign: 'center',
          }}>
          {t('Reserve now')}
        </Text>
      </Pressable>
    </ScrollView>
  );
};
