import React, {FC} from 'react';

import {Box, HStack, Pressable} from 'native-base';
import {RootBottomTabScreenProps} from '../../navigation/types';
import {RestaurantCard} from '../ListingView/component/RestaurantCard';
import {WishListCard} from './components/WishListCard';
import {Image, Text, View} from 'react-native';
import {Colors} from '../../styles/Colors';
import FontStyle from '../../styles/FontStyle';
import {useTranslation} from 'react-i18next';

type Props = RootBottomTabScreenProps<'WishList'>;

export const WishListScreen: FC<Props> = ({navigation}) => {
  const {t} = useTranslation();
  return (
    <Box flex={1} bgColor={Colors.white}>
      {/*<Box flex={1} bgColor={Colors.primary}>*/}
      {/*<View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>*/}
      {/*  <Image*/}
      {/*    style={{height: 102, width: 143}}*/}
      {/*    source={require('../../assets/emptywishlist.png')}*/}
      {/*    alt={'no img'}*/}
      {/*  />*/}
      {/*  <Text*/}
      {/*    style={{*/}
      {/*      ...FontStyle.CustomFont,*/}
      {/*      color: Colors.white,*/}
      {/*      fontSize: 20,*/}
      {/*      fontWeight: 600,*/}
      {/*    }}>*/}
      {/*{t('No restaurants found')}*/}
      {/*  </Text>*/}
      {/*  <Text*/}
      {/*    style={{*/}
      {/*      ...FontStyle.CustomFont,*/}
      {/*      color: Colors.white,*/}
      {/*      fontSize: 16,*/}
      {/*      fontWeight: 500,*/}
      {/*    }}>*/}
      {/*{t('Create your personalized list')}*/}
      {/*  </Text>*/}
      {/*</View>*/}
      <RestaurantCard
        lunches={[
          {
            id: '1',
            rating: '4.3',
            dollar: '$$$$',
            cafe: 'Arabella cafe',
            food: 'Italian, Japenese, cafe',
            distance: '1.4 Km',
            onPress: navigation.navigate('Location'),
          },
          {
            id: '2',
            rating: '4.3',
            dollar: '$$$$',
            cafe: 'Arabella cafe',
            food: 'Italian, Japenese, cafe',
            distance: '1.4 Km',
            onPress: navigation.navigate('Location'),
          },
          {
            id: '3',
            rating: '4.3',
            dollar: '$$$$',
            cafe: 'Arabella cafe',
            food: 'Italian, Japenese, cafe',
            distance: '1.4 Km',
            onPress: navigation.navigate('Location'),
          },
        ]}
      />
    </Box>
  );
};
