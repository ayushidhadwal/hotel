import React, {FC} from 'react';

import {Box, Button, HStack, ScrollView, TextArea, View} from 'native-base';
import {Pressable, Text} from 'react-native';
import {RootBottomTabScreenProps} from '../../navigation/types';
import {Colors} from '../../styles/Colors';
import CalendarStrip from 'react-native-calendar-strip';
import {Dimensions} from 'react-native';
import moment from 'moment';
import FontStyle from '../../styles/FontStyle';
import {useTranslation} from 'react-i18next';

type Props = RootBottomTabScreenProps<'Booking'>;

const GuestCard: FC<{guest: string}> = ({guest}) => {
  return (
    <Box
      // w={'20%'}
      // bgColor={'red.300'}
      backgroundColor={'white'}
      shadow={2}
      borderRadius={4}
      px={4}
      py={2}
      mr={3}>
      <Text
        style={{
          ...FontStyle.CustomFont,
          textAlign: 'center',
          color: Colors.secondary,
          fontSize: 24,
          fontWeight: '500',
        }}>
        {guest}
      </Text>
    </Box>
  );
};

const TimingCard: FC<{time: string}> = ({time}) => {
  return (
    <Box mr={3} borderRadius={4} px={3} py={1} bgColor={'white'} shadow={2}>
      <Text
        style={{
          ...FontStyle.CustomFont,
          fontWeight: '500',
          fontSize: 16,
          color: Colors.secondary,
        }}>
        {time}
      </Text>
    </Box>
  );
};

export const BookingScreen: FC<Props> = ({navigation}) => {
  const {t} = useTranslation();
  const WIDTH = Dimensions.get('screen').width;

  return (
    <ScrollView backgroundColor={'white'} flex={1}>
      <Text
        style={{
          marginLeft: 10,
          marginTop: 20,
          ...FontStyle.CustomFont,
          fontSize: 18,
          fontWeight: '600',
          color: Colors.primary,
          textAlign: 'left',
        }}>
        {t('Select date')}
      </Text>
      <CalendarStrip
        iconLeft={false}
        iconRight={false}
        // scrollable={!I18nManager.isRTL || Platform.OS === 'ios'}
        scrollable={true}
        selectedDate={new Date()}
        onDateSelected={date => moment(date).format('YYYY-MM-DD')}
        style={{
          height: 120,
          width: WIDTH,
          backgroundColor: 'white',
        }}
        dateNumberStyle={{
          color: Colors.secondary,
          fontSize: 10,
        }}
        dayContainerStyle={{
          backgroundColor: Colors.white,
          // width: 80,
          height: 40,
          borderColor: Colors.secondary,
          elevation: 5,

          borderRadius: 5,
        }}
        dateNameStyle={{
          color: Colors.secondary,
          fontSize: 13,
          fontWeight: 'bold',
        }}
        calendarAnimation={{type: 'sequence', duration: 30}}
        highlightDateNumberStyle={{color: Colors.white, fontSize: 10}}
        highlightDateNameStyle={{
          color: Colors.white,
          fontSize: 13,
          fontWeight: 'bold',
        }}
        calendarHeaderStyle={{
          color: Colors.secondary,
          fontWeight: 'bold',
        }}
        highlightDateContainerStyle={{
          backgroundColor: Colors.primary,
          borderColor: Colors.primary,
        }}
        daySelectionAnimation={{
          type: 'border',
          duration: 200,
          borderWidth: 1,
          borderHighlightColor: '#ffd53d',
        }}
        // locale={locale}
      />
      <Text
        style={{
          marginLeft: 10,

          ...FontStyle.CustomFont,
          fontSize: 18,
          fontWeight: '600',
          color: Colors.primary,
          textAlign: 'left',
        }}>
        {t('Select guests')}
      </Text>
      <ScrollView
        mt={1}
        // bgColor={'red.500'}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        <View p={1} mx={3} flexDirection={'row'}>
          <GuestCard guest={1} />
          <GuestCard guest={2} />
          <GuestCard guest={3} />
          <GuestCard guest={4} />
          <GuestCard guest={6} />
          <GuestCard guest={7} />
          <GuestCard guest={8} />
          <GuestCard guest={9} />
        </View>
      </ScrollView>

      <Text
        style={{
          marginLeft: 10,
          marginTop: 40,
          ...FontStyle.CustomFont,
          fontSize: 18,
          fontWeight: '600',
          color: Colors.primary,
          textAlign: 'left',
        }}>
        {t('Available timings')}
      </Text>
      <ScrollView
        mt={1}
        // bgColor={'red.500'}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        <View p={1} mx={3} flexDirection={'row'}>
          <TimingCard time={'6:00 PM'} />
          <TimingCard time={'6:15 PM'} />
          <TimingCard time={'6:30 PM'} />
          <TimingCard time={'7:00 PM'} />
          <TimingCard time={'7:15 PM'} />
          <TimingCard time={'7:30 PM'} />
        </View>
      </ScrollView>

      <Text
        style={{
          marginLeft: 10,
          marginTop: 40,
          ...FontStyle.CustomFont,
          fontSize: 18,
          fontWeight: '600',
          color: Colors.primary,
          textAlign: 'left',
        }}>
        {t('Special notes')}
      </Text>
      <Box alignItems="center" w="100%">
        <TextArea
          // mb={8}
          multiline={true}
          minHeight={100}
          focusOutlineColor={Colors.primary}
          borderColor={'white'}
          backgroundColor={'white'}
          shadow={2}
          mt={2}
          h={20}
          placeholder={t('Ex- Food Allergies')}
          w="92%"
        />
      </Box>

      <Text
        style={{
          ...FontStyle.CustomFont,
          fontWeight: '500',
          fontSize: 12,
          textAlign: 'center',
          marginTop: 45,
          color: Colors.secondary,
        }}>
        {t("By reserving you agree to the hungry's")} {''}
        <Text style={{color: Colors.primary}}>{t('Privacy Policy')}</Text>
        {''} {t('and')}
        {''}
        <Text style={{color: Colors.primary}}>{t('Terms of use.')}</Text>
      </Text>

      <Pressable
        onPress={() => navigation.navigate('BookingSuccess')}
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
            fontWeight: '600',
            color: Colors.white,
            textAlign: 'center',
          }}>
          {t('Reserve now')}
        </Text>
      </Pressable>
    </ScrollView>
  );
};
