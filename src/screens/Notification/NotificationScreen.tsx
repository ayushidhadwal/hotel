import React, {FC, useState} from 'react';

import {Box} from 'native-base';
import {RootStackScreenProps} from '../../navigation/types';

import {View, Text, Image} from 'react-native';

import FontStyle from '../../styles/FontStyle';
import {Colors} from '../../styles/Colors';
import {useTranslation} from 'react-i18next';

type Props = RootStackScreenProps<'Notification'>;

export const NotificationScreen: FC<Props> = ({navigation}) => {
  const {t} = useTranslation();
  const [show, setShow] = useState(false);
  return (
    <Box bgColor={Colors.primary} flex={1}>
      {/*------------------------notificantions are turned off--------------------*/}

      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Image
          style={{height: 100, width: 100}}
          source={require('../../assets/nonotifications.png')}
          alt={'no img'}
        />
        <Text
          style={{
            fontSize: 22,
            fontWeight: 600,
            ...FontStyle.CustomFont,
            color: Colors.white,
            marginVertical: 10,
          }}>
          {/*{t('No notifications')}*/}
          {t('Notifications are turned OFF')}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 500,
            ...FontStyle.CustomFont,
            color: Colors.white,
          }}>
          {t('Keep it enabled, to receive')}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 500,
            ...FontStyle.CustomFont,
            color: Colors.white,
          }}>
          {t('offers and promotions details')}
        </Text>
      </View>

      {/*--------------------------notification list--------------------------*/}

      {/*<View>*/}
      {/*  <Text*/}
      {/*    style={{*/}
      {/*      fontSize: 18,*/}
      {/*      fontWeight: 500,*/}
      {/*      ...FontStyle.CustomFont,*/}
      {/*      color: Colors.blue,*/}
      {/*      // padding: 10,*/}
      {/*      marginTop: 20,*/}
      {/*      marginLeft: 15,*/}
      {/*    }}>*/}
      {/*{t("Today")}*/}
      {/*  </Text>*/}
      {/*  <View*/}
      {/*    style={{*/}
      {/*      height: 54,*/}
      {/*      width: 350,*/}
      {/*      backgroundColor: 'white',*/}
      {/*      borderRadius: 4,*/}
      {/*      elevation: 5,*/}
      {/*      shadowColor: 'black', // Shadow color*/}
      {/*      shadowOffset: {width: 0, height: 2}, // Shadow offset (x, y)*/}
      {/*      shadowOpacity: 0.3, // Shadow opacity*/}
      {/*      shadowRadius: 2,*/}
      {/*      alignSelf: 'center',*/}
      {/*      marginTop: 10,*/}
      {/*    }}>*/}
      {/*    <View style={{marginLeft: 10}}>*/}
      {/*      <Text*/}
      {/*        style={{*/}
      {/*          fontSize: 16,*/}
      {/*          fontWeight: 500,*/}
      {/*          ...FontStyle.CustomFont,*/}
      {/*          color: Colors.primary,*/}
      {/*          marginTop: 2,*/}
      {/*        }}>*/}
      {/*        The Cheesecake Factory*/}
      {/*      </Text>*/}
      {/*      <Text*/}
      {/*        style={{*/}
      {/*          fontSize: 14,*/}
      {/*          fontWeight: 500,*/}
      {/*          ...FontStyle.CustomFont,*/}
      {/*          color: Colors.blue,*/}
      {/*          marginTop: 5,*/}
      {/*        }}>*/}
      {/*        Upto 20% discount on first reservation*/}
      {/*      </Text>*/}
      {/*    </View>*/}
      {/*  </View>*/}
      {/*  <View*/}
      {/*    style={{*/}
      {/*      height: 54,*/}
      {/*      width: 350,*/}
      {/*      backgroundColor: 'white',*/}
      {/*      borderRadius: 4,*/}
      {/*      elevation: 5,*/}
      {/*      shadowColor: 'black', // Shadow color*/}
      {/*      shadowOffset: {width: 0, height: 2}, // Shadow offset (x, y)*/}
      {/*      shadowOpacity: 0.3, // Shadow opacity*/}
      {/*      shadowRadius: 2,*/}
      {/*      alignSelf: 'center',*/}
      {/*      marginTop: 10,*/}
      {/*    }}>*/}
      {/*    <View style={{marginLeft: 10}}>*/}
      {/*      <Text*/}
      {/*        style={{*/}
      {/*          fontSize: 16,*/}
      {/*          fontWeight: 500,*/}
      {/*          ...FontStyle.CustomFont,*/}
      {/*          color: Colors.primary,*/}
      {/*          marginTop: 2,*/}
      {/*        }}>*/}
      {/*        Palm palace*/}
      {/*      </Text>*/}
      {/*      <Text*/}
      {/*        style={{*/}
      {/*          fontSize: 14,*/}
      {/*          fontWeight: 500,*/}
      {/*          ...FontStyle.CustomFont,*/}
      {/*          color: Colors.blue,*/}
      {/*          marginTop: 5,*/}
      {/*        }}>*/}
      {/*        Upto 20% discount on first reservation*/}
      {/*      </Text>*/}
      {/*    </View>*/}
      {/*  </View>*/}
      {/*  <Text*/}
      {/*    style={{*/}
      {/*      fontSize: 18,*/}
      {/*      fontWeight: 500,*/}
      {/*      ...FontStyle.CustomFont,*/}
      {/*      color: Colors.blue,*/}
      {/*      padding: 10,*/}
      {/*      marginTop: 20,*/}
      {/*      marginLeft: 15,*/}
      {/*    }}>*/}
      {/*{t("Yesterday")}*/}
      {/*  </Text>*/}
      {/*  <View*/}
      {/*    style={{*/}
      {/*      height: 54,*/}
      {/*      width: 350,*/}
      {/*      backgroundColor: 'white',*/}
      {/*      borderRadius: 4,*/}
      {/*      elevation: 5,*/}
      {/*      shadowColor: 'black', // Shadow color*/}
      {/*      shadowOffset: {width: 0, height: 2}, // Shadow offset (x, y)*/}
      {/*      shadowOpacity: 0.3, // Shadow opacity*/}
      {/*      shadowRadius: 2,*/}
      {/*      alignSelf: 'center',*/}
      {/*      marginTop: 10,*/}
      {/*    }}>*/}
      {/*    <View style={{marginLeft: 10}}>*/}
      {/*      <Text*/}
      {/*        style={{*/}
      {/*          fontSize: 16,*/}
      {/*          fontWeight: 500,*/}
      {/*          ...FontStyle.CustomFont,*/}
      {/*          color: Colors.primary,*/}
      {/*          marginTop: 2,*/}
      {/*        }}>*/}
      {/*        Hard rock cafe*/}
      {/*      </Text>*/}
      {/*      <Text*/}
      {/*        style={{*/}
      {/*          fontSize: 14,*/}
      {/*          fontWeight: 500,*/}
      {/*          ...FontStyle.CustomFont,*/}
      {/*          color: Colors.blue,*/}
      {/*          marginTop: 5,*/}
      {/*        }}>*/}
      {/*        Upto 20% discount on first reservation*/}
      {/*      </Text>*/}
      {/*    </View>*/}
      {/*  </View>*/}
      {/*  <View*/}
      {/*    style={{*/}
      {/*      height: 54,*/}
      {/*      width: 350,*/}
      {/*      backgroundColor: 'white',*/}
      {/*      borderRadius: 4,*/}
      {/*      elevation: 5,*/}
      {/*      shadowColor: 'black', // Shadow color*/}
      {/*      shadowOffset: {width: 0, height: 2}, // Shadow offset (x, y)*/}
      {/*      shadowOpacity: 0.3, // Shadow opacity*/}
      {/*      shadowRadius: 2,*/}
      {/*      alignSelf: 'center',*/}
      {/*      marginTop: 10,*/}
      {/*    }}>*/}
      {/*    <View style={{marginLeft: 10}}>*/}
      {/*      <Text*/}
      {/*        style={{*/}
      {/*          fontSize: 16,*/}
      {/*          fontWeight: 500,*/}
      {/*          ...FontStyle.CustomFont,*/}
      {/*          color: Colors.primary,*/}
      {/*          marginTop: 2,*/}
      {/*        }}>*/}
      {/*        Palm palace*/}
      {/*      </Text>*/}
      {/*      <Text*/}
      {/*        style={{*/}
      {/*          fontSize: 14,*/}
      {/*          fontWeight: 500,*/}
      {/*          ...FontStyle.CustomFont,*/}
      {/*          color: Colors.blue,*/}
      {/*          marginTop: 5,*/}
      {/*        }}>*/}
      {/*        Upto 20% discount on first reservation*/}
      {/*      </Text>*/}
      {/*    </View>*/}
      {/*  </View>*/}
      {/*</View>*/}
    </Box>
  );
};
