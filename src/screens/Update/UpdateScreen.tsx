import React, {FC} from 'react';

import {Box, Pressable, TextArea, ScrollView} from 'native-base';
import {
  RootBottomTabScreenProps,
  RootStackScreenProps,
} from '../../navigation/types';
import {Image, Text} from 'react-native';
import {Colors} from '../../styles/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontStyle from '../../styles/FontStyle';
import {red} from 'react-native-reanimated/lib/typescript/reanimated2/Colors';
import {useTranslation} from 'react-i18next';

type Props = RootStackScreenProps<'Review'>;

export const UpdateScreen: FC<Props> = ({navigation}) => {
  const {t} = useTranslation();
  return (
    <Box safeAreaBottom flex={1} bgColor={Colors.primary}>
      <Box justifyContent={'center'} alignItems={'center'} flex={1}>
        <Image
          source={require('../../assets/update.png')}
          alt={'no img'}
          style={{width: 100, height: 100}}
        />
        <Text
          style={{
            fontWeight: 600,
            fontSize: 22,
            ...FontStyle.CustomFont,
            color: Colors.white,
          }}>
          {t('Time to update')}
        </Text>
        <Text
          style={{
            fontWeight: 500,
            fontSize: 16,
            ...FontStyle.CustomFont,
            color: Colors.white,
            marginTop: 5,
          }}>
          {t('Unfold our new features')}
        </Text>
      </Box>
      <Pressable
        style={{
          height: 41,
          width: 360,
          alignSelf: 'center',
          borderRadius: 5,
          borderWidth: 1,
          borderColor: Colors.white,
          alignItems: 'center',
          justifyContent: 'center',
          marginVertical: 10,
        }}>
        <Text
          style={{
            fontWeight: 600,
            fontSize: 18,
            ...FontStyle.CustomFont,
            color: Colors.white,
          }}>
          {t('Install now')}
        </Text>
      </Pressable>
    </Box>
  );
};
