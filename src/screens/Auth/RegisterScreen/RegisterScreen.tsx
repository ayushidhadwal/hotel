import React, { FC } from 'react';

import { AuthStackScreenProps } from '../../../navigation/types';
import { Box } from 'native-base';
import { Text } from 'react-native';
import { Colors } from '../../../styles/Colors';
import { Header } from '../../../component/common/Header';
import { RegisterForm } from './component/RegisterForm';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import FontStyle from '../../../styles/FontStyle';
import { useTranslation } from 'react-i18next';
import { register } from '../../../store/auth/authSlice';
import { useAppDispatch } from '../../../store';
import { showToast } from '../../../services/generalServices';
import { RegisterFormValues } from '../../../types';

type Props = AuthStackScreenProps<'Register'>;



export const RegisterScreen: FC<Props> = ({ navigation }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();


  const onSubmit = async ({ name, email, phone, password }: RegisterFormValues) => {
    // showToast({ color: 'red.500', msg: result.msg });

    try {

      const result = await dispatch(register({ name, email, phone, password })).unwrap();
      showToast({ color: 'green', msg: result.msg });
      // navigate with otp
      navigation.navigate('Otp', { phone: phone })

    } catch (e: any) {
      showToast({ msg: e?.message });
    }
  };


  return (
    <Box bgColor={'white'} flex={1}>
      <Header />
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        <Box safeArea flex={1}>
          <Box marginTop={5} flex={1} p={5}>
            <Text
              style={{
                ...FontStyle.CustomFont,
                fontSize: 22,
                fontWeight: 600,
                color: Colors.primary,
                textAlign: 'left',
              }}>
              {t('Come join us!')}
            </Text>
            <Text
              style={{
                ...FontStyle.CustomFont,
                fontSize: 14,
                fontWeight: 500,
                color: Colors.secondary,
                textAlign: 'left',
              }}>
              {t("We'd love to have you")}
            </Text>
            <Box flex={1} mt={'15%'}>
              <RegisterForm onSubmit={onSubmit} />
            </Box>
          </Box>
        </Box>
      </KeyboardAwareScrollView>
    </Box>
  );
};
