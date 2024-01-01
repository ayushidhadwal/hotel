import React, {FC} from 'react';

import {Box, Button, HStack, ScrollView, VStack} from 'native-base';
import {RootStackScreenProps} from '../../navigation/types';

import MapView from 'react-native-maps';
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Text,
  Platform,
  Pressable,
  StatusBar,
} from 'react-native';
import {LocationCard} from './components/LocationCard';
import {TopRated} from '../Home/components/TopRated';
import {Colors} from '../../styles/Colors';
import Entypo from 'react-native-vector-icons/Entypo';
import FontStyle from '../../styles/FontStyle';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

type Props = RootStackScreenProps<'Location'>;

export const LocationScreen: FC<Props> = ({navigation}) => {
  const {top, bottom} = useSafeAreaInsets();

  return (
    <View style={{flex: 1}}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={'transparent'}
        translucent={true}
      />
      <MapView
        style={{width: '100%', height: '100%'}}
        showsCompass
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />

      <View
        style={{
          // backgroundColor: 'white',
          marginTop: Platform.OS === 'ios' ? 30 : 40,
          position: 'absolute',
          left: 0,
          right: 0,
          top: top,
          paddingHorizontal: 12,
        }}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={{
            backgroundColor: Colors.primary,
            borderRadius: 100,
            height: 30,
            width: 30,
          }}>
          <Image
            source={require('../../assets/whitebackarrow.png')}
            alt={'no img'}
            style={{height: 30, width: 30}}
          />
        </Pressable>
      </View>

      <ScrollView
        bottom={10}
        position={'absolute'}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        <View p={1} mx={3} flexDirection={'row'}>
          <LocationCard
            rating={'4.3'}
            food={'Italian, Japenese, cafe'}
            cafe={'Arabella cafe'}
            dollar={'$$$$'}
            distance={'1.4 Km'}
          />
          <LocationCard
            rating={'4.3'}
            food={'Italian, Japenese, cafe'}
            cafe={'Arabella cafe'}
            dollar={'$$$$'}
            distance={'1.4 Km'}
          />
          <LocationCard
            rating={'4.3'}
            food={'Italian, Japenese, cafe'}
            cafe={'Arabella cafe'}
            dollar={'$$$$'}
            distance={'1.4 Km'}
          />
        </View>
      </ScrollView>
    </View>
  );
};
