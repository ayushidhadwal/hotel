import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {RootStackParamsList} from './types';

import BottomTabNavigation from './BottomTabNavigation';
import {NotificationScreen} from '../screens/Notification';

import AuthStackNavigation from './AuthStackNavigation';
import {LocationScreen} from '../screens/LocationScreen';
import {ProfileScreen} from '../screens/ProfileScreen';
import FontStyle from '../styles/FontStyle';
import {Colors} from '../styles/Colors';
import {ChangeNumberScreen} from '../screens/ChangeNumberScreen';
import {VerificationCodeScreen} from '../screens/VerificationCodeScreen';
import {ResetPasswordScreen} from '../screens/ResetPasswordScreen';
import {ChangeLanguageScreen} from '../screens/ChangeLanguage';
import {AboutAppScreen} from '../screens/AboutApp';
import {AboutScreen} from '../screens/AboutScreen';
import {PrivacyPolicyScreen} from '../screens/PrivacyPolicy';
import {TermsConditionsScreen} from '../screens/TermsConditions';
import {Pressable, View} from 'react-native';
import {Image} from 'native-base';
import {ContactUsScreen} from '../screens/ContactUs';
import {PastScreen, ScheduledScreen} from '../screens/Reservation';
import {ReviewScreen} from '../screens/Review';
import {UpdateScreen} from '../screens/Update';
import {useTranslation} from 'react-i18next';

const Stack = createNativeStackNavigator<RootStackParamsList>();

function RootStackNavigation() {
  const {t} = useTranslation();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {/* <Stack.Screen name={'AuthStack'} component={AuthStackNavigation} /> */}
      <Stack.Screen name="BottomTabs" component={BottomTabNavigation} />
      <Stack.Screen name="Location" component={LocationScreen} />
      <Stack.Screen name="Scheduled" component={ScheduledScreen} />
      <Stack.Screen name="Past" component={PastScreen} />
      <Stack.Screen name="Update" component={UpdateScreen} />
      <Stack.Screen
        options={{
          headerBackTitleVisible: false,
          headerTintColor: Colors.white,
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerShown: true,
          headerTitle: t('Profile'),

          headerTitleAlign: 'center',
          headerTitleStyle: {
            ...FontStyle.CustomFont,
            fontSize: 22,
            fontWeight: '600',
          },
        }}
        name="Profile"
        component={ProfileScreen}
      />
      <Stack.Screen
        options={{
          headerBackTitleVisible: false,
          headerTintColor: Colors.white,
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerShown: true,
          headerTitle: t('Change number'),
          headerTitleAlign: 'center',
          headerTitleStyle: {
            ...FontStyle.CustomFont,
            fontSize: 22,
            fontWeight: '600',
          },
        }}
        name="ChangeNumber"
        component={ChangeNumberScreen}
      />
      <Stack.Screen
        options={{
          headerBackTitleVisible: false,
          headerTintColor: Colors.white,
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerShown: true,
          headerTitle: t('Verification code'),
          headerTitleAlign: 'center',
          headerTitleStyle: {
            ...FontStyle.CustomFont,
            fontSize: 22,
            fontWeight: '600',
          },
        }}
        name="VerificationCode"
        component={VerificationCodeScreen}
      />
      <Stack.Screen
        options={{
          headerBackTitleVisible: false,
          headerTintColor: Colors.white,
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerShown: true,
          headerTitle: t('Reset password'),
          headerTitleAlign: 'center',
          headerTitleStyle: {
            ...FontStyle.CustomFont,
            fontSize: 22,
            fontWeight: '600',
          },
        }}
        name="ResetPassword"
        component={ResetPasswordScreen}
      />
      <Stack.Screen
        options={{
          headerBackTitleVisible: false,
          headerTintColor: Colors.primary,

          headerStyle: {
            backgroundColor: Colors.white,
          },
          headerShown: true,
          headerTitle: t('Change language'),
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: Colors.primary,
            ...FontStyle.CustomFont,
            fontSize: 22,
            fontWeight: '600',
          },
        }}
        name="ChangeLanguage"
        component={ChangeLanguageScreen}
      />
      <Stack.Screen
        options={{
          headerBackTitleVisible: false,
          headerTintColor: Colors.white,

          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerShown: true,
          headerTitle: t('About app'),
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: Colors.white,
            ...FontStyle.CustomFont,
            fontSize: 22,
            fontWeight: '600',
          },
        }}
        name="AboutApp"
        component={AboutAppScreen}
      />
      <Stack.Screen
        options={{
          headerBackTitleVisible: false,
          headerTintColor: Colors.white,

          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerShown: true,
          headerTitle: t('About'),
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: Colors.white,
            ...FontStyle.CustomFont,
            fontSize: 22,
            fontWeight: '600',
          },
        }}
        name="About"
        component={AboutScreen}
      />
      <Stack.Screen
        options={{
          headerBackTitleVisible: false,
          headerTintColor: Colors.white,

          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerShown: true,
          headerTitle: t('Privacy Policy'),
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: Colors.white,
            ...FontStyle.CustomFont,
            fontSize: 22,
            fontWeight: '600',
          },
        }}
        name="PrivacyPolicy"
        component={PrivacyPolicyScreen}
      />
      <Stack.Screen
        options={{
          headerBackTitleVisible: false,
          headerTintColor: Colors.white,

          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerShown: true,
          headerTitle: t('Terms and conditions'),
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: Colors.white,
            ...FontStyle.CustomFont,
            fontSize: 22,
            fontWeight: '600',
          },
        }}
        name="TermsConditions"
        component={TermsConditionsScreen}
      />
      {/*<Stack.Screen name="Booking" component={BookingScreen} />*/}
      {/*<Stack.Screen name="TopTabs" component={TopTabNavigation} />*/}
      <Stack.Screen
        options={{
          headerBackTitleVisible: false,
          headerRight: () => (
            <Pressable>
              <Image
                style={{
                  height: 35,
                  width: 35,
                  alignSelf: 'center',
                  marginTop: 8,
                }}
                source={require('../assets/notificationon.png')}
                alt={'no img'}
              />
            </Pressable>
          ),

          headerStyle: {
            // backgroundColor: Colors.primary,
            backgroundColor: Colors.white,
          },
          headerTintColor: Colors.primary,
          headerShown: true,
          headerTitle: t('Notifications'),
          headerTitleAlign: 'center',
          headerTitleStyle: {
            // color: Colors.white,
            color: Colors.primary,
            ...FontStyle.CustomFont,
            fontSize: 22,
            fontWeight: '600',
          },
        }}
        name="Notification"
        component={NotificationScreen}
      />
      <Stack.Screen
        options={{
          headerBackTitleVisible: false,
          headerTintColor: Colors.white,

          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerShown: true,
          headerTitle: t('Contact us'),
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: Colors.white,
            ...FontStyle.CustomFont,
            fontSize: 22,
            fontWeight: '600',
          },
        }}
        name="ContactUs"
        component={ContactUsScreen}
      />
      <Stack.Screen
        options={{
          // headerLeft: () => <View />,
          headerBackTitleVisible: false,

          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerShown: true,
          headerTitle: t('Review your visit'),
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: Colors.white,
            ...FontStyle.CustomFont,
            fontSize: 22,
            fontWeight: '600',
          },
        }}
        name="Review"
        component={ReviewScreen}
      />
    </Stack.Navigator>
  );
}

export default RootStackNavigation;
