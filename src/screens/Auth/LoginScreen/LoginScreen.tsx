import React, { FC, useEffect } from 'react';

import { AuthStackScreenProps } from '../../../navigation/types';
import { AppLayout } from '../../../component/common/AppLayout';
import { Box, Button, HStack } from 'native-base';
import { Text } from 'react-native';
import { Colors } from '../../../styles/Colors';
import { Header } from '../../../component/common/Header';
import { LoginForm } from './components/LoginForm';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import FontStyle from '../../../styles/FontStyle';
import { useTranslation } from 'react-i18next';
import { LoginFormValues } from '../../../types';
import { login } from '../../../store/auth/authSlice';
import { showToast } from '../../../services/generalServices';
import { useAppDispatch } from '../../../store';

type Props = AuthStackScreenProps<'Login'>;

export const LoginScreen: FC<Props> = ({ navigation }) => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const onSubmit = async ({ phone, password }: LoginFormValues) => {
    try {
      const result = await dispatch(login({ phone, password })).unwrap();
      showToast({ color: 'green', msg: result.msg });
      
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
              {t('Hello!')}
            </Text>
            <Text
              style={{
                ...FontStyle.CustomFont,
                fontSize: 14,
                fontWeight: 500,
                color: Colors.secondary,
                textAlign: 'left',
              }}>
              {t('Go ahead mate, login')}
            </Text>
            <Box flex={1} mt={'15%'}>
              <LoginForm onSubmit={onSubmit} />
            </Box>
          </Box>
        </Box>
      </KeyboardAwareScrollView>
    </Box>
  );
};
