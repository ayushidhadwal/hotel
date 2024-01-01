import React, { FC } from 'react';

import { AuthStackScreenProps } from '../../../navigation/types';
import { Box } from 'native-base';
import { Text } from 'react-native';
import { Header } from '../../../component/common/Header';
import { OtpForm } from './components/OtpForm';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import FontStyle from '../../../styles/FontStyle';
import { Colors } from '../../../styles/Colors';
import { useTranslation } from 'react-i18next';
import { showToast } from '../../../services/generalServices';
import { forgotPassword } from '../../../store/auth/authSlice';
import { useAppDispatch } from '../../../store';
import { VerifyValues } from '../../../types';

type Props = AuthStackScreenProps<'Otp'>;

export const OtpScreen: FC<Props> = ({ navigation }) => {
  const dispatch = useAppDispatch()

  const onResendHandler = async ({ phone }: VerifyValues) => {
    try {

      const result = await dispatch(forgotPassword({ phone })).unwrap();

      showToast({ color: 'green', msg: result.msg });

    } catch (e: any) {
      showToast(e?.message);
    }
  };

  const { t } = useTranslation();

  return (
    <Box bgColor={'white'} flex={1}>
      <Header />
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        <Box safeArea flex={1} p={5}>
          <Box marginTop={10} flex={1}>
            <Text
              style={{
                ...FontStyle.CustomFont,
                fontSize: 22,
                fontWeight: 600,
                color: Colors.primary,
                textAlign: 'left',
              }}>
              {t('Reset password')}
            </Text>
            <Text
              style={{
                ...FontStyle.CustomFont,
                fontSize: 14,
                fontWeight: 500,
                color: Colors.secondary,
                textAlign: 'left',
              }}>
              {t('Enter your mobile number to reset your password')}
            </Text>
            <Box flex={1} mt={'25%'}>
              <OtpForm onSubmit={onResendHandler} />
            </Box>
          </Box>
        </Box>
      </KeyboardAwareScrollView>
    </Box>
  );
};
