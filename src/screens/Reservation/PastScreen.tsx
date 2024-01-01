import React, {FC, useState} from 'react';

import {
  Image,
  View,
  Text,
  Pressable,
  Platform,
  Modal,
  ScrollView,
} from 'react-native';
import {RootBottomTabScreenProps} from '../../navigation/types';
import FontStyle from '../../styles/FontStyle';
import {Colors} from '../../styles/Colors';
import {useTranslation} from 'react-i18next';

type Props = RootBottomTabScreenProps<'Past'>;

export const PastScreen: FC<Props> = ({navigation}) => {
  const {t} = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const [showModal1, setShowModal1] = useState(false);
  return (
    <View
      style={{
        flex: 1,
        // alignItems: 'center', justifyContent: 'center'
      }}>
      <ScrollView style={{backgroundColor: 'white'}}>
        {/*<Image*/}
        {/*  style={{height: 40, width: 40, alignSelf: 'center'}}*/}
        {/*  source={require('../../assets/timer.png')}*/}
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
        {/*{t('No bookings history...yet!')}*/}
        {/*</Text>*/}
        {/*<Text*/}
        {/*  style={{*/}
        {/*    fontSize: 16,*/}
        {/*    fontWeight: 500,*/}
        {/*    ...FontStyle.CustomFont,*/}
        {/*    color: Colors.primary,*/}
        {/*    textAlign: 'center',*/}
        {/*  }}>*/}
        {/*{t('You will see your completed booking here')}*/}
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
              backgroundColor: Colors.lightblue,
              height: 18,
              width: 70,
              borderTopLeftRadius: 4,
              borderBottomRightRadius: 4,
              alignSelf: 'flex-end',
            }}>
            <Pressable onPress={() => setShowModal1(true)}>
              <Text
                style={{
                  color: Colors.white,
                  fontWeight: 500,
                  fontSize: 14,
                  textAlign: 'center',
                  ...FontStyle.CustomFont,
                }}>
                {t('Attended')}
              </Text>
            </Pressable>
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
          <Pressable
            onPress={() => setShowModal(true)}
            style={{
              backgroundColor: Colors.red,
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
              {t('Canceled')}
            </Text>
          </Pressable>
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
              backgroundColor: Colors.red,
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
              {t('Canceled')}
            </Text>
          </View>
        </View>
        {/*-----------modal for cancel------------*/}
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
                maxHeight: Platform.OS === 'ios' ? 775 : 755,
                minHeight: Platform.OS === 'ios' ? 775 : 755,
                borderTopRightRadius: 5,
                borderTopLeftRadius: 5,
              }}>
              <View
                style={{
                  marginHorizontal: 12,
                  marginTop: 20,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Pressable onPress={() => setShowModal(false)}>
                  <Text
                    style={{
                      color: Colors.blue,
                      fontWeight: 500,
                      fontSize: 14,
                      ...FontStyle.CustomFont,
                    }}>
                    {t('DONE')}
                  </Text>
                </Pressable>

                <View
                  style={{
                    backgroundColor: Colors.green,
                    width: 90,
                    height: 20,
                    alignItems: 'center',
                    borderRadius: 4,
                    paddingHorizontal: 5,
                  }}>
                  <Text
                    style={{
                      color: Colors.white,
                      fontWeight: 500,
                      fontSize: 14,
                      ...FontStyle.CustomFont,
                    }}>
                    {t('Confirmed')}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  marginHorizontal: 12,
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  marginTop: 8,
                }}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 600,
                    ...FontStyle.CustomFont,
                    color: Colors.primary,
                  }}>
                  The Cheesecake Factory
                </Text>
                <Image
                  source={require('../../assets/blueshareicon.png')}
                  alt={'no img'}
                  style={{width: 30, height: 30}}
                />
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
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: 330,
                    justifyContent: 'space-between',
                  }}>
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
                  <Image
                    source={require('../../assets/orangecalendar.png')}
                    alt={'no img'}
                    style={{width: 30, height: 30}}
                  />
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  // alignSelf: 'center',
                  marginHorizontal: 15,

                  justifyContent: 'space-between',
                  marginTop: 30,
                }}>
                <View
                  style={{
                    width: 160,
                    height: 62,
                    borderRadius: 4,
                    backgroundColor: 'white',
                    elevation: 5,
                    shadowColor: 'black', // Shadow color
                    shadowOffset: {width: 0, height: 2}, // Shadow offset (x, y)
                    shadowOpacity: 0.3, // Shadow opacity
                    shadowRadius: 2,
                  }}>
                  <View style={{marginLeft: 8, marginTop: 8}}>
                    <Image
                      style={{height: 24, width: 24}}
                      source={require('../../assets/book.png')}
                      alt={'no img'}
                    />
                    <Text
                      style={{
                        color: Colors.primary,
                        ...FontStyle.CustomFont,
                        fontSize: 16,
                        fontWeight: 500,
                        textAlign: 'left',
                      }}>
                      {t('Browse menu')}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    width: 160,
                    height: 62,
                    borderRadius: 4,
                    backgroundColor: 'white',
                    elevation: 5,
                    shadowColor: 'black', // Shadow color
                    shadowOffset: {width: 0, height: 2}, // Shadow offset (x, y)
                    shadowOpacity: 0.3, // Shadow opacity
                    shadowRadius: 2,
                  }}>
                  <View style={{marginLeft: 8, marginTop: 8}}>
                    <Image
                      style={{height: 24, width: 24}}
                      source={require('../../assets/locationpin.png')}
                      alt={'no img'}
                    />
                    <Text
                      style={{
                        color: Colors.primary,
                        ...FontStyle.CustomFont,
                        fontSize: 16,
                        fontWeight: 500,
                        textAlign: 'left',
                      }}>
                      {t('Get Directions')}
                    </Text>
                  </View>
                </View>
              </View>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 600,
                  ...FontStyle.CustomFont,
                  color: Colors.primary,
                  marginLeft: 15,
                  marginTop: 30,
                  textAlign: 'left',
                }}>
                {t("Restaurant's note")}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: 400,
                  ...FontStyle.CustomFont,
                  color: '#808080',
                  marginLeft: 15,
                  lineHeight: 24,
                  textAlign: 'left',
                }}>
                Thankyou for choosing us.{'\n'}Should you plans change, please
                contact us at +965{'\n'}22002200 to ammend your booking.{'\n'}We
                will hold your reservation for a maximum of 15 mins from the
                actual booking time,{'\n'}We look forward to welcome you.
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 600,
                  ...FontStyle.CustomFont,
                  color: Colors.primary,
                  marginLeft: 15,
                  marginTop: 30,
                  textAlign: 'left',
                }}>
                {t('Address')}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginLeft: 15,
                  marginTop: 5,
                }}>
                <Image
                  style={{height: 18.33, width: 16, marginRight: 10}}
                  source={require('../../assets/locationpin.png')}
                  alt={'no img'}
                />
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 400,
                    ...FontStyle.CustomFont,
                    color: '#808080',
                  }}>
                  Street 123, Salmiya, Kuwait
                </Text>
              </View>

              <Pressable
                style={{
                  marginTop: 190,
                  alignSelf: 'center',
                  borderRadius: 5,
                  marginVertical: 2,
                  width: 355,
                  height: 41,
                  justifyContent: 'center',
                  marginBottom: 10,
                  backgroundColor: Colors.red,
                }}>
                <Text
                  style={{
                    ...FontStyle.CustomFont,
                    fontSize: 22,
                    fontWeight: 600,
                    color: Colors.white,
                    textAlign: 'center',
                  }}>
                  {t('Cancel')}
                </Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        {/*-----------modal for attended------------*/}
        <Modal animationType={'slide'} transparent={true} visible={showModal1}>
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end', // Align the modal to the bottom
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
            }}>
            <View
              style={{
                backgroundColor: 'white',
                maxHeight: Platform.OS === 'ios' ? 775 : 755,
                minHeight: Platform.OS === 'ios' ? 775 : 755,
                borderTopRightRadius: 5,
                borderTopLeftRadius: 5,
              }}>
              <View
                style={{
                  marginHorizontal: 12,
                  marginTop: 20,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Pressable onPress={() => setShowModal1(false)}>
                  <Text
                    style={{
                      color: Colors.blue,
                      fontWeight: 500,
                      fontSize: 14,
                      ...FontStyle.CustomFont,
                    }}>
                    {t('DONE')}
                  </Text>
                </Pressable>

                <View
                  style={{
                    backgroundColor: Colors.lightblue,
                    width: 90,
                    height: 20,
                    alignItems: 'center',
                    borderRadius: 4,
                    paddingHorizontal: 5,
                  }}>
                  <Text
                    style={{
                      color: Colors.white,
                      fontWeight: 500,
                      fontSize: 14,
                      ...FontStyle.CustomFont,
                    }}>
                    {t('Attended')}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  marginHorizontal: 12,
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  marginTop: 8,
                }}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 600,
                    ...FontStyle.CustomFont,
                    color: Colors.primary,
                  }}>
                  The Cheesecake Factory
                </Text>
                <Image
                  source={require('../../assets/blueshareicon.png')}
                  alt={'no img'}
                  style={{width: 30, height: 30}}
                />
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
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: 330,
                    justifyContent: 'space-between',
                  }}>
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
                  <Image
                    source={require('../../assets/orangecalendar.png')}
                    alt={'no img'}
                    style={{width: 30, height: 30}}
                  />
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  // alignSelf: 'center',
                  marginHorizontal: 15,

                  justifyContent: 'space-between',
                  marginTop: 30,
                }}>
                <View
                  style={{
                    width: 160,
                    height: 62,
                    borderRadius: 4,
                    backgroundColor: 'white',
                    elevation: 5,
                    shadowColor: 'black', // Shadow color
                    shadowOffset: {width: 0, height: 2}, // Shadow offset (x, y)
                    shadowOpacity: 0.3, // Shadow opacity
                    shadowRadius: 2,
                  }}>
                  <View style={{marginLeft: 8, marginTop: 8}}>
                    <Image
                      style={{height: 24, width: 24}}
                      source={require('../../assets/book.png')}
                      alt={'no img'}
                    />
                    <Text
                      style={{
                        color: Colors.primary,
                        ...FontStyle.CustomFont,
                        fontSize: 16,
                        fontWeight: 500,
                        textAlign: 'left',
                      }}>
                      {t('Browse menu')}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    width: 160,
                    height: 62,
                    borderRadius: 4,
                    backgroundColor: 'white',
                    elevation: 5,
                    shadowColor: 'black', // Shadow color
                    shadowOffset: {width: 0, height: 2}, // Shadow offset (x, y)
                    shadowOpacity: 0.3, // Shadow opacity
                    shadowRadius: 2,
                  }}>
                  <View style={{marginLeft: 8, marginTop: 8}}>
                    <Image
                      style={{height: 24, width: 24}}
                      source={require('../../assets/locationpin.png')}
                      alt={'no img'}
                    />
                    <Text
                      style={{
                        color: Colors.primary,
                        ...FontStyle.CustomFont,
                        fontSize: 16,
                        fontWeight: 500,
                        textAlign: 'left',
                      }}>
                      {t('Get Directions')}
                    </Text>
                  </View>
                </View>
              </View>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 600,
                  ...FontStyle.CustomFont,
                  color: Colors.primary,
                  marginLeft: 15,
                  marginTop: 30,
                  textAlign: 'left',
                }}>
                {t("Restaurant's note")}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: 400,
                  ...FontStyle.CustomFont,
                  color: '#808080',
                  marginLeft: 15,
                  lineHeight: 24,
                  textAlign: 'left',
                }}>
                Thankyou for choosing us.{'\n'}Should you plans change, please
                contact us at +965{'\n'}22002200 to ammend your booking.{'\n'}We
                will hold your reservation for a maximum of 15 mins from the
                actual booking time,{'\n'}We look forward to welcome you.
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 600,
                  ...FontStyle.CustomFont,
                  color: Colors.primary,
                  marginLeft: 15,
                  marginTop: 30,
                  textAlign: 'left',
                }}>
                {t('Address')}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginLeft: 15,
                  marginTop: 5,
                }}>
                <Image
                  style={{height: 18.33, width: 16, marginRight: 10}}
                  source={require('../../assets/locationpin.png')}
                  alt={'no img'}
                />
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 400,
                    ...FontStyle.CustomFont,
                    color: '#808080',
                  }}>
                  Street 123, Salmiya, Kuwait
                </Text>
              </View>

              <Pressable
                // onPress={() => navigation.navigate('Review')}
                style={{
                  marginTop: 190,
                  alignSelf: 'center',
                  borderRadius: 5,
                  marginVertical: 2,
                  width: 355,
                  height: 41,
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
                  {t('Review your visit')}
                </Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </View>
  );
};
