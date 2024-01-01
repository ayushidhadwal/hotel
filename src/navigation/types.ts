import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from 'react-native-screens/native-stack';
import {
  CompositeNavigationProp,
  CompositeScreenProps,
} from '@react-navigation/native';
import {
  BottomTabNavigationProp,
  BottomTabScreenProps,
} from '@react-navigation/bottom-tabs';

export type AuthStackParamsList = {
  GetStarted: undefined;
  Login: undefined;
  Register: undefined;
  Otp: { phone: phone };
  Verification: undefined;
};

export type BottomTabsParamList = {
  Home: undefined;
  Reservation: undefined;
  Search: undefined;
  Account: undefined;
  wishList: undefined;
};

export type AuthNavigationProps =
  NativeStackNavigationProp<AuthStackParamsList>;

export type AuthStackScreenProps<Screen extends keyof AuthStackParamsList> =
  NativeStackScreenProps<AuthStackParamsList, Screen>;

export type RootStackParamsList = {
  BottomTabs: BottomTabsParamList;
  AuthStack: AuthStackParamsList;
  Notifications: undefined;
  Booking: undefined;
  Appetizers: undefined;
  Location: undefined;
  Profile: undefined;
  ChangeNumber: undefined;
  VerificationCode: undefined;
  ResetPassword: undefined;
  ChangeLanguage: undefined;
  AboutApp: undefined;
  About: undefined;
  PrivacyPolicy: undefined;
  TermsConditions: undefined;
  ContactUs: undefined;
  Scheduled: undefined;
  Past: undefined;
  Review: undefined;
  Update: undefined;
};

export type HomeStackParamList = {
  HomeScreen: undefined;
  RestaurantScreen: undefined;
  // Booking: undefined;
};

export type TopTapParamList = {
  Details: undefined;
  Reviews: undefined;
  Menus: undefined;
};

export type RootNavigationProps = CompositeNavigationProp<
  NativeStackNavigationProp<RootStackParamsList>,
  BottomTabNavigationProp<BottomTabsParamList>
>;

export type RootStackScreenProps<Screen extends keyof RootStackParamsList> =
  CompositeScreenProps<
    NativeStackScreenProps<RootStackParamsList, Screen>,
    BottomTabScreenProps<BottomTabsParamList>
  >;

export type RootBottomTabScreenProps<Screen extends keyof BottomTabsParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<BottomTabsParamList, Screen>,
    NativeStackScreenProps<RootStackParamsList>
  >;
