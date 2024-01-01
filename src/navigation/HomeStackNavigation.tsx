import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeStackParamList} from './types';

import {MenuDetailsScreen} from '../screens/MenuDetails';

import {RestaurantScreen} from '../screens/RestaurantDetails';

import {HomeScreen} from '../screens/Home';
import {Colors} from '../styles/Colors';
import {BookingScreen} from '../screens/BookingScreen';
import {BookingSuccessScreen} from '../screens/Home/BookingSuccess/BookingSuccessScreen';
import {ListingViewScreen} from '../screens/ListingView';
import {
  Image,
  Pressable,
  View,
  Text,
  Modal,
  Alert,
  Platform,
} from 'react-native';
import FontStyle from '../styles/FontStyle';
import {Button, Divider, FormControl, Input, ScrollView} from 'native-base';
import {useState} from 'react';
import {PriceRangeCard} from '../screens/ListingView/component/PriceRangeCard';
import {CuisinesCard} from '../screens/ListingView/component/CuisinesCard';
import {AreaCard, AreasCard} from '../screens/ListingView/component/AreasCard';
import {LocationScreen} from '../screens/LocationScreen/LocationScreen';
import {useTranslation} from 'react-i18next';

const Stack = createNativeStackNavigator<HomeStackParamList>();

function HomeStackNavigation() {
  const [showModal, setShowModal] = useState(false);
  const {t} = useTranslation();

  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'Home'}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="RestaurantScreen" component={RestaurantScreen} />
      <Stack.Screen
        options={{
          headerBackTitleVisible: false,
          headerTitle: t('Appetizers'),
          headerShown: true,
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTitleStyle: {
            ...FontStyle.CustomFont,
            fontWeight: 600,
            fontSize: 22,
          },
          headerTitleAlign: 'center',
        }}
        name="Appetizers"
        component={MenuDetailsScreen}
      />
      <Stack.Screen
        options={{
          headerBackTitleVisible: false,
          headerTintColor: Colors.white,
          headerShown: true,
          headerStyle: {backgroundColor: Colors.primary},
          headerTitleAlign: 'center',
          headerTitle: t('The Cheesecake Factory'),
          headerTitleStyle: {
            ...FontStyle.CustomFont,
            fontWeight: '600',
            fontSize: 22,
          },
        }}
        name="Booking"
        component={BookingScreen}
      />
      <Stack.Screen name="BookingSuccess" component={BookingSuccessScreen} />
      <Stack.Screen
        options={{
          headerBackTitleVisible: false,
          headerTintColor: Colors.white,
          headerShown: true,
          headerStyle: {backgroundColor: Colors.primary},
          headerTitleAlign: 'center',
          headerTitle: t('Restaurants near me'),
          headerTitleStyle: {
            ...FontStyle.CustomFont,
            fontWeight: '600',
            fontSize: 22,
          },

          headerRight: () => (
            <Pressable onPress={() => setShowModal(true)}>
              <Image
                style={{
                  height: 20,
                  width: 20,
                  alignSelf: 'center',
                  marginTop: 8,
                }}
                source={require('../assets/filter.png')}
                alt={'no img'}
              />

              <Modal visible={showModal} transparent>
                <View
                  style={{
                    flex: 1,
                    backgroundColor: 'rgba(0, 0, 0, .5)',
                  }}>
                  <View
                    style={{
                      flex: 1,
                      marginTop: Platform.OS === 'ios' ? 75 : 30,
                    }}>
                    <View
                      style={{
                        flex: 1,
                        backgroundColor: Colors.white,
                        padding: 12,
                        borderTopRightRadius: 20,
                        borderTopLeftRadius: 20,
                      }}>
                      <View>
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            // backgroundColor: 'red',
                          }}>
                          <Pressable onPress={() => setShowModal(false)}>
                            <Text
                              style={{
                                color: Colors.blue,
                                ...FontStyle.CustomFont,
                                fontSize: 14,
                                fontWeight: 500,
                              }}>
                              {t('CLOSE')}
                            </Text>
                          </Pressable>
                          <Text
                            style={{
                              color: Colors.primary,
                              ...FontStyle.CustomFont,
                              fontSize: 20,
                              fontWeight: 600,
                            }}>
                            {t('Filters')}
                          </Text>
                          <Text
                            style={{
                              color: Colors.blue,
                              ...FontStyle.CustomFont,
                              fontSize: 14,
                              fontWeight: 500,
                            }}>
                            {t('RESET')}
                          </Text>
                        </View>
                      </View>
                      <Divider style={{marginVertical: 8}} />
                      <View>
                        <Text
                          style={{
                            color: Colors.primary,
                            ...FontStyle.CustomFont,
                            fontSize: 18,
                            fontWeight: 600,
                            textAlign: 'left',
                          }}>
                          {t('Price range')}
                        </Text>
                        <ScrollView
                          mt={2}
                          horizontal={true}
                          showsHorizontalScrollIndicator={false}>
                          <View p={1} mx={3} flexDirection={'row'}>
                            <View
                              style={{
                                alignItems: 'center',
                                width: 70,
                                height: 40,
                                backgroundColor: Colors.primary,
                                borderRadius: 4,
                                justifyContent: 'center',
                                marginVertical: 1,
                              }}>
                              <Text
                                style={{
                                  textAlign: 'center',
                                  color: Colors.white,
                                  ...FontStyle.CustomFont,
                                  fontWeight: 500,
                                  fontSize: 16,
                                }}>
                                ALL
                              </Text>
                            </View>

                            <PriceRangeCard price={'$'} />
                            <PriceRangeCard price={'$$'} />
                            <PriceRangeCard price={'$$$'} />
                            <PriceRangeCard price={'$$'} />
                          </View>
                        </ScrollView>
                        <View
                          style={{
                            justifyContent: 'space-between',
                            marginTop: 20,
                            flexDirection: 'row',
                          }}>
                          <Text
                            style={{
                              color: Colors.primary,
                              ...FontStyle.CustomFont,
                              fontSize: 18,
                              fontWeight: 600,
                            }}>
                            {t('Cuisines')}
                          </Text>
                          <Image
                            style={{height: 30, width: 30}}
                            source={require('../assets/blueline.png')}
                          />
                        </View>
                        <CuisinesCard
                          Cuisines={[
                            {
                              id: '1',
                              country: 'American',
                              checked: true,
                            },
                            {
                              id: '2',
                              country: 'European',
                              checked: false,
                            },
                            {
                              id: '3',
                              country: 'Asian',
                              checked: false,
                            },
                            {
                              id: '4',
                              country: 'Japenese',
                              checked: false,
                            },
                            {
                              id: '5',
                              country: 'Italian',
                              checked: false,
                            },
                            {
                              id: '6',
                              country: 'Chinese',
                              checked: false,
                            },
                            {
                              id: '7',
                              country: 'Sushi',
                              checked: false,
                            },
                            {
                              id: '8',
                              country: 'Lebanese',
                              checked: false,
                            },
                          ]}
                        />

                        <View
                          style={{
                            justifyContent: 'space-between',
                            marginTop: 20,
                            flexDirection: 'row',
                          }}>
                          <Text
                            style={{
                              color: Colors.primary,
                              ...FontStyle.CustomFont,
                              fontSize: 18,
                              fontWeight: 600,
                            }}>
                            {t('Areas')}
                          </Text>
                          <Image
                            style={{height: 30, width: 30}}
                            source={require('../assets/blueline.png')}
                          />
                        </View>
                        <AreasCard
                          Areas={[
                            {
                              id: '1',
                              area: 'Salmiya',
                              checked: true,
                            },
                            {
                              id: '2',
                              area: 'Egalia',
                              checked: false,
                            },
                            {
                              id: '3',
                              area: 'Hawally',
                              checked: false,
                            },
                            {
                              id: '4',
                              area: 'Arabella',
                              checked: false,
                            },
                            {
                              id: '5',
                              area: 'Sharq',
                              checked: false,
                            },
                            {
                              id: '6',
                              area: 'Mirqab',
                              checked: false,
                            },
                            {
                              id: '7',
                              area: 'Khaitan',
                              checked: false,
                            },
                            {
                              id: '8',
                              area: 'Shamiya',
                              checked: false,
                            },
                          ]}
                        />
                      </View>
                      <View
                        style={{
                          flex: 1,

                          justifyContent: 'flex-end',
                        }}>
                        <Pressable
                          // onPress={() => navigation.navigate('BookingSuccess')}
                          style={{
                            marginTop: 40,
                            alignSelf: 'center',
                            borderRadius: 5,
                            width: '100%',
                            height: 45,
                            justifyContent: 'center',
                            marginBottom: 10,
                            backgroundColor: Colors.primary,
                          }}>
                          <Text
                            style={{
                              ...FontStyle.CustomFont,
                              fontSize: 22,
                              fontWeight: 600,
                              color: Colors.white,
                              textAlign: 'center',
                            }}>
                            {t('Show results')}
                          </Text>
                        </Pressable>
                      </View>
                    </View>
                  </View>
                </View>
              </Modal>
            </Pressable>
          ),
        }}
        name="ListingView"
        component={ListingViewScreen}
      />
    </Stack.Navigator>
  );
}

export default HomeStackNavigation;
