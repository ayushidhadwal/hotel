import React, {FC, useContext} from 'react';

import {RootBottomTabScreenProps} from '../../navigation/types';

import {Colors} from '../../styles/Colors';
import {View, Text, Pressable, Image, I18nManager} from 'react-native';
import FontStyle from '../../styles/FontStyle';
import {Input, Box, HStack} from 'native-base';
import {save, saveString} from '../../utils/storage';
import RNRestart from 'react-native-restart';
import Config from '../../config';
import {LangContext, useLanguage} from '../../context/LanguageProvider';
import i18n from 'i18next';
import {useTranslation} from 'react-i18next';

type Props = RootBottomTabScreenProps<'ChangeLanguage'>;

export const ChangeLanguageScreen: FC<Props> = ({navigation}) => {
  const {t} = useTranslation();

  const updateLanguage = async (lang: 'ar' | 'en') => {
    const isRtl = lang === 'ar';

    i18n?.changeLanguage(lang);
    I18nManager.allowRTL(isRtl);
    I18nManager.forceRTL(isRtl);
    I18nManager.swapLeftAndRightInRTL(isRtl);
    await saveString(Config.USER_LANG, lang);
    RNRestart.restart();
  };

  return (
    <Box bgColor={Colors.primary} safeAreaBottom flex={1}>
      <Box flex={1} justifyContent={'center'} alignItems={'center'}>
        <View>
          <Image
            style={{width: 120, height: 120}}
            source={require('../../assets/whitecalendar.png')}
          />
        </View>
      </Box>
      <HStack w={'90%'} alignSelf={'center'} justifyContent={'space-between'}>
        <Pressable
          onPress={() => updateLanguage('en')}
          style={{
            // marginTop: 20,

            borderRadius: 5,
            marginVertical: 15,
            width: 160,
            height: 41,
            justifyContent: 'center',
            marginBottom: 10,
            backgroundColor: Colors.white,
          }}>
          <Text
            style={{
              ...FontStyle.CustomFont,
              fontSize: 22,
              fontWeight: 600,
              color: Colors.primary,
              textAlign: 'center',
            }}>
            English
          </Text>
        </Pressable>
        <Pressable
          onPress={() => updateLanguage('ar')}
          style={{
            // marginTop: 20,

            borderRadius: 5,
            marginVertical: 15,
            width: 160,
            height: 41,
            justifyContent: 'center',
            marginBottom: 10,
            borderColor: Colors.white,
            borderWidth: 1,
          }}>
          <Text
            style={{
              ...FontStyle.CustomFont,
              fontSize: 22,
              fontWeight: 600,
              color: Colors.white,
              textAlign: 'center',
            }}>
            العربية
          </Text>
        </Pressable>
      </HStack>
    </Box>
  );
};
