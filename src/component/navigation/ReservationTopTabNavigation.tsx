import React, {FC, useState} from 'react';

import {Box, Button, HStack, ScrollView} from 'native-base';
import {Image, Pressable, View, Text} from 'react-native';
import {RootBottomTabScreenProps} from '../../navigation/types';
import FontStyle from '../../styles/FontStyle';
import {Colors} from '../../styles/Colors';
import {PastScreen, ScheduledScreen} from '../../screens/Reservation';
import {useTranslation} from 'react-i18next';

type Props = RootBottomTabScreenProps<'ReservationTopTab'>;

export const ReservationTopTabNavigation: FC<Props> = ({navigation}) => {
  const {t} = useTranslation();
  const [screen, setScreen] = useState<string>('Scheduled');

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 30,
          justifyContent: 'space-between',
          marginHorizontal: 20,
          marginBottom: 2,
        }}>
        <Pressable
          onPress={() => setScreen('Scheduled')}
          style={{
            elevation: 5,
            shadowColor: 'black', // Shadow color
            shadowOffset: {width: 0, height: 2}, // Shadow offset (x, y)
            shadowOpacity: 0.3, // Shadow opacity
            shadowRadius: 2,
            width: 170,
            height: 30,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor:
              screen === 'Scheduled' ? Colors.primary : '#F0F0F0',
            borderRadius: 4,
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 500,
              ...FontStyle.CustomFont,
              color: screen === 'Scheduled' ? Colors.white : Colors.primary,
            }}>
            {t('Scheduled')}
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setScreen('Past')}
          style={{
            elevation: 5,
            shadowColor: 'black', // Shadow color
            shadowOffset: {width: 0, height: 2}, // Shadow offset (x, y)
            shadowOpacity: 0.3, // Shadow opacity
            shadowRadius: 2,
            width: 170,
            height: 30,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: screen === 'Past' ? Colors.primary : '#F0F0F0',
            borderRadius: 4,
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 500,
              ...FontStyle.CustomFont,
              color: screen === 'Past' ? Colors.white : Colors.primary,
            }}>
            {t('Past')}
          </Text>
        </Pressable>
      </View>
      {screen === 'Scheduled' ? (
        <ScheduledScreen />
      ) : (
        screen === 'Past' && <PastScreen />
      )}
    </View>
  );
};
