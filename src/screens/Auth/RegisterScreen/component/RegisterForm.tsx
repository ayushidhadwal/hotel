import React, { FC, useState } from 'react';
import { ActivityIndicator, I18nManager, Platform, Pressable } from 'react-native';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Button, Box, Text, HStack } from 'native-base';
import { useNavigation } from '@react-navigation/native';

import { FormInput } from '../../../../component/common/FormInput';
import { RegisterFormValues } from '../../../../types';
import { Colors } from '../../../../styles/Colors';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { EmailValidation, MobileValidation } from '../../../../utils/helper';
import FontStyle from '../../../../styles/FontStyle';
import { useTranslation } from 'react-i18next';

type Props = {
  onSubmit: (values: RegisterFormValues) => void;
};

export const RegisterForm: FC<Props> = ({ onSubmit }: Props) => {
  const { t } = useTranslation();
  const [show, setShow] = useState<boolean>(false);
  const initialValues: {
    phone: string;
    password: string;
    name: string;
    email: string;
  } = {
    name: '',
    phone: '',
    password: '',
    email: '',
  };

  const navigation = useNavigation();

  const validationSchema = Yup.object().shape({
    name: Yup.string().required(String(t('name is required!'))),
    phone: Yup.string()
      .matches(MobileValidation, String(t('Phone Number is not valid!')))
      .required(String(t('Phone Number is required!'))),
    email: Yup.string()

      .matches(EmailValidation, String(t('Email is not valid!')))
      .required(String(t('Email is required!'))),
    password: Yup.string().required(String(t('Password is required!'))),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      {({ touched, errors, handleChange, handleBlur, values, isSubmitting, handleSubmit }) => {
        return (
          <Box mt={2} flex={1}>
            {/*<KeyboardAwareScrollView*/}
            {/*  showsVerticalScrollIndicator={false}*/}
            {/*  keyboardShouldPersistTaps="handled">*/}
            <Box>
              <FormInput
                isRequired={true}
                isInvalid={touched.name && 'name' in errors}
                onChangeText={handleChange('name')}
                placeholder={t('Name')}
                error={errors?.name}
                onBlur={handleBlur('name')}
                value={values.name}
                // label={String(t('Username'))}
                icon={Ionicons}
                iconName1={'person-outline'}
                iconName2={'person-outline'}
                textAlign={I18nManager.isRTL ? 'right' : 'left'}
              />
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
              <FormInput
                isRequired={true}
                isInvalid={touched.email && 'email' in errors}
                onChangeText={handleChange('email')}
                placeholder={t('Enter Your Email')}
                error={errors?.email}
                onBlur={handleBlur('email')}
                value={values.email}
                // label={'Email'}
                icon={Fontisto}
                iconName1={'email'}
                iconName2={'email'}
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
                disabled={isSubmitting}
                onPress={() => handleSubmit()}
                backgroundColor={Colors.primary}
              >
                {!isSubmitting ?
                  <Text
                    style={{
                      ...FontStyle.CustomFont,
                      fontSize: 22,
                      fontWeight: 600,
                      color: Colors.white,
                      textAlign: 'center',
                    }}>
                    {t('Register')}
                  </Text> : <ActivityIndicator size='small' color={'white'} />}
              </Pressable>
              <HStack mt={8} justifyContent={'center'}>
                <Text
                  style={{
                    ...FontStyle.CustomFont,
                    fontSize: 16,
                    fontWeight: 500,
                    color: Colors.secondary,
                    textAlign: 'center',
                  }}>
                  {t('Already have an account?')}{' '}
                </Text>
                <Text
                  style={{
                    ...FontStyle.CustomFont,
                    fontSize: 16,
                    fontWeight: 500,
                    color: Colors.primary,
                    textAlign: 'center',
                  }}>
                  {t('Login')}
                </Text>
              </HStack>
            </Box>
            {/*</KeyboardAwareScrollView>*/}
          </Box>
        );
      }}
    </Formik>
  );
};
