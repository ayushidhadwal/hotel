import React, {FC} from 'react';

import {Box, Button, HStack, Pressable, ScrollView, Text} from 'native-base';
import {RootBottomTabScreenProps} from '../../navigation/types';
import {Image, SafeAreaView, StatusBar, TextInput, View} from 'react-native';
import {Colors} from '../../styles/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontStyle from '../../styles/FontStyle';
import {red} from 'react-native-reanimated/lib/typescript/reanimated2/Colors';
import {useTranslation} from 'react-i18next';

type Props = RootBottomTabScreenProps<'Search'>;

export const SearchScreen: FC<Props> = ({navigation}) => {
  const {t} = useTranslation();
  return (
    <Box flex={1} bgColor={'white'}>
      <SafeAreaView style={{backgroundColor: Colors.primary}}>
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
      </SafeAreaView>
      <View style={{marginVertical: 270}}>
        <Image
          style={{alignSelf: 'center', height: 80, width: 80}}
          source={require('../../assets/redrestaurant.png')}
          alt={'no img'}
        />
        <Text
          style={{
            ...FontStyle.CustomFont,
            color: Colors.primary,
            fontSize: 20,
            fontWeight: 600,
            textAlign: 'center',
          }}>
          {t('Search restaurants')}
        </Text>
      </View>
    </Box>
  );
};
