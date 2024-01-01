import React, {FC} from 'react';

import {RootBottomTabScreenProps} from '../../navigation/types';

import {Colors} from '../../styles/Colors';
import {View, Text, Pressable, Image} from 'react-native';
import FontStyle from '../../styles/FontStyle';
import {Input, Box, HStack, Divider} from 'native-base';
import {Header} from '../../component/common/Header';
import {useTranslation} from 'react-i18next';

type Props = RootBottomTabScreenProps<'AboutApp'>;

export const AboutAppScreen: FC<Props> = ({navigation}) => {
  const {t} = useTranslation();
  return (
    <Box bgColor={Colors.white} safeAreaBottom flex={1}>
      <Pressable
        onPress={() => navigation.navigate('About')}
        style={{
          height: 42,
          width: 328,
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
          marginTop: 40,
        }}>
        <Image
          style={{height: 24, width: 24, marginRight: 12}}
          alt={'no img'}
          source={require('../../assets/about.png')}
        />
        <Text
          style={{
            fontSize: 16,
            fontWeight: 500,
            ...FontStyle.CustomFont,
            color: Colors.primary,
          }}>
          {t('About')}
        </Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate('TermsConditions')}
        style={{
          height: 42,
          width: 328,
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
          marginTop: 15,
        }}>
        <Image
          style={{height: 24, width: 24, marginRight: 12}}
          alt={'no img'}
          source={require('../../assets/documents.png')}
        />
        <Text
          style={{
            fontSize: 16,
            fontWeight: 500,
            ...FontStyle.CustomFont,
            color: Colors.primary,
          }}>
          {t('Terms and conditions')}
        </Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate('PrivacyPolicy')}
        style={{
          height: 42,
          width: 328,
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
          marginTop: 15,
        }}>
        <Image
          style={{height: 24, width: 24, marginRight: 12}}
          alt={'no img'}
          source={require('../../assets/unlock.png')}
        />
        <Text
          style={{
            fontSize: 16,
            fontWeight: 500,
            ...FontStyle.CustomFont,
            color: Colors.primary,
          }}>
          {t('Privacy policy')}
        </Text>
      </Pressable>
      <HStack alignItems={'center'} marginTop={20}>
        <Divider w={'30%'} />
        <Text
          style={{
            fontSize: 16,
            fontWeight: 500,
            ...FontStyle.CustomFont,
            color: Colors.primary,
            textAlign: 'center',
            marginHorizontal: 15,
          }}>
          {t('Stay connected with us')}
        </Text>
        <Divider w={'30%'} />
      </HStack>

      <HStack mx={12} mt={18} justifyContent={'space-between'}>
        <Image
          style={{height: 30, width: 30}}
          source={require('../../assets/instagram.png')}
        />
        <Image
          style={{height: 30, width: 30}}
          source={require('../../assets/facebook.png')}
        />
        <Image
          style={{height: 30, width: 30}}
          source={require('../../assets/snapchat.png')}
        />
        <Image
          style={{height: 30, width: 30}}
          source={require('../../assets/whatsappcopy.png')}
        />
      </HStack>
    </Box>
  );
};
