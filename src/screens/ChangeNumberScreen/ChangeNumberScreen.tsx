import React, {FC} from 'react';

import {RootBottomTabScreenProps} from '../../navigation/types';

import {Colors} from '../../styles/Colors';
import {View, Text, Pressable, Image} from 'react-native';
import FontStyle from '../../styles/FontStyle';
import {Input, Box} from 'native-base';
import {useTranslation} from 'react-i18next';

type Props = RootBottomTabScreenProps<'ChangeNumber'>;

export const ChangeNumberScreen: FC<Props> = ({navigation}) => {
  const {t} = useTranslation();
  return (
    <Box safeAreaBottom flex={1} bgColor={'white'}>
      <Box flex={1}>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginTop: 30,
            alignSelf: 'center',
          }}>
          <Input
            _focus={{backgroundColor: 'white'}}
            borderColor={Colors.grey}
            borderWidth={1}
            borderRadius={5}
            w={328}
            h={45}
            cursorColor={'#ffffff'}
            selectionColor={'#ffffff'}
            placeholder={t('Enter your number')}
            placeholderTextColor={Colors.primary}
            focusOutlineColor={Colors.primary}
            fontSize={16}
            fontWeight={500}
            InputLeftElement={
              <Image
                style={{height: 17.35, width: 19.19, marginLeft: 12}}
                source={require('../../assets/call.png')}
                alt={'no img'}
              />
            }
          />
        </View>
      </Box>
      <Box>
        <Pressable
          onPress={() => navigation.navigate('VerificationCode')}
          style={{
            // marginTop: 20,
            alignSelf: 'center',
            borderRadius: 5,
            marginVertical: 15,
            width: 328,
            height: 41,
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
            {t('Send Code')}
          </Text>
        </Pressable>
      </Box>
    </Box>
  );
};
