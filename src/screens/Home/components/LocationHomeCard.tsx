import React, {FC, useState} from 'react';

import {
  Box,
  HStack,
  Pressable,
  VStack,
  ScrollView,
  Input,
  Icon,
} from 'native-base';
import {Colors} from '../../../styles/Colors';
import {Dimensions, Image, View, Text, Modal, Platform} from 'react-native';

import FontStyle from '../../../styles/FontStyle';
import {useTranslation} from 'react-i18next';

const {width, height} = Dimensions.get('screen');

export const LocationHomeCard: FC<Props> = ({onPress}) => {
  const [showModal, setShowModal] = useState(false);
  const {t} = useTranslation();
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Pressable onPress={() => setShowModal(true)}>
        <Image
          style={{
            height: 78.75,
            width: 75,
            alignSelf: 'center',
            marginTop: 35,
          }}
          alt={'no img'}
          source={require('../../../assets/locationicon.png')}
        />

        <Modal animationType={'slide'} transparent={true} visible={showModal}>
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end', // Align the modal to the bottom
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
            }}>
            <View
              style={{
                backgroundColor: 'white',
                maxHeight: Platform.OS === 'ios' ? 770 : 735,
                minHeight: Platform.OS === 'ios' ? 770 : 735,
                borderTopRightRadius: 20,
                borderTopLeftRadius: 20,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginHorizontal: 12,
                  marginTop: 15,
                }}>
                <Pressable onPress={() => setShowModal(false)}>
                  <Text
                    style={{
                      fontWeight: 500,
                      fontSize: 12,
                      ...FontStyle.CustomFont,
                      color: Colors.blue,
                    }}>
                    {t('CLOSE')}
                  </Text>
                </Pressable>

                <Text
                  style={{
                    fontWeight: 600,
                    fontSize: 20,
                    ...FontStyle.CustomFont,
                    color: Colors.primary,
                    textAlign: 'center',
                    marginRight: 15,
                  }}>
                  {t('Select Location')}
                </Text>
                <View />
              </View>
              <View
                style={{
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  marginTop: 30,
                  marginHorizontal: 18,
                }}>
                <Input
                  _focus={{backgroundColor: 'white'}}
                  borderColor={Colors.primary}
                  borderWidth={1}
                  borderRadius={4}
                  w={'88%'}
                  h={35}
                  cursorColor={'#ffffff'}
                  selectionColor={'#ffffff'}
                  placeholder={t('Yousef al bader street, salmiya')}
                  focusOutlineColor={Colors.primary}
                  textAlign={'right'}
                  InputLeftElement={
                    <Image
                      style={{height: 15, width: 15, marginLeft: 8}}
                      source={require('../../../assets/bluelocationpin.png')}
                      alt={'no img'}
                    />
                  }
                />

                <Image
                  style={{height: 30, width: 30}}
                  source={require('../../../assets/focus.png')}
                  alt={'no img'}
                />
              </View>
              <Text
                style={{
                  fontWeight: 500,
                  fontSize: 16,
                  ...FontStyle.CustomFont,
                  color: Colors.primary,
                  marginTop: 30,
                  marginHorizontal: 15,
                  textAlign: 'left',
                }}>
                {t('Search results')}
              </Text>
              <View
                style={{
                  height: 35,
                  width: 350,
                  borderColor: Colors.primary,
                  alignSelf: 'center',
                  borderRadius: 4,
                  borderWidth: 1,
                  justifyContent: 'center',
                  marginTop: 15,
                }}>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                    ...FontStyle.CustomFont,
                    color: Colors.secondary,
                    marginLeft: 8,
                    textAlign: 'left',
                  }}>
                  {t('Yousef al bader street, salmiya')}
                </Text>
              </View>
              <View
                style={{
                  height: 35,
                  width: 350,
                  borderColor: Colors.primary,
                  alignSelf: 'center',
                  borderRadius: 4,
                  borderWidth: 1,
                  justifyContent: 'center',
                  marginTop: 10,
                }}>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                    ...FontStyle.CustomFont,
                    color: Colors.secondary,
                    marginLeft: 8,
                    textAlign: 'left',
                  }}>
                  {t('Yousef al bader street, salmiya')}
                </Text>
              </View>
              <View
                style={{
                  height: 35,
                  width: 350,
                  borderColor: Colors.primary,
                  alignSelf: 'center',
                  borderRadius: 4,
                  borderWidth: 1,
                  justifyContent: 'center',
                  marginTop: 10,
                }}>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                    ...FontStyle.CustomFont,
                    color: Colors.secondary,
                    marginLeft: 8,
                    textAlign: 'left',
                  }}>
                  {t('Yousef al bader street, salmiya')}
                </Text>
              </View>
            </View>
          </View>
        </Modal>
        {/*</View>*/}

        {/*<Modal*/}
        {/*  // minHeight={'400'}*/}
        {/*  position={'absolute'}*/}
        {/*  height={500}*/}
        {/*  backgroundColor={'green.100'}*/}
        {/*  justifyContent={'flex-end'}*/}
        {/*  size={'full'}*/}
        {/*  isOpen={showModal}*/}
        {/*  onClose={() => setShowModal(false)}>*/}
      </Pressable>

      <Text
        style={{
          alignSelf: 'center',
          color: Colors.blue,
          ...FontStyle.CustomFont,
          fontSize: 16,
          fontWeight: 400,
          textAlign: 'center',
          width: 264,
          marginTop: 20,
        }}>
        {t(
          'Please turn on location services in setting to allow to determine your location, or enter a location to search manually.',
        )}
      </Text>
      <Pressable
        style={{
          marginTop: 30,
          alignSelf: 'center',
          borderRadius: 5,
          marginVertical: 2,
          width: 132,
          height: 36,
          justifyContent: 'center',
          marginBottom: 10,
          backgroundColor: Colors.primary,
        }}>
        <Text
          style={{
            ...FontStyle.CustomFont,
            fontSize: 18,
            fontWeight: 600,
            color: Colors.white,
            textAlign: 'center',
          }}>
          {t('Go to settings')}
        </Text>
      </Pressable>

      <Pressable onPress={onPress} style={{alignItems: 'center'}}>
        <Text>show</Text>
      </Pressable>
    </View>
  );
};
