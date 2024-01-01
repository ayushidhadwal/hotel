import React, {FC, useState} from 'react';

import {
  RootBottomTabScreenProps,
  RootNavigationProps,
} from '../../navigation/types';
import {Colors} from '../../styles/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {HomeSlider} from '../../component/common/HomeSlider';

import {SliderList} from '../../data/SliderList';

import Entypo from 'react-native-vector-icons/Entypo';
import {
  Dimensions,
  Image,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  View,
  TextInput,
} from 'react-native';
import {HomeHeader} from './components/HomeHeader';
import {Cuisines} from './components/Cuisines';
import {AvailableLunch} from './components/AvailableLunch';
import {FeaturedRestaurant} from './components/FeaturedRestaurant';
import {SearchArea} from './components/SearchArea';
import {TopRated} from './components/TopRated';
import {ImageCard} from './components/ImageCard';
import {HStack, ScrollView, Pressable, Box} from 'native-base';
import {useTranslation} from 'react-i18next';

import {LocationHomeCard} from './components/LocationHomeCard';
import FontStyle from '../../styles/FontStyle';

type Props = RootBottomTabScreenProps<'HomeScreen'>;

const {width, height} = Dimensions.get('screen');

export const HomeScreen: FC<Props> = ({navigation}) => {
  const {t} = useTranslation();
  const [show, setShow] = useState(false);

  // console.log('lang', i18n.language);

  return (
    <SafeAreaView style={{backgroundColor: Colors.primary}} flex={1}>
      <StatusBar barStyle="light-content" backgroundColor={'#FE6150'} />
      <HStack space={2} p={3} bgColor={Colors.primary}>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            backgroundColor: 'white',
            borderRadius: 5,
          }}>
          <AntDesign
            name="search1"
            size={20}
            color={Colors.secondary}
            style={{marginLeft: 10, marginRight: 5}}
          />
          <TextInput
            style={{
              marginVertical: 1,
              marginLeft: 8,
              height: 35,
              width: 288,
              borderRadius: 5,
              backgroundColor: Colors.white,
              fontSize: 16,
              padding: 1,
              ...FontStyle.CustomFont,
              fontWeight: '400',
            }}
            placeholder={t('Search for restaurants or locations')}
            placeholderTextColor={Colors.secondary}
            // textAlign={'right'}
          />
        </View>

        <Pressable onPress={() => navigation.navigate('Notification')}>
          <Image
            style={{
              height: 26,
              width: 26,
              alignSelf: 'center',
              marginTop: 6,
              marginLeft: 10,
            }}
            source={require('../../assets/notification.png')}
            alt={'no img'}
          />
        </Pressable>
      </HStack>
      <ScrollView bgColor={'white'} showsVerticalScrollIndicator={false}>
        <Box flex={1} bgColor={'white'}>
          {show && <HomeHeader text1={'Nearby'} text2={'Map view'} />}
          <HomeSlider data={SliderList} />
          {!show ? (
            <LocationHomeCard onPress={() => setShow(true)} />
          ) : (
            <>
              <Cuisines heading={t('Cuisines')} country={t('American')} />
              <AvailableLunch
                onPress={() => navigation.navigate('RestaurantScreen')}
                lunches={[
                  {
                    id: '1',
                    rating: '4.3',
                    dollar: '$$$$',
                    cafe: 'Arabella cafe',
                    food: 'Italian, Japenese, cafe',
                    distance: '1.4 Km',
                  },
                  {
                    id: '2',
                    rating: '4.1',
                    dollar: '$$$$',
                    cafe: 'Ayu cafe',
                    food: 'Italian',
                    distance: '1.4 Km',
                  },
                ]}
              />
              {/**/}
              <FeaturedRestaurant
                heading={'FEATURED RESTAURANT \nOF THE DAY'}
                rating={'4.3'}
                food={'Italian, Japenese, cafe'}
                cafe={'Arabella cafe'}
                dollar={'$$$$'}
                distance={'1.4 Km'}
              />
              {/**/}
              <TopRated
                rating={'4.3'}
                food={'Italian, Japenese, cafe'}
                cafe={'Arabella cafe'}
                dollar={'$$$$'}
                distance={'1.4 Km'}
              />
              <ImageCard image={require('../../assets/canvaimage.png')} />
              {/**/}
              <SearchArea
                onPress={() => navigation.navigate('RestaurantScreen')}
                lunches={[
                  {
                    id: '1',
                    rating: '4.3',
                    dollar: '$$$$',
                    cafe: 'Arabella cafe',
                    food: 'Italian, Japenese, cafe',
                    distance: '1.4 Km',
                  },
                  {
                    id: '2',
                    rating: '4.3',
                    dollar: '$$$$',
                    cafe: 'Arabella cafe',
                    food: 'Italian, Japenese, cafe',
                    distance: '1.4 Km',
                  },
                  {
                    id: '3',
                    rating: '4.3',
                    dollar: '$$$$',
                    cafe: 'Arabella cafe',
                    food: 'Italian, Japenese, cafe',
                    distance: '1.4 Km',
                  },
                ]}
              />
            </>
          )}
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
};
