import React, {FC, useState} from 'react';
import {I18nManager, Platform, Pressable} from 'react-native';
import * as Yup from 'yup';
import {Formik} from 'formik';
import {Button, Box, Text, HStack} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {AuthNavigationProps} from '../../../../navigation/types';
import {FormInput} from '../../../../component/common/FormInput';
import {LoginFormValues, OtpFormValues} from '../../../../types';
import {Colors} from '../../../../styles/Colors';
import Feather from 'react-native-vector-icons/Feather';
import FontStyle from '../../../../styles/FontStyle';
import {useTranslation} from 'react-i18next';

type Props = {
  onSubmit: (values: OtpFormValues) => void;
};

export const OtpForm: FC<Props> = ({onSubmit}: Props) => {
  const {t} = useTranslation();
  const [show, setShow] = useState<boolean>(false);

  const initialValues: OtpFormValues = {
    number: '',
  };
  const navigation = useNavigation();

  const validationSchema = Yup.object().shape({
    number: Yup.string()
      // .matches(MobileValidation, 'Phone number is not valid')
      .required(String(t('Mobile Number is required!'))),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      {({touched, errors, handleChange, handleBlur, values}) => {
        return (
          <Box mt={2} flex={1}>
            <Box>
              <FormInput
                isRequired={true}
                isInvalid={touched.number && 'number' in errors}
                onChangeText={handleChange('number')}
                placeholder={t('Enter Mobile Number')}
                error={errors?.number}
                onBlur={handleBlur('number')}
                value={values.number}
                icon={Feather}
                iconName1={'phone'}
                iconName2={'phone'}
                keyboardType={'number-pad'}
                selectionColor={Colors.white}
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
                onPress={() => navigation.navigate('Verification')}
                backgroundColor={Colors.primary}>
                <Text
                  style={{
                    ...FontStyle.CustomFont,
                    fontSize: 22,
                    fontWeight: 600,
                    color: Colors.white,
                    textAlign: 'center',
                  }}>
                  {t('Send code')}
                </Text>
              </Pressable>
            </Box>
            {/*</KeyboardAwareScrollView>*/}
          </Box>
        );
      }}
    </Formik>
  );
};
