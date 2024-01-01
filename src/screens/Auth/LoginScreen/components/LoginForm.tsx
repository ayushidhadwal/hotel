import React, { FC, useState } from 'react';
import { ActivityIndicator, I18nManager, Platform, } from 'react-native';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Button, Box, Text, HStack, Pressable } from 'native-base';
import { useNavigation } from '@react-navigation/native';

import { FormInput } from '../../../../component/common/FormInput';
import { LoginFormValues } from '../../../../types';
import { Colors } from '../../../../styles/Colors';
import Feather from 'react-native-vector-icons/Feather';
import FontStyle from '../../../../styles/FontStyle';
import { useTranslation } from 'react-i18next';

type Props = {
  onSubmit: (values: LoginFormValues) => void;
};

export const LoginForm: FC<Props> = ({ onSubmit }: Props) => {
  const { t } = useTranslation();
  const [show, setShow] = useState<boolean>(false);

  const initialValues: LoginFormValues = {
    phone: '',
    password: '',
  };
  const navigation = useNavigation();

  const validationSchema = Yup.object().shape({
    phone: Yup.string()
      // .matches(MobileValidation, 'Phone number is not valid')
      .required(String(t('Mobile Number is required!'))),
    password: Yup.string().required(String(t('Password is required!'))),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      {({ touched, errors, handleChange, handleBlur, values, handleSubmit, isSubmitting }) => {
        console.log(isSubmitting);

        return (
          <Box mt={2} flex={1}>
            {/*<KeyboardAwareScrollView*/}
            {/*  showsVerticalScrollIndicator={false}*/}
            {/*  keyboardShouldPersistTaps="handled">*/}
            <Box>
              <FormInput
                isRequired={true}
                isInvalid={touched.phone && 'phone' in errors}
                onChangeText={handleChange('phone')}
                placeholder={t('Enter Mobile Number')}
                error={errors?.phone}
                onBlur={handleBlur('phone')}
                value={values.phone}
                icon={Feather}
                iconName1={'phone'}
                iconName2={'phone'}
                keyboardType={'number-pad'}
                selectionColor={Colors.white}
                textAlign={I18nManager.isRTL ? 'right' : 'left'}
              />

              <FormInput
                isRequired={true}
                isInvalid={touched.password && 'password' in errors}
                onChangeText={handleChange('password')}
                placeholder={t('Enter Password')}
                error={errors?.password}
                onBlur={handleBlur('password')}
                value={values.password}
                icon={Feather}
                iconName1={'lock'}
                iconName2={'lock'}
                secureTextEntry={!show}
                onPressHandler={() => setShow(!show)}
                show={show}
                textAlign={I18nManager.isRTL ? 'right' : 'left'}
              />

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
                onPress={() => handleSubmit()}
                backgroundColor={Colors.primary}
                disabled={isSubmitting}>
                {!isSubmitting ? <Text
                  style={{
                    ...FontStyle.CustomFont,
                    fontSize: 22,
                    fontWeight: 600,
                    color: Colors.white,
                    textAlign: 'center',
                  }}>{t('Login')}</Text> : <ActivityIndicator size='small' color={'white'} />}



              </Pressable>

              <HStack marginTop={10} justifyContent={'center'}>
                <Text
                  style={{
                    ...FontStyle.CustomFont,
                    fontSize: 16,
                    fontWeight: 500,
                    color: Colors.secondary,
                    textAlign: 'center',
                  }}>
                  {t('Dont have an account?')}
                </Text>
                <Pressable onPress={() => navigation.navigate('Register')}>
                  <Text
                    style={{
                      ...FontStyle.CustomFont,
                      fontSize: 16,
                      fontWeight: 500,
                      color: Colors.primary,
                      textAlign: 'center',
                    }}>
                    {' '}
                    {t('Register')}
                  </Text>
                </Pressable>
              </HStack>
            </Box>
            {/*</KeyboardAwareScrollView>*/}
          </Box>
        );
      }}
    </Formik>
  );
};
