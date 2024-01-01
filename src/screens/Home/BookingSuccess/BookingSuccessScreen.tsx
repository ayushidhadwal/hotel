import React, {FC} from 'react';
import {ImageBackground, Pressable, View} from 'react-native';

import {Box, HStack, ScrollView, Button} from 'native-base';
import {Text, Image} from 'react-native';
import {RootBottomTabScreenProps} from '../../../navigation/types';
import {Colors} from '../../../styles/Colors';
import FontStyle from '../../../styles/FontStyle';
import {useTranslation} from 'react-i18next';

type Props = RootBottomTabScreenProps<'BookingSuccess'>;

export const BookingSuccessScreen: FC<Props> = ({navigation}) => {
  const {t} = useTranslation();
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <ImageBackground
        style={{backgroundColor: 'rgba(0, 0, 0, 1)'}}
        source={require('../../../assets/restaurantsetails.png')}>
        <View
          style={{
            justifyContent: 'space-between',

            flexDirection: 'row',
            marginTop: 40,
            marginHorizontal: 12,
          }}>
          <Image
            style={{height: 58.13, width: 59.52}}
            source={require('../../../assets/whitecalendar.png')}
            alt={'no img'}
          />
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Image
              style={{height: 30, width: 30, marginHorizontal: 5}}
              source={require('../../../assets/whatsapp.png')}
              alt={'no img'}
            />
            <Image
              style={{height: 30, width: 30, marginHorizontal: 5}}
              source={require('../../../assets/orangecalendar.png')}
              alt={'no img'}
            />
            <Image
              style={{height: 30, width: 30, marginHorizontal: 5}}
              source={require('../../../assets/blueshareicon.png')}
              alt={'no img'}
            />
          </View>
        </View>
        <Text
          style={{
            fontWeight: 600,
            fontSize: 22,
            ...FontStyle.CustomFont,
            color: Colors.white,
            marginHorizontal: 12,
            marginTop: 40,
            textAlign: 'left',
          }}>
          Hi, Abbas
        </Text>
        <View style={{flexDirection: 'column', marginHorizontal: 12}}>
          <Text
            style={{
              fontWeight: 500,
              fontSize: 18,
              ...FontStyle.CustomFont,
              color: Colors.white,
              marginTop: 30,
              textAlign: 'left',
            }}>
            Thank you!
          </Text>
          <Text
            style={{
              fontWeight: 500,
              fontSize: 16,
              ...FontStyle.CustomFont,
              color: Colors.white,
              // marginTop: 5,
              marginBottom: 40,
              textAlign: 'left',
            }}>
            Your reservation has been noted
          </Text>
        </View>
      </ImageBackground>

      <View
        style={{
          flex: 2,

          justifyContent: 'flex-end',
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
        }}>
        <View
          style={{
            // backgroundColor: 'red',
            top: -20,
            flex: 3,
            backgroundColor: 'white',
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
          }}>
          <View
            style={{
              backgroundColor: 'white',
              marginTop: 40,
              marginHorizontal: 20,
              borderRadius: 5,
              height: 160,
              elevation: 5,
              shadowColor: 'black', // Shadow color
              shadowOffset: {width: 0, height: 2}, // Shadow offset (x, y)
              shadowOpacity: 0.3, // Shadow opacity
              shadowRadius: 5,
            }}>
            <View
              style={{
                flexDirection: 'row',
                height: 46,
                backgroundColor: Colors.primary,
                padding: 7,
                borderTopLeftRadius: 4,
                borderTopRightRadius: 4,
              }}>
              <Image
                style={{height: 35, width: 35}}
                source={require('../../../assets/Cheesecake.png')}
                alt={'no img'}
              />
              <Text
                style={{
                  ...FontStyle.CustomFont,
                  fontSize: 20,
                  fontWeight: 600,
                  color: Colors.white,
                  margin: 3,
                  marginLeft: 6,
                }}>
                The Cheesecake Factory
              </Text>
            </View>
            <View
              style={{
                alignItems: 'center',
                flexDirection: 'row',
                marginLeft: 18,
                marginBottom: 5,
                marginTop: 12,
              }}>
              <Image
                style={{height: 18, width: 16}}
                source={require('../../../assets/calendarblue.png')}
                alt={'no img'}
              />
              <Text
                style={{
                  ...FontStyle.CustomFont,
                  fontSize: 16,
                  fontWeight: 500,
                  color: Colors.primary,
                  marginLeft: 8,
                }}>
                Tuesday, Sep 09 2023
              </Text>
            </View>
            <View
              style={{
                alignItems: 'center',
                flexDirection: 'row',
                marginLeft: 18,
                marginBottom: 5,
                marginTop: 12,
              }}>
              <Image
                style={{height: 18, width: 16}}
                source={require('../../../assets/personblue.png')}
                alt={'no img'}
              />
              <Text
                style={{
                  ...FontStyle.CustomFont,
                  fontSize: 16,
                  fontWeight: 500,
                  color: Colors.primary,
                  marginLeft: 8,
                }}>
                4 guests
              </Text>
            </View>
            <View
              style={{
                alignItems: 'center',
                flexDirection: 'row',
                marginLeft: 18,
                marginBottom: 5,
                marginTop: 12,
              }}>
              <Image
                style={{height: 18, width: 18}}
                source={require('../../../assets/blueclock.png')}
                alt={'no img'}
              />
              <Text
                style={{
                  ...FontStyle.CustomFont,
                  fontSize: 16,
                  fontWeight: 500,
                  color: Colors.primary,
                  marginLeft: 8,
                }}>
                6:00 PM
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 18,
            marginVertical: 12,
          }}>
          <Pressable
            style={{
              borderRadius: 4,
              height: 40,
              backgroundColor: Colors.primary,
              width: 150,
              justifyContent: 'center',
            }}
            bgColor={Colors.primary}>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: 500,
                fontSize: 18,
                ...FontStyle.CustomFont,
                color: Colors.white,
              }}>
              {t('Back to home')}
            </Text>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate('ListingView')}
            style={{
              borderRadius: 4,
              height: 40,
              width: 150,
              backgroundColor: Colors.primary,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: 500,
                fontSize: 18,
                ...FontStyle.CustomFont,
                color: Colors.white,
              }}>
              {t('Get Directions')}
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};
