import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthStackParamsList} from './types';
import {GetStartedScreen} from '../screens/Auth/GetStarted';
import {LoginScreen} from '../screens/Auth/LoginScreen';
import {OtpScreen} from '../screens/Auth/OtpScreen';
import {RegisterScreen} from '../screens/Auth/RegisterScreen';
import {VerificationScreen} from '../screens/Auth/OtpVerification/VerificationScreen';

const Stack = createNativeStackNavigator<AuthStackParamsList>();

function AuthStackNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="GetStarted" component={GetStartedScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Otp" component={OtpScreen} />
      <Stack.Screen name="Verification" component={VerificationScreen} />
    </Stack.Navigator>
  );
}

export default AuthStackNavigation;
