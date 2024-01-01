import React, {FC} from 'react';

import {
  Box,
  Button,
  HStack,
  Image,
  ScrollView,
  Text,
  VStack,
} from 'native-base';
import {Pressable} from 'react-native';
import {Colors} from '../../../styles/Colors';
import {ReviewCard} from './component/ReviewCard';
import {RootStackScreenProps} from '../../../navigation/types';
import FontStyle from '../../../styles/FontStyle';
import {useTranslation} from 'react-i18next';

type Props = RootStackScreenProps<'Reviews'>;

export const ReviewListScreen: FC<Props> = ({navigation}) => {
  const {t} = useTranslation();
  return (
    <ScrollView bgColor={'white'} flex={1}>
      <ReviewCard
        text={'Everything was perfect and the service was very good'}
        rating={'4.0'}
        name={'Abbas Galiakot'}
        date={'09 Sept 2023'}
      />
      <Pressable
        onPress={() => navigation.navigate('Booking')}
        style={{
          marginTop: 30,
          alignSelf: 'center',
          borderRadius: 5,
          marginVertical: 2,
          width: '95%',
          height: 45,
          justifyContent: 'center',
          marginBottom: 10,
          backgroundColor: Colors.primary,
        }}>
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
