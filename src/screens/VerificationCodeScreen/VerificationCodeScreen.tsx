import React, {FC} from 'react';

import {RootBottomTabScreenProps} from '../../navigation/types';

import {Colors} from '../../styles/Colors';
import {View, Text, Pressable, Image, StyleSheet} from 'react-native';
import FontStyle from '../../styles/FontStyle';
import {Input, Box, HStack} from 'native-base';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import CircularProgress from 'react-native-circular-progress-indicator';
import {useTranslation} from 'react-i18next';

type Props = RootBottomTabScreenProps<'VerificationCode'>;

export const VerificationCodeScreen: FC<Props> = ({navigation}) => {
  const {t} = useTranslation();
  return (
    <Box safeAreaBottom flex={1} bgColor={'white'}>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 500,
          ...FontStyle.CustomFont,
          color: Colors.blue,
          marginLeft: 15,
          marginTop: 20,
        }}>
        {t('Enter the code you received')}
      </Text>
      <Box mx={8} my={6}>
        <OTPInputView
          style={{
            width: '100%',
            height: 100,
          }}
          pinCount={4}
          codeInputFieldStyle={styles.underlineStyleBase}
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
          selectionColor={'white'}
        />
      </Box>
      <Pressable
        style={{
          marginTop: 25,
          alignSelf: 'center',
          borderRadius: 5,
          marginVertical: 2,
          width: '90%',
          height: 45,
          justifyContent: 'center',
        }}
        // onPress={() => navigation.navigate('BottomTabs')}
        backgroundColor={Colors.primary}>
        <Text
          style={{
            ...FontStyle.CustomFont,
            fontSize: 22,
            fontWeight: 600,
            color: Colors.white,
            textAlign: 'center',
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
        />
      </Box>

      <HStack mt={3} alignItems={'center'} justifyContent={'center'}>
        <Text
          style={{
            ...FontStyle.CustomFont,
            fontSize: 16,
            fontWeight: 500,
            color: Colors.blue,
            textAlign: 'center',
          }}>
          {t("Didn't receive the code?")}{' '}
        </Text>
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
      </HStack>
    </Box>
  );
};
const styles = StyleSheet.create({
  underlineStyleBase: {
    width: 65,
    height: 65,
    borderWidth: 1.5,
    backgroundColor: 'white',
    borderColor: Colors.secondary,
    color: 'white',
    fontSize: 22,
    borderRadius: 100,
  },

  underlineStyleHighLighted: {
    borderColor: Colors.primary,
    color: 'white',
    fontSize: 18,
    backgroundColor: Colors.primary,
  },
});
