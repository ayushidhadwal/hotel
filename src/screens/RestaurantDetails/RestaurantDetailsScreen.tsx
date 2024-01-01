import React from 'react';

import {Box, Button, HStack, ScrollView, VStack} from 'native-base';
import {Text, Image, View, Pressable} from 'react-native';

import {Colors} from '../../styles/Colors';
import FontStyle from '../../styles/FontStyle';
import {useTranslation} from 'react-i18next';

export const RestaurantDetailsScreen = () => {
  const {t} = useTranslation();
  return (
    <ScrollView flex={1}>
      <Text
        style={{
          ...FontStyle.CustomFont,
          fontSize: 16,
          fontWeight: 600,
          marginLeft: 13,
          marginTop: 12,
          textAlign: 'left',

          color: Colors.primary,
        }}>
        {t('Restaurant amenities')}
      </Text>
      <VStack>
        <HStack ml={4} alignItems={'center'}>
          <Image
            style={{marginLeft: 2, height: 20, width: 20, marginRight: 2}}
            source={require('../../assets/check.png')}
            alt={'no img'}
          />
          <Text
            style={{
              ...FontStyle.CustomFont,
              fontSize: 14,
              fontWeight: 500,
              marginLeft: 4,
              color: Colors.secondary,
            }}>
            Valet parking
          </Text>
        </HStack>
        <HStack ml={4} alignItems={'center'}>
          <Image
            style={{marginLeft: 2, height: 20, width: 20, marginRight: 2}}
            source={require('../../assets/cross.png')}
            alt={'no img'}
          />
          <Text
            style={{
              ...FontStyle.CustomFont,
              fontSize: 14,
              fontWeight: 500,
              marginLeft: 4,
              color: Colors.secondary,
            }}>
            smoking allowed
          </Text>
        </HStack>
        <HStack ml={4} alignItems={'center'}>
          <Image
            style={{marginLeft: 2, height: 20, width: 20, marginRight: 2}}
            source={require('../../assets/cross.png')}
            alt={'no img'}
          />
          <Text
            style={{
              ...FontStyle.CustomFont,
              fontSize: 14,
              fontWeight: 500,
              marginLeft: 4,
              color: Colors.secondary,
            }}>
            serves alcohol
          </Text>
        </HStack>
        <HStack ml={4} alignItems={'center'}>
          <Image
            style={{marginLeft: 2, height: 20, width: 20, marginRight: 2}}
            source={require('../../assets/check.png')}
            alt={'no img'}
          />
          <Text
            style={{
              ...FontStyle.CustomFont,
              fontSize: 14,
              fontWeight: 500,
              marginLeft: 4,
              color: Colors.secondary,
            }}>
            Outdoor seating
          </Text>
        </HStack>
        <HStack ml={4} alignItems={'center'}>
          <Image
            style={{marginLeft: 2, height: 20, width: 20, marginRight: 2}}
            source={require('../../assets/check.png')}
            alt={'no img'}
          />
          <Text
            style={{
              ...FontStyle.CustomFont,
              fontSize: 14,
              fontWeight: 500,
              marginLeft: 4,
              color: Colors.secondary,
            }}>
            Accepts cash
          </Text>
        </HStack>
        <HStack ml={4} alignItems={'center'}>
          <Image
            style={{marginLeft: 2, height: 20, width: 20, marginRight: 2}}
            source={require('../../assets/check.png')}
            alt={'no img'}
          />
          <Text
            style={{
              ...FontStyle.CustomFont,
              fontSize: 14,
              fontWeight: 500,
              marginLeft: 4,
              color: Colors.secondary,
            }}>
            cctv survellience
          </Text>
        </HStack>
      </VStack>
      <Text
        style={{
          ...FontStyle.CustomFont,
          fontSize: 16,
          fontWeight: 600,
          marginLeft: 13,
          marginTop: 12,
          color: Colors.primary,
          textAlign: 'left',
        }}>
        {t('Hours of operation')}
      </Text>
      <VStack space={3}>
        <HStack style={{marginHorizontal: 20}} justifyContent={'space-between'}>
          <View>
            <Text
              style={{
                ...FontStyle.CustomFont,
                fontSize: 14,
                fontWeight: 500,
                marginLeft: 5,
                marginTop: 12,
                color: Colors.primary,
              }}>
              Sunday
            </Text>
            <Text
              style={{
                ...FontStyle.CustomFont,
                fontSize: 12,
                fontWeight: 500,
                color: Colors.secondary,
                marginLeft: 8,
              }}>
              9:00 AM-11:00 PM
            </Text>
          </View>
          <View>
            <Text
              style={{
                ...FontStyle.CustomFont,
                fontSize: 14,
                fontWeight: 500,
                marginTop: 12,
                color: Colors.primary,
              }}>
              Thursday
            </Text>
            <Text
              style={{
                ...FontStyle.CustomFont,
                fontSize: 12,
                fontWeight: 500,
                color: Colors.secondary,
              }}>
              9:00 AM-11:00 PM
            </Text>
          </View>
          <View></View>
        </HStack>
        <HStack style={{marginHorizontal: 20}} justifyContent={'space-between'}>
          <View>
            <Text
              style={{
                ...FontStyle.CustomFont,
                fontSize: 14,
                fontWeight: 500,
                marginLeft: 5,
                marginTop: 12,
                color: Colors.primary,
              }}>
              Monday
            </Text>
            <Text
              style={{
                ...FontStyle.CustomFont,
                fontSize: 12,
                fontWeight: 500,
                color: Colors.secondary,
                marginLeft: 8,
              }}>
              9:00 AM-11:00 PM
            </Text>
          </View>
          <View>
            <Text
              style={{
                ...FontStyle.CustomFont,
                fontSize: 14,
                fontWeight: 500,
                marginTop: 12,
                color: Colors.green,
              }}>
              Friday
            </Text>
            <Text
              style={{
                ...FontStyle.CustomFont,
                fontSize: 12,
                fontWeight: 500,
                color: Colors.secondary,
              }}>
              9:00 AM-11:00 PM
            </Text>
          </View>
          <View></View>
        </HStack>
        <HStack style={{marginHorizontal: 20}} justifyContent={'space-between'}>
          <View>
            <Text
              style={{
                ...FontStyle.CustomFont,
                fontSize: 14,
                fontWeight: 500,
                marginLeft: 5,
                marginTop: 12,
                color: Colors.primary,
              }}>
              Tuesday
            </Text>
            <Text
              style={{
                ...FontStyle.CustomFont,
                fontSize: 12,
                fontWeight: 500,
                color: Colors.secondary,
                marginLeft: 8,
              }}>
              9:00 AM-11:00 PM
            </Text>
          </View>
          <View>
            <Text
              style={{
                ...FontStyle.CustomFont,
                fontSize: 14,
                fontWeight: 500,
                marginTop: 12,
                color: Colors.primary,
              }}>
              Saturday
            </Text>
            <Text
              style={{
                ...FontStyle.CustomFont,
                fontSize: 12,
                fontWeight: 500,
                color: Colors.secondary,
              }}>
              9:00 AM-11:00 PM
            </Text>
          </View>
          <View></View>
        </HStack>
        <HStack style={{marginHorizontal: 20}} justifyContent={'space-between'}>
          <View>
            <Text
              style={{
                ...FontStyle.CustomFont,
                fontSize: 14,
                fontWeight: 500,
                marginLeft: 5,
                marginTop: 12,
                color: Colors.primary,
              }}>
              Wednesday
            </Text>
            <Text
              style={{
                ...FontStyle.CustomFont,
                fontSize: 12,
                fontWeight: 500,
                color: Colors.secondary,
                marginLeft: 8,
              }}>
              9:00 AM-11:00 PM
            </Text>
          </View>
          {/*<View>*/}
          {/*  <Text*/}
          {/*    style={{*/}
          {/*      ...FontStyle.CustomFont,*/}
          {/*      fontSize: 14,*/}
          {/*      fontWeight: 500,*/}
          {/*      marginTop: 12,*/}
          {/*      color: Colors.primary,*/}
          {/*    }}>*/}
          {/*    Saturday*/}
          {/*  </Text>*/}
          {/*  <Text*/}
          {/*    style={{*/}
          {/*      ...FontStyle.CustomFont,*/}
          {/*      fontSize: 12,*/}
          {/*      fontWeight: 500,*/}
          {/*      color: Colors.secondary,*/}
          {/*    }}>*/}
          {/*    9:00 AM-11:00 PM*/}
          {/*  </Text>*/}
          {/*</View>*/}
          <View></View>
        </HStack>
      </VStack>

      <VStack mx={4}>
        <Text
          style={{
            ...FontStyle.CustomFont,
            fontSize: 16,
            fontWeight: 600,
            marginTop: 18,
            color: Colors.primary,
            textAlign: 'left',
          }}>
          {t('Additional information')}
        </Text>
        <Text
          style={{
            ...FontStyle.CustomFont,
            fontSize: 14,
            fontWeight: 500,
            marginTop: 10,
            color: Colors.secondary,
            textAlign: 'left',
          }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </Text>
      </VStack>
      <Pressable
        style={{
          marginTop: 30,
          alignSelf: 'center',
          borderRadius: 5,
          marginVertical: 2,
          width: '95%',
          height: 45,
          justifyContent: 'center',
          marginBottom: 10,
        }}
        backgroundColor={Colors.primary}>
        <Text
          style={{
            ...FontStyle.CustomFont,
            fontSize: 22,
            fontWeight: 600,
            color: Colors.white,
            textAlign: 'center',
          }}>
          {t('Reserve now')}
        </Text>
      </Pressable>
    </ScrollView>
  );
};
