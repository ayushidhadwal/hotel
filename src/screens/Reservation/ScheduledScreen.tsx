import React, {FC} from 'react';

import {Box, Button, HStack} from 'native-base';
import {Image, Pressable, View, Text, ScrollView} from 'react-native';
import {RootBottomTabScreenProps} from '../../navigation/types';
import FontStyle from '../../styles/FontStyle';
import {Colors} from '../../styles/Colors';
import {useTranslation} from 'react-i18next';

type Props = RootBottomTabScreenProps<'Scheduled'>;

export const ScheduledScreen: FC<Props> = ({navigation}) => {
  const {t} = useTranslation();
  return (
    <View
      style={{
        flex: 1,

        // alignItems: 'center',
        // justifyContent: 'center',
      }}>
      <ScrollView
        style={{
          backgroundColor: Colors.white,
        }}
        showsVerticalScrollIndicator={false}>
        {/*<Image*/}
        {/*  style={{height: 50, width: 50, alignSelf: 'center'}}*/}
        {/*  source={require('../../assets/bluecalendar.png')}*/}
        {/*  alt={'no img'}*/}
        {/*/>*/}
        {/*<Text*/}
        {/*  style={{*/}
        {/*    fontSize: 20,*/}
        {/*    fontWeight: 600,*/}
        {/*    ...FontStyle.CustomFont,*/}
        {/*    color: Colors.primary,*/}
        {/*    marginTop: 10,*/}
        {/*    textAlign: 'center',*/}
        {/*  }}>*/}
        {/*{t('No Scheduled reservation...yet!')}*/}
        {/*</Text>*/}
        {/*<Text*/}
        {/*  style={{*/}
        {/*    fontSize: 16,*/}
        {/*    fontWeight: 500,*/}
        {/*    ...FontStyle.CustomFont,*/}
        {/*    color: Colors.primary,*/}
        {/*    textAlign: 'center',*/}
        {/*  }}>*/}
        {/*{t('You will see your upcoming schedules here')}*/}
        {/*</Text>*/}

        <View
          style={{
            backgroundColor: 'white',
            elevation: 5,
            shadowColor: 'black', // Shadow color
            shadowOffset: {width: 0, height: 2}, // Shadow offset (x, y)
            shadowOpacity: 0.3, // Shadow opacity
            shadowRadius: 2,
            height: 128,
            width: 350,
            alignSelf: 'center',
            marginTop: 40,
            borderRadius: 4,
            marginBottom: 2,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderWidth: 1,
              borderTopRightRadius: 4,
              borderTopLeftRadius: 4,
              borderColor: '#F0F0F0',

              paddingBottom: 7,
            }}>
            <Image
              style={{
                height: 34,
                width: 34,
                marginLeft: 12,
                marginTop: 8,
                marginRight: 8,
              }}
              source={require('../../assets/Cheesecake.png')}
              alt={'no img'}
            />
            <View
              style={{
                width: 290,
                justifyContent: 'space-between',
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  fontWeight: 500,
                  fontSize: 18,
                  ...FontStyle.CustomFont,
                  color: Colors.primary,
                  marginTop: 8,
                }}>
                The Cheesecake Factory
              </Text>
              <View
                style={{
                  marginTop: 5,
                  height: 25,
                  width: 25,
                  borderRadius: 100,
                  backgroundColor: '#F0F0F0',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  style={{height: 12, width: 11.97}}
                  source={require('../../assets/redtelegram.png')}
                  alt={'no img'}
                />
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 12,
              marginTop: 15,
            }}>
            <View
              style={{
                width: 40,
                height: 45,
                backgroundColor: '#F0F0F0',
                borderRadius: 4,
                padding: 3,
              }}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  ...FontStyle.CustomFont,
                  color: Colors.black,
                  textAlign: 'center',
                }}>
                SEP
              </Text>
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: 600,
                  ...FontStyle.CustomFont,
                  color: Colors.black,
                  textAlign: 'center',
                }}>
                15
              </Text>
            </View>
            <View style={{marginLeft: 12}}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 500,
                  ...FontStyle.CustomFont,
                  color: Colors.primary,
                  textAlign: 'left',
                }}>
                Thursday
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  ...FontStyle.CustomFont,
                  color: '#808080',
                }}>
                6:00 PM {''}{' '}
                <Text style={{color: Colors.primary}}>4 People</Text>
              </Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: Colors.black,
              height: 18,
              width: 70,
              borderTopLeftRadius: 4,
              borderBottomRightRadius: 4,
              alignSelf: 'flex-end',
            }}>
            <Text
              style={{
                color: Colors.white,
                fontWeight: 500,
                fontSize: 14,
                textAlign: 'center',
                ...FontStyle.CustomFont,
              }}>
              {t('Waiting list')}
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            elevation: 5,
            shadowColor: 'black', // Shadow color
            shadowOffset: {width: 0, height: 2}, // Shadow offset (x, y)
            shadowOpacity: 0.3, // Shadow opacity
            shadowRadius: 2,
            height: 128,
            width: 350,
            alignSelf: 'center',
            marginTop: 30,
            borderRadius: 4,
            marginBottom: 2,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderWidth: 1,
              borderTopRightRadius: 4,
              borderTopLeftRadius: 4,
              borderColor: '#F0F0F0',

              paddingBottom: 7,
            }}>
            <Image
              style={{
                height: 34,
                width: 34,
                marginLeft: 12,
                marginTop: 8,
                marginRight: 8,
              }}
              source={require('../../assets/Cheesecake.png')}
              alt={'no img'}
            />
            <View
              style={{
                width: 290,
                justifyContent: 'space-between',
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  fontWeight: 500,
                  fontSize: 18,
                  ...FontStyle.CustomFont,
                  color: Colors.primary,
                  marginTop: 8,
                }}>
                The Cheesecake Factory
              </Text>
              <View
                style={{
                  marginTop: 5,
                  height: 25,
                  width: 25,
                  borderRadius: 100,
                  backgroundColor: '#F0F0F0',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  style={{height: 12, width: 11.97}}
                  source={require('../../assets/redtelegram.png')}
                  alt={'no img'}
                />
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 12,
              marginTop: 15,
            }}>
            <View
              style={{
                width: 40,
                height: 45,
                backgroundColor: '#F0F0F0',
                borderRadius: 4,
                padding: 3,
              }}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  ...FontStyle.CustomFont,
                  color: Colors.black,
                  textAlign: 'center',
                }}>
                SEP
              </Text>
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: 600,
                  ...FontStyle.CustomFont,
                  color: Colors.black,
                  textAlign: 'center',
                }}>
                15
              </Text>
            </View>
            <View style={{marginLeft: 12}}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 500,
                  ...FontStyle.CustomFont,
                  color: Colors.primary,
                  textAlign: 'left',
                }}>
                Thursday
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  ...FontStyle.CustomFont,
                  color: '#808080',
                }}>
                6:00 PM {''}{' '}
                <Text style={{color: Colors.primary}}>4 People</Text>
              </Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: Colors.green,
              height: 18,
              width: 70,
              borderTopLeftRadius: 4,
              borderBottomRightRadius: 4,
              alignSelf: 'flex-end',
            }}>
            <Text
              style={{
                color: Colors.white,
                fontWeight: 500,
                fontSize: 14,
                textAlign: 'center',
                ...FontStyle.CustomFont,
              }}>
              {t('Confirmed')}
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            elevation: 5,
            shadowColor: 'black', // Shadow color
            shadowOffset: {width: 0, height: 2}, // Shadow offset (x, y)
            shadowOpacity: 0.3, // Shadow opacity
            shadowRadius: 2,
            height: 128,
            width: 350,
            alignSelf: 'center',
            marginTop: 30,
            borderRadius: 4,
            marginBottom: 2,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderWidth: 1,
              borderTopRightRadius: 4,
              borderTopLeftRadius: 4,
              borderColor: '#F0F0F0',

              paddingBottom: 7,
            }}>
            <Image
              style={{
                height: 34,
                width: 34,
                marginLeft: 12,
                marginTop: 8,
                marginRight: 8,
              }}
              source={require('../../assets/Cheesecake.png')}
              alt={'no img'}
            />
            <View
              style={{
                width: 290,
                justifyContent: 'space-between',
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  fontWeight: 500,
                  fontSize: 18,
                  ...FontStyle.CustomFont,
                  color: Colors.primary,
                  marginTop: 8,
                }}>
                The Cheesecake Factory
              </Text>
              <View
                style={{
                  marginTop: 5,
                  height: 25,
                  width: 25,
                  borderRadius: 100,
                  backgroundColor: '#F0F0F0',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  style={{height: 12, width: 11.97}}
                  source={require('../../assets/redtelegram.png')}
                  alt={'no img'}
                />
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 12,
              marginTop: 15,
            }}>
            <View
              style={{
                width: 40,
                height: 45,
                backgroundColor: '#F0F0F0',
                borderRadius: 4,
                padding: 3,
              }}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  ...FontStyle.CustomFont,
                  color: Colors.black,
                  textAlign: 'center',
                }}>
                SEP
              </Text>
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: 600,
                  ...FontStyle.CustomFont,
                  color: Colors.black,
                  textAlign: 'center',
                }}>
                15
              </Text>
            </View>
            <View style={{marginLeft: 12}}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 500,
                  ...FontStyle.CustomFont,
                  color: Colors.primary,
                  textAlign: 'left',
                }}>
                Thursday
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  ...FontStyle.CustomFont,
                  color: '#808080',
                }}>
                6:00 PM {''}{' '}
                <Text style={{color: Colors.primary}}>4 People</Text>
              </Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: Colors.purple,
              height: 18,
              width: 70,
              borderTopLeftRadius: 4,
              borderBottomRightRadius: 4,
              alignSelf: 'flex-end',
            }}>
            <Text
              style={{
                color: Colors.white,
                fontWeight: 500,
                fontSize: 14,
                textAlign: 'center',
                ...FontStyle.CustomFont,
              }}>
              {t('Pending')}
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
