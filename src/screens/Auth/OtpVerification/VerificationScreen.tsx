import React, { FC } from 'react';

import { AuthStackScreenProps } from '../../../navigation/types';
import { Box, Button, HStack, Text, VStack } from 'native-base';
import { Colors } from '../../../styles/Colors';
import { Formik } from 'formik';

import OTPInputView from '@twotalltotems/react-native-otp-input';
import { Pressable, StyleSheet } from 'react-native';
import { OtpFormValues, VerifyValues } from '../../../types';
import CircularProgress from 'react-native-circular-progress-indicator';
import { Header } from '../../../component/common/Header';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import FontStyle from '../../../styles/FontStyle';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { forgotPassword, resendOTP, verifyOtp } from '../../../store/auth/authSlice';
import { showToast } from '../../../services/generalServices';
import { useAppDispatch } from '../../../store';

type Props = AuthStackScreenProps<'Verification'>;





export const VerificationScreen: FC<Props> = ({ navigation }) => {

  const dispatch = useAppDispatch()

  const onSubmit = async ({ otp }: OtpFormValues) => {
    try {

      const result = await dispatch(verifyOtp({ otp, phone, verifyFor:1 })).unwrap();

      showToast({ color: 'green', msg: result.msg });

    } catch (e: any) {
      showToast(e?.message);
    }
  };
  const { t } = useTranslation();
  const initialValues: OtpFormValues = {
  otp:otp
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ touched, errors, handleChange, handleBlur, values }) => {
        return (
          <KeyboardAwareScrollView flex={1} bgColor={'white'}>
            <Box>
              <Header />
              <Box safeArea p={5}>
                <Box marginTop={9}>
                  <Text
                    style={{
                      ...FontStyle.CustomFont,
                      fontSize: 22,
                      fontWeight: 600,
                      color: Colors.primary,
                      marginTop: 5,
                      textAlign: 'left',
                      paddingVertical: 1,
                    }}>
                    {t('Verification Code')}
                  </Text>
                  <Text
                    style={{
                      ...FontStyle.CustomFont,
                      fontSize: 14,
                      fontWeight: 500,
                      color: Colors.secondary,
                      textAlign: 'left',
                    }}>
                    {t('Enter the code you received')}
                  </Text>
                  <Box mx={4} my={6}>
                    <OTPInputView
                      code={values.otp}
                      style={{
                        width: '100%',
                        height: 100,
                      }}
                      pinCount={4}
                      codeInputFieldStyle={[styles.underlineStyleBase, {}]}
                      codeInputHighlightStyle={styles.underlineStyleHighLighted}
                      selectionColor={'white'}
                      keyboardType={'number-pad'}
                    />
                  </Box>
                  <Pressable
                    style={{
                      marginTop: 40,
                      alignSelf: 'center',
                      borderRadius: 5,
                      marginVertical: 2,
                      width: '90%',
                      height: 45,
                      justifyContent: 'center',
                    }}
                    onPress={() => navigation.navigate('BottomTabs')}
                    backgroundColor={Colors.primary}>
                    <Text
                      style={{
                        ...FontStyle.CustomFont,
                        fontSize: 22,
                        fontWeight: 600,
                        color: Colors.white,
                        textAlign: 'center',
                        paddingVertical: 1,
                      }}>
                      {t('Verify')}
                    </Text>
                  </Pressable>

                  <Box alignItems={'center'} mt={10} mb={3}>
                    <CircularProgress
                      value={45}
                      radius={48}
                      activeStrokeColor={Colors.primary}
                      circleBackgroundColor={'#ffffff'}
                    // progressValueStyle={{
                    //   fontWeight: '600',
                    //   fontSize: '26',
                    //   // ...FontStyle.CustomFont,
                    // }}
                    />
                  </Box>

                  <HStack
                    mt={3}
                    alignItems={'center'}
                    justifyContent={'center'}>
                    <Text
                      style={{
                        ...FontStyle.CustomFont,
                        fontSize: 16,
                        fontWeight: 500,
                        color: Colors.secondary,
                        textAlign: 'center',
                      }}>
                      {t("Didn't receive the code?")}{' '}
                    </Text>
                    <Pressable onPress={onResendHandler}>
                      <Text
                        style={{
                          ...FontStyle.CustomFont,
                          fontSize: 16,
                          fontWeight: 500,
                          color: Colors.primary,
                          textAlign: 'center',
                        }}>
                        {t('Resend')}
                      </Text>
                    </Pressable>
                  </HStack>
                </Box>
              </Box>
            </Box>
          </KeyboardAwareScrollView>
        );
      }}
    </Formik>
  );
};
const styles = StyleSheet.create({
  underlineStyleBase: {
    width: 65,
    height: 65,
    borderWidth: 1.5,
    backgroundColor: Colors.white,
    borderColor: Colors.secondary,
    // color: 'white',
    fontSize: 22,
    borderRadius: 100,
    ...FontStyle.CustomFont,
  },

  underlineStyleHighLighted: {
    borderColor: Colors.primary,
    // color: 'white',
    fontSize: 18,
    // backgroundColor: Colors.primary,
  },
});
