import React from 'react';
import {Image} from 'native-base';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {BottomTabsParamList} from './types';
import {ReservationScreen} from '../screens/Reservation';
import {AccountScreen} from '../screens/Account';
import {SearchScreen} from '../screens/Search';
import {WishListScreen} from '../screens/WishList';
import {HomeScreen} from '../screens/Home';
import {Colors} from '../styles/Colors';
import {MenuDetailsScreen} from '../screens/MenuDetails';
import HomeStackNavigation from './HomeStackNavigation';
import {Platform, Pressable} from 'react-native';
import FontStyle from '../styles/FontStyle';
import {ReservationTopTabNavigation} from '../component/navigation/ReservationTopTabNavigation';
import {useTranslation} from 'react-i18next';
// import {Home} from '../component/svg/Home';
import {Reservation} from '../component/svg/Reservation';
import {Person} from '../component/svg/Person';
import {WishList} from '../component/svg/WishList';
import {Search} from '../component/svg/Search';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { showToast } from '../services/generalServices';
import { useAppDispatch } from '../store';
import { logout } from '../store/auth/authSlice';

const Tab = createBottomTabNavigator<BottomTabsParamList>();

function BottomTabNavigation() {
  const {t} = useTranslation();
  const dispatch = useAppDispatch();

  const logoutHandler = async () => {
    try {
      const message = await dispatch(logout()).unwrap();
      showToast({ color: 'green', msg: message as string });
    } catch (e: any) {
      showToast(e.message);
    }
  };

  return (
    <Tab.Navigator
      initialRouteName={'HomeScreen'}
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors.primary,
          // height: Platform.OS==='',
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        },
        // tabBarActiveTintColor: '#102E4A',
        // tabBarInactiveTintColor: '#ffffff',
        headerStyle: {
          backgroundColor: Colors.primary,
        },
      }}>
      <Tab.Screen
        name="WishList"
        component={WishListScreen}
        options={{
          headerTintColor: Colors.primary,
          // tabBarLabel: String(t('WishList')),
          headerLeft: () => (
            <Pressable style={{padding: 5, marginLeft: 8}}>
              <Image
                style={{
                  height: 24,
                  width: 24,
                  alignSelf: 'center',
                  marginTop: 8,
                }}
                source={require('../assets/whitebackarrow.png')}
                alt={'no img'}
              />
            </Pressable>
          ),
          headerStyle: {
            backgroundColor: Colors.primary,
            // backgroundColor: Colors.white,
          },

          headerShown: true,
          headerTitle: t('Favourites'),
          headerTitleAlign: 'center',
          headerTitleStyle: {
            // color: Colors.primary,
            color: Colors.white,
            ...FontStyle.CustomFont,
            fontSize: 22,
            fontWeight: 600,
          },
          tabBarIcon: ({color, focused}) => (
            <AntDesign
              style={{
                color: focused ? '#102E4A' : Colors.white,
              }}
              size={30}
              name={'hearto'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({color, focused}) => (
            <AntDesign
              style={{
                color: focused ? '#102E4A' : Colors.white,
              }}
              size={30}
              name={'search1'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="HomeScreen"
        component={HomeStackNavigation}
        options={{
          tabBarIcon: ({color, focused}) => (
            <Feather
              style={{
                color: focused ? '#102E4A' : Colors.white,
              }}
              size={30}
              name={'home'}
            />
          ),
        }}
      />

      <Tab.Screen
        name="ReservationTopTab"
        component={ReservationTopTabNavigation}
        options={{
          tabBarIcon: ({color, focused}) => (
            <Feather
              style={{
                color: focused ? '#102E4A' : Colors.white,
              }}
              size={30}
              name={'calendar'}
            />
          ),
          headerShown: true,
          headerTitle: t('Reservations'),
          headerTitleAlign: 'center',
          headerTitleStyle: {
            ...FontStyle.CustomFont,
            fontSize: 18,
            fontWeight: 500,
          },
        }}
      />
      <Tab.Screen
        name="My Account"
        component={AccountScreen}
        options={{
          headerLeft: () => (
            <Pressable style={{padding: 5, marginLeft: 8}} onPress={logoutHandler}>
              <Image
                style={{
                  height: 24,
                  width: 24,
                  alignSelf: 'center',
                  marginTop: 8,
                }}
                source={require('../assets/logouticon.png')}
                alt={'no img'}
              />
            </Pressable>
          ),
          // tabBarLabel: String(t('My Account')),
          headerShown: true,
          headerTitle: t('My account'),
          headerTitleAlign: 'center',
          headerTitleStyle: {
            ...FontStyle.CustomFont,
            fontSize: 22,
            fontWeight: 600,
          },
          tabBarIcon: ({color, focused}) => (
            <MaterialCommunityIcons
              style={{
                color: focused ? '#102E4A' : Colors.white,
              }}
              size={30}
              name={'account-outline'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigation;
