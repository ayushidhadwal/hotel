import React, {FC} from 'react';

import {Box} from 'native-base';
import {RootStackScreenProps} from '../../navigation/types';

import {I18nManager, View, Text, Image, Pressable} from 'react-native';

import FontStyle from '../../styles/FontStyle';
import {Colors} from '../../styles/Colors';
import {useTranslation} from 'react-i18next';

type Props = RootStackScreenProps<'ContactUs'>;

export const ContactUsScreen: FC<Props> = ({navigation}) => {
  const {t} = useTranslation();
  return (
    <Box bgColor={'white'} flex={1}>
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: 'white',
          borderRadius: 4,
          elevation: 5,
          shadowColor: 'black', // Shadow color
          shadowOffset: {width: 0, height: 2}, // Shadow offset (x, y)
          shadowOpacity: 0.3, // Shadow opacity
          shadowRadius: 2,
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 50,
        }}>
        <Image
          style={{height: 75, width: 75}}
          source={require('../../assets/customersupport.png')}
          alt={'no img'}
        />
      </View>
      <View style={{alignItems: 'center', marginTop: 30}}>
        <Text
          style={{
            color: Colors.primary,
            ...FontStyle.CustomFont,
            fontSize: 18,
            fontWeight: 500,
          }}>
          {t('Need help?')}
        </Text>
        <Text
          style={{
            color: '#808080',
            ...FontStyle.CustomFont,
            fontSize: 14,
            fontWeight: 500,
            marginTop: 10,
          }}>
          {t('Our agents are here for your support')}
        </Text>
      </View>
      <Pressable
        style={{
          height: 38,
          width: 350,
          backgroundColor: 'white',
          borderRadius: 4,
          flexDirection: 'row',
          elevation: 5,
          shadowColor: 'black', // Shadow color
          shadowOffset: {width: 0, height: 2}, // Shadow offset (x, y)
          shadowOpacity: 0.3, // Shadow opacity
          shadowRadius: 2,
          alignSelf: 'center',
          alignItems: 'center',
          padding: 8,
          marginTop: 30,
        }}>
        <Image
          style={{height: 22, width: 22, marginRight: 12, marginLeft: 5}}
          alt={'no img'}
          source={require('../../assets/callcopy.png')}
        />
        <Text
          style={{
            fontSize: 16,
            fontWeight: 500,
            ...FontStyle.CustomFont,
            color: Colors.primary,
          }}>
          {t('Call')}
        </Text>
      </Pressable>
      <Pressable
        style={{
          height: 38,
          width: 350,
          backgroundColor: 'white',
          borderRadius: 4,
          flexDirection: 'row',
          elevation: 5,
          shadowColor: 'black', // Shadow color
          shadowOffset: {width: 0, height: 2}, // Shadow offset (x, y)
          shadowOpacity: 0.3, // Shadow opacity
          shadowRadius: 2,
          alignSelf: 'center',
          alignItems: 'center',
          padding: 8,
          marginTop: 20,
        }}>
        <Image
          style={{height: 22, width: 22, marginRight: 12, marginLeft: 5}}
          alt={'no img'}
          source={require('../../assets/whatsappcircle.png')}
        />
        <Text
          style={{
            fontSize: 16,
            fontWeight: 500,
            ...FontStyle.CustomFont,
            color: Colors.primary,
          }}>
          {t('WhatsApp')}
        </Text>
      </Pressable>
      <Pressable
        style={{
          height: 38,
          width: 350,
          backgroundColor: 'white',
          borderRadius: 4,
          flexDirection: 'row',
          elevation: 5,
          shadowColor: 'black', // Shadow color
          shadowOffset: {width: 0, height: 2}, // Shadow offset (x, y)
          shadowOpacity: 0.3, // Shadow opacity
          shadowRadius: 2,
          alignSelf: 'center',
          alignItems: 'center',
          padding: 8,
          marginTop: 20,
        }}>
        <Image
          style={{height: 24, width: 24, marginRight: 12, marginLeft: 5}}
          alt={'no img'}
          source={require('../../assets/livechat.png')}
        />
        <Text
          style={{
            fontSize: 16,
            fontWeight: 500,
            ...FontStyle.CustomFont,
            color: Colors.primary,
          }}>
          {t('Live chat')}
        </Text>
      </Pressable>
    </Box>
  );
};
