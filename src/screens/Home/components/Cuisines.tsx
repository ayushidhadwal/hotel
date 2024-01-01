import React, {FC} from 'react';

import {HStack, Image, Box, VStack} from 'native-base';
import {Colors} from '../../../styles/Colors';
import {Dimensions} from 'react-native';
import {View, Text} from 'react-native';
import FontStyle from '../../../styles/FontStyle';

const width = Dimensions.get('screen').width;

type Props = {heading: string; country: string};

export const Cuisines: FC<Props> = ({heading, country}) => {
  return (
    <View>
      <View style={{marginHorizontal: 3}}>
        <Text
          style={{
            ...FontStyle.CustomFont,
            fontWeight: 600,
            fontSize: 20,
            lineHeight: 20,
            color: Colors.primary,
            marginLeft: 13,
            marginTop: 5,
            textAlign: 'left',
          }}>
          {heading}
        </Text>
      </View>

      <View style={{paddingTop: 1, marginLeft: 12}}>
        <View style={{}}>
          <View
            style={{
              // backgroundColor: 'yellow',
              flexDirection: 'row',
              flexWrap: 'wrap',
              width: width,
            }}>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                width: width / 3,
                height: 40,
                borderColor: Colors.primary,
                marginHorizontal: 5,
                marginTop: 5,
                borderWidth: 2,
                borderRadius: 5,
                backgroundColor: 'white',
              }}>
              <Text
                style={{
                  ...FontStyle.CustomFont,
                  fontSize: 18,
                  fontWeight: 500,
                  textAlign: 'center',
                  color: Colors.primary,
                  marginVertical: 5,
                }}>
                American
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                width: width / 3,
                height: 40,
                borderColor: Colors.primary,
                marginHorizontal: 5,
                marginTop: 5,
                borderWidth: 2,
                borderRadius: 5,
                backgroundColor: 'white',
              }}>
              <Text
                style={{
                  ...FontStyle.CustomFont,
                  fontSize: 18,
                  fontWeight: 500,
                  textAlign: 'center',
                  color: Colors.primary,
                  marginVertical: 5,
                }}>
                American
              </Text>
            </View>

            <View
              style={{
                flex: 1,
                alignItems: 'center',
                width: width / 3,
                height: 40,
                borderColor: Colors.primary,
                marginHorizontal: 5,
                marginTop: 5,
                borderWidth: 2,
                borderRadius: 5,
                backgroundColor: 'white',
              }}>
              <Text
                style={{
                  ...FontStyle.CustomFont,
                  fontSize: 18,
                  fontWeight: 500,
                  textAlign: 'center',
                  color: Colors.primary,
                  marginVertical: 5,
                }}>
                American
              </Text>
            </View>
          </View>
          <View
            style={{
              // backgroundColor: 'yellow',
              flexDirection: 'row',
              flexWrap: 'wrap',
              width: width,
            }}>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                width: width / 3,
                height: 40,
                borderColor: Colors.primary,
                marginHorizontal: 5,
                marginTop: 5,
                borderWidth: 2,
                borderRadius: 5,
                backgroundColor: 'white',
              }}>
              <Text
                style={{
                  ...FontStyle.CustomFont,
                  fontSize: 18,
                  fontWeight: 500,
                  textAlign: 'center',
                  color: Colors.primary,
                  marginVertical: 5,
                }}>
                American
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                width: width / 3,
                height: 40,
                borderColor: Colors.primary,
                marginHorizontal: 5,
                marginTop: 5,
                borderWidth: 2,
                borderRadius: 5,
                backgroundColor: 'white',
              }}>
              <Text
                style={{
                  ...FontStyle.CustomFont,
                  fontSize: 18,
                  fontWeight: 500,
                  textAlign: 'center',
                  color: Colors.primary,
                  marginVertical: 5,
                }}>
                American
              </Text>
            </View>

            <View
              style={{
                flex: 1,
                alignItems: 'center',
                width: width / 3,
                height: 40,
                borderColor: Colors.primary,
                marginHorizontal: 5,
                marginTop: 5,
                borderWidth: 2,
                borderRadius: 5,
                backgroundColor: 'white',
              }}>
              <Text
                style={{
                  ...FontStyle.CustomFont,
                  fontSize: 18,
                  fontWeight: 500,
                  textAlign: 'center',
                  color: Colors.primary,
                  marginVertical: 5,
                }}>
                American
              </Text>
            </View>
          </View>
          <View
            style={{
              // backgroundColor: 'yellow',
              flexDirection: 'row',
              flexWrap: 'wrap',
              width: width,
            }}>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                width: width / 3,
                height: 40,
                borderColor: Colors.primary,
                marginHorizontal: 5,
                marginTop: 5,
                borderWidth: 2,
                borderRadius: 5,
                backgroundColor: 'white',
              }}>
              <Text
                style={{
                  ...FontStyle.CustomFont,
                  fontSize: 18,
                  fontWeight: 500,
                  textAlign: 'center',
                  color: Colors.primary,
                  marginVertical: 5,
                }}>
                American
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                width: width / 3,
                height: 40,
                borderColor: Colors.primary,
                marginHorizontal: 5,
                marginTop: 5,
                borderWidth: 2,
                borderRadius: 5,
                backgroundColor: 'white',
              }}>
              <Text
                style={{
                  ...FontStyle.CustomFont,
                  fontSize: 18,
                  fontWeight: 500,
                  textAlign: 'center',
                  color: Colors.primary,
                  marginVertical: 5,
                }}>
                American
              </Text>
            </View>

            <View
              style={{
                flex: 1,
                alignItems: 'center',
                width: width / 3,
                height: 40,
                borderColor: Colors.primary,
                marginHorizontal: 5,
                marginTop: 5,
                borderWidth: 2,
                borderRadius: 5,
                backgroundColor: 'white',
              }}>
              <Text
                style={{
                  ...FontStyle.CustomFont,
                  fontSize: 18,
                  fontWeight: 500,
                  textAlign: 'center',
                  color: Colors.primary,
                  marginVertical: 5,
                }}>
                American
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
