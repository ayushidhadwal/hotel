import React, { FC } from 'react';

import { RootBottomTabScreenProps } from '../../navigation/types';

import { Colors } from '../../styles/Colors';
import { View, Text, Pressable, Image } from 'react-native';
import FontStyle from '../../styles/FontStyle';
import { Input, Box } from 'native-base';
import { useTranslation } from 'react-i18next';
import { ChangePasswordValues } from '../../types';
import { useDispatch } from 'react-redux';
import { showToast } from '../../services/generalServices';
import { userUpdatePassword } from '../../store/user/userSlice';
import { useAppDispatch } from '../../store';

type Props = RootBottomTabScreenProps<'ResetPassword'>;

export const ResetPasswordScreen: FC<Props> = ({ navigation }) => {
  const dispatch = useAppDispatch()


  const onSubmit = async ({
    password,
    confirmPassword,
  }: ChangePasswordValues) => {
    try {
      const result = await dispatch(userUpdatePassword({ password, confirmPassword })).unwrap();
      showToast({ color: 'green', msg: result.msg });
      // navigation.goBack();
    } catch (e: any) {
      showToast({ msg: e?.message });
    }
  };

  const { t } = useTranslation();
  return (
    <Box bgColor={Colors.white} safeAreaBottom flex={1}>
      <Box flex={1}>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginTop: 30,
            alignSelf: 'center',
          }}>
          <Input
            _focus={{ backgroundColor: 'white' }}
            borderColor={Colors.grey}
            borderWidth={1}
            borderRadius={5}
            w={328}
            h={45}
            cursorColor={'#ffffff'}
            selectionColor={'#ffffff'}
            placeholder={t('Enter your password')}
            placeholderTextColor={Colors.primary}
            focusOutlineColor={Colors.primary}
            fontSize={16}
            fontWeight={500}
            InputLeftElement={
              <Image
                style={{ height: 22, width: 22, marginLeft: 12 }}
                source={require('../../assets/unlock.png')}
                alt={'no img'}
              />
            }
            InputRightElement={
              <Image
                style={{ height: 22, width: 22, marginRight: 12 }}
                source={require('../../assets/eye.png')}
                alt={'no img'}
              />
            }
          />
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginTop: 20,
            alignSelf: 'center',
          }}>
          <Input
            _focus={{ backgroundColor: 'white' }}
            borderColor={Colors.grey}
            borderWidth={1}
            borderRadius={5}
            w={328}
            h={45}
            cursorColor={'#ffffff'}
            selectionColor={'#ffffff'}
            placeholder={t('Enter confirm password')}
            placeholderTextColor={Colors.primary}
            focusOutlineColor={Colors.primary}
            fontSize={16}
            fontWeight={500}
            InputLeftElement={
              <Image
                style={{ height: 22, width: 22, marginLeft: 12 }}
                source={require('../../assets/unlock.png')}
                alt={'no img'}
              />
            }
          />
        </View>
      </Box>
      <Box>
        <Pressable onPress={onSubmit}
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
            {t('Update')}
          </Text>
        </Pressable>
      </Box>
    </Box>
  );
};
