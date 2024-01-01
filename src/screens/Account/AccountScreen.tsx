import React, {FC, useState} from 'react';

import {Box, Button, HStack, Input, ScrollView} from 'native-base';
import {RootBottomTabScreenProps} from '../../navigation/types';
import {View, Text, Image, Pressable, Platform, Modal} from 'react-native';
import {Colors} from '../../styles/Colors';
import FontStyle from '../../styles/FontStyle';
import {useTranslation} from 'react-i18next';

type Props = RootBottomTabScreenProps<'Account'>;

export const AccountScreen: FC<Props> = ({navigation}) => {
  const {t} = useTranslation();
  const [showModal, setShowModal] = useState(false);

  return (
    <View style={{backgroundColor: Colors.white, flex: 1}}>
      <View
        style={{
          alignSelf: 'center',
          marginTop: 20,
          justifyContent: 'center',
        }}>
        <View
          style={{
            position: 'relative',
            height: 86,
            width: 92,
          }}>
          <Image
            source={require('../../assets/rectangle.png')}
            alt={'no img'}
            style={{height: 86, width: 92, marginLeft: 10}}
          />

          <Pressable
            style={{
              // padding: 1,
              height: 15,
              width: 15,
              backgroundColor: Colors.primary,
              position: 'absolute',
              alignItems: 'center',
              justifyContent: 'center',
              right: -10,
              borderTopRightRadius: 4,
              // marginLeft: 10,
            }}>
            <Image
              source={require('../../assets/profilecamera.png')}
              alt={'no img'}
              style={{
                height: 10,
                width: 12.22,
                alignSelf: 'center',
              }}
            />
          </Pressable>
        </View>

        <Text
          style={{
            fontWeight: 600,
            fontSize: 18,
            color: Colors.primary,
            ...FontStyle.CustomFont,
            textAlign: 'center',
            marginTop: 10,
          }}>
          Abbas Galiakot
        </Text>
        <Text
          style={{
            fontWeight: 500,
            fontSize: 12,
            color: Colors.black,
            ...FontStyle.CustomFont,
          }}>
          Joined us on Sept 23, 2023
        </Text>
      </View>

      <Pressable
        onPress={() => navigation.navigate('Profile')}
        style={{
          height: 38,
          width: 328,
          backgroundColor: 'white',
          borderRadius: 4,
          flexDirection: 'row',
          elevation: 5,
          shadowColor: 'black', // Shadow color
          shadowOffset: {width: 0, height: 2}, // Shadow offset (x, y)
          shadowOpacity: 0.3, // Shadow opacity
          shadowRadius: 2,
          alignSelf: 'center',
          alignItems: 'center',
          padding: 8,
          marginTop: 20,
        }}>
        <Image
          style={{height: 24, width: 24, marginRight: 12}}
          alt={'no img'}
          source={require('../../assets/blueaccount.png')}
        />
        <Text
          style={{
            fontSize: 14,
            fontWeight: 500,
            ...FontStyle.CustomFont,
            color: Colors.primary,
          }}>
          {t('Profile')}
        </Text>
      </Pressable>
      <Pressable
        style={{
          height: 38,
          width: 328,
          backgroundColor: 'white',
          borderRadius: 4,
          flexDirection: 'row',
          elevation: 5,
          shadowColor: 'black', // Shadow color
          shadowOffset: {width: 0, height: 2}, // Shadow offset (x, y)
          shadowOpacity: 0.3, // Shadow opacity
          shadowRadius: 2,
          alignSelf: 'center',
          alignItems: 'center',
          padding: 8,
          marginTop: 20,
        }}>
        <Image
          style={{height: 24, width: 24, marginRight: 12}}
          alt={'no img'}
          source={require('../../assets/blueheart.png')}
        />
        <Text
          style={{
            fontSize: 14,
            fontWeight: 500,oore
            ...FontStyle.CustomFont,
            color: Colors.primary,
          }}>
          {t('WishList')}
        </Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate('ChangeNumber')}
        style={{
          height: 38,
          width: 328,
          backgroundColor: 'white',
          borderRadius: 4,
          flexDirection: 'row',
          elevation: 5,
          shadowColor: 'black', // Shadow color
          shadowOffset: {width: 0, height: 2}, // Shadow offset (x, y)
          shadowOpacity: 0.3, // Shadow opacity
          shadowRadius: 2,
          alignSelf: 'center',
          alignItems: 'center',
          padding: 8,
          marginTop: 20,
        }}>
        <Image
          style={{height: 24, width: 24, marginRight: 12}}
          alt={'no img'}
          source={require('../../assets/mobile.png')}
        />
        <Text
          style={{
            fontSize: 14,
            fontWeight: 500,
            ...FontStyle.CustomFont,
            color: Colors.primary,
          }}>
          {t('Change number')}
        </Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate('ResetPassword')}
        style={{
          height: 38,
          width: 328,
          backgroundColor: 'white',
          borderRadius: 4,
          flexDirection: 'row',
          elevation: 5,
          shadowColor: 'black', // Shadow color
          shadowOffset: {width: 0, height: 2}, // Shadow offset (x, y)
          shadowOpacity: 0.3, // Shadow opacity
          shadowRadius: 2,
          alignSelf: 'center',
          alignItems: 'center',
          padding: 8,
          marginTop: 20,
        }}>
        <Image
          style={{height: 24, width: 24, marginRight: 12}}
          alt={'no img'}
          source={require('../../assets/lock.png')}
        />
        <Text
          style={{
            fontSize: 14,
            fontWeight: 500,
            ...FontStyle.CustomFont,
            color: Colors.primary,
          }}>
          {t('Reset password')}
        </Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate('ChangeLanguage')}
        style={{
          height: 38,
          width: 328,
          backgroundColor: 'white',
          borderRadius: 4,
          flexDirection: 'row',
          elevation: 5,
          shadowColor: 'black', // Shadow color
          shadowOffset: {width: 0, height: 2}, // Shadow offset (x, y)
          shadowOpacity: 0.3, // Shadow opacity
          shadowRadius: 2,
          alignSelf: 'center',
          alignItems: 'center',
          padding: 8,
          marginTop: 20,
        }}>
        <Image
          style={{height: 24, width: 24, marginRight: 12}}
          alt={'no img'}
          source={require('../../assets/globe.png')}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',

            width: 275,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 500,
              ...FontStyle.CustomFont,
              color: Colors.primary,
            }}>
            {t('Select Language')}
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: 500,
              ...FontStyle.CustomFont,
              color: Colors.secondary,
            }}>
            {t('English')}
          </Text>
        </View>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate('AboutApp')}
        style={{
          height: 38,
          width: 328,
          backgroundColor: 'white',
          borderRadius: 4,
          flexDirection: 'row',
          elevation: 5,
          shadowColor: 'black', // Shadow color
          shadowOffset: {width: 0, height: 2}, // Shadow offset (x, y)
          shadowOpacity: 0.3, // Shadow opacity
          shadowRadius: 2,
          alignSelf: 'center',
          alignItems: 'center',
          padding: 8,
          marginTop: 20,
        }}>
        <Image
          style={{height: 24, width: 24, marginRight: 12}}
          alt={'no img'}
          source={require('../../assets/about.png')}
        />
        <Text
          style={{
            fontSize: 14,
            fontWeight: 500,
            ...FontStyle.CustomFont,
            color: Colors.primary,
          }}>
          {t('About app')}
        </Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate('ContactUs')}
        style={{
          height: 38,
          width: 328,
          backgroundColor: 'white',
          borderRadius: 4,
          flexDirection: 'row',
          elevation: 5,
          shadowColor: 'black', // Shadow color
          shadowOffset: {width: 0, height: 2}, // Shadow offset (x, y)
          shadowOpacity: 0.3, // Shadow opacity
          shadowRadius: 2,
          alignSelf: 'center',
          alignItems: 'center',
          padding: 8,
          marginTop: 20,
        }}>
        <Image
          style={{height: 24, width: 24, marginRight: 12}}
          alt={'no img'}
          source={require('../../assets/contact.png')}
        />
        <Text
          style={{
            fontSize: 14,
            fontWeight: 500,
            ...FontStyle.CustomFont,
            color: Colors.primary,
          }}>
          {t('Contact us')}
        </Text>
      </Pressable>
      <Pressable
        onPress={() => setShowModal(true)}
        style={{
          height: 38,
          width: 328,
          backgroundColor: 'white',
          borderRadius: 4,
          flexDirection: 'row',
          elevation: 5,
          shadowColor: 'black', // Shadow color
          shadowOffset: {width: 0, height: 2}, // Shadow offset (x, y)
          shadowOpacity: 0.3, // Shadow opacity
          shadowRadius: 2,
          alignSelf: 'center',
          alignItems: 'center',
          padding: 8,
          marginTop: 20,
        }}>
        <Image
          style={{height: 24, width: 24, marginRight: 12}}
          alt={'no img'}
          source={require('../../assets/delete.png')}
        />
        <Text
          style={{
            fontSize: 14,
            fontWeight: 500,
            ...FontStyle.CustomFont,
            color: Colors.primary,
          }}>
          {t('Delete account')}
        </Text>
      </Pressable>
      <Modal animationType={'slide'} transparent={true} visible={showModal}>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end', // Align the modal to the bottom
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}>
          <Pressable onPress={() => setShowModal(false)}>
            <Image
              style={{
                height: 24,
                width: 24,
                alignSelf: 'center',
                marginBottom: 10,
              }}
              source={require('../../assets/squarecross.png')}
            />
          </Pressable>

          <View
            style={{
              backgroundColor: 'white',
              maxHeight: Platform.OS === 'ios' ? 320 : 270,
              minHeight: Platform.OS === 'ios' ? 320 : 270,
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
            }}>
            <View
              style={{
                alignItems: 'center',
                marginHorizontal: 12,
                marginTop: 20,
              }}>
              <Image
                source={require('../../assets/attention.png')}
                style={{height: 55, width: 216}}
                alt={'no img'}
              />
            </View>
            <Text
              style={{
                textAlign: 'center',
                ...FontStyle.CustomFont,
                fontSize: 16,
                fontWeight: 500,
                color: '#FF0000',
                marginTop: 15,
              }}>
              {t('Deleting your account is permanent!')}
            </Text>
            <Text
              style={{
                textAlign: 'center',
                ...FontStyle.CustomFont,
                fontSize: 14,
                fontWeight: 500,
                color: Colors.blue,
                marginTop: 20,
              }}>
              {t('You will need to register again later')}
            </Text>
            <Text
              style={{
                textAlign: 'center',
                ...FontStyle.CustomFont,
                fontSize: 14,
                fontWeight: 500,
                color: Colors.primary,
              }}>
              {t('All your information will be removed')}
            </Text>
            <Pressable
              style={{
                marginTop: 40,
                alignSelf: 'center',
                borderRadius: 5,
                marginVertical: 2,
                width: 328,
                height: 41,
                justifyContent: 'center',
                marginBottom: 5,
                backgroundColor: Colors.primary,
              }}>
              <Text
                style={{
                  ...FontStyle.CustomFont,
                  fontSize: 20,
                  fontWeight: 600,
                  color: Colors.white,
                  textAlign: 'center',
                }}>
                {t('Confirm')}
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};
