import React, {FC} from 'react';

import {HStack, Box, VStack} from 'native-base';
import {Text, Image, View} from 'react-native';
import {Colors} from '../../../../styles/Colors';
import FontStyle from '../../../../styles/FontStyle';

type Props = {
  text: string;
  rating: string;
  name: string;
  date: string;
};

export const ReviewCard: FC<Props> = ({text, rating, name, date}) => {
  return (
    <View>
      <HStack my={1} mx={9} justifyContent={'space-between'} mt={4}>
        <View
          style={{
            width: 59,
            height: 70,
            padding: 4,
            alignItems: 'center',
            backgroundColor: 'white',
            borderRadius: 4,
            elevation: 5,
            shadowColor: 'black', // Shadow color
            shadowOffset: {width: 0, height: 2}, // Shadow offset (x, y)
            shadowOpacity: 0.3, // Shadow opacity
            shadowRadius: 2,
          }}>
          <Image
            style={{height: 26.25, width: 28, marginTop: 4}}
            source={require('../../../../assets/redcutlery.png')}
            alt={'no img'}
          />
          <Text
            style={{
              ...FontStyle.CustomFont,
              fontWeight: 600,
              fontSize: 16,
              textAlign: 'center',
              color: Colors.blue,
              marginTop: 10,
            }}>
            {rating}
          </Text>
        </View>
        <View
          style={{
            width: 59,
            height: 70,
            padding: 4,
            alignItems: 'center',
            backgroundColor: 'white',
            borderRadius: 4,
            elevation: 5,
            shadowColor: 'black', // Shadow color
            shadowOffset: {width: 0, height: 2}, // Shadow offset (x, y)
            shadowOpacity: 0.3, // Shadow opacity
            shadowRadius: 2,
          }}>
          <Image
            source={require('../../../../assets/Group.png')}
            alt={'no img'}
            style={{height: 28.83, width: 27.17, marginTop: 4}}
          />
          <Text
            style={{
              ...FontStyle.CustomFont,
              fontWeight: 600,
              fontSize: 16,
              textAlign: 'center',
              color: Colors.blue,
              marginTop: 10,
            }}>
            {rating}
          </Text>
        </View>
        <View
          style={{
            width: 59,
            height: 70,
            padding: 4,
            alignItems: 'center',
            backgroundColor: 'white',
            borderRadius: 4,
            elevation: 5,
            shadowColor: 'black', // Shadow color
            shadowOffset: {width: 0, height: 2}, // Shadow offset (x, y)
            shadowOpacity: 0.3, // Shadow opacity
            shadowRadius: 2,
          }}>
          <Image
            source={require('../../../../assets/building.png')}
            alt={'no img'}
            style={{height: 28, width: 28, marginTop: 4}}
          />
          <Text
            style={{
              ...FontStyle.CustomFont,
              fontWeight: 600,
              fontSize: 16,
              textAlign: 'center',
              color: Colors.blue,
              marginTop: 10,
            }}>
            {rating}
          </Text>
        </View>
        <View
          style={{
            width: 59,
            height: 70,
            padding: 4,
            alignItems: 'center',
            backgroundColor: 'white',
            borderRadius: 4,
            elevation: 5,
            shadowColor: 'black', // Shadow color
            shadowOffset: {width: 0, height: 2}, // Shadow offset (x, y)
            shadowOpacity: 0.3, // Shadow opacity
            shadowRadius: 2,
          }}>
          <Image
            source={require('../../../../assets/bag.png')}
            alt={'no img'}
            style={{height: 25.94, width: 25, marginTop: 4}}
          />
          <Text
            style={{
              ...FontStyle.CustomFont,
              fontWeight: 600,
              fontSize: 16,
              textAlign: 'center',
              color: Colors.blue,
              marginTop: 10,
            }}>
            {rating}
          </Text>
        </View>
      </HStack>

      <Box
        p={3}
        shadow={3}
        borderRadius={5}
        mt={4}
        w={'95%'}
        alignSelf={'center'}
        bgColor={'white'}>
        <VStack>
          <HStack>
            <Image
              style={{height: 40, width: 40}}
              source={require('../../../../assets/rectangle.png')}
              alt={'no img'}
            />
            <VStack w={'88%'} ml={2}>
              <HStack justifyContent={'space-between'}>
                <Text
                  style={{
                    ...FontStyle.CustomFont,
                    fontWeight: 600,
                    fontSize: 14,
                    color: Colors.primary,
                  }}>
                  {name}
                </Text>
                <Text
                  style={{
                    ...FontStyle.CustomFont,
                    fontWeight: 600,
                    fontSize: 12,
                    color: Colors.blue,
                  }}>
                  {date}
                </Text>
              </HStack>
              <HStack alignItems={'center'}>
                <Image
                  source={require('../../../../assets/bluestar.png')}
                  alt={'no img'}
                  style={{height: 12, width: 12, marginRight: 5}}
                />
                <Text
                  style={{
                    ...FontStyle.CustomFont,
                    fontWeight: 500,
                    fontSize: 12,
                    color: Colors.blue,
                  }}>
                  {rating}
                </Text>
              </HStack>
            </VStack>
          </HStack>
          <Text
            style={{
              ...FontStyle.CustomFont,
              fontWeight: 500,
              fontSize: 13,
              color: Colors.secondary,
              marginTop: 12,
              textAlign: 'left',
            }}>
            {text}
          </Text>
        </VStack>
      </Box>
      <Box
        p={3}
        shadow={3}
        borderRadius={5}
        mt={4}
        w={'95%'}
        alignSelf={'center'}
        bgColor={'white'}>
        <VStack>
          <HStack>
            <Image
              style={{height: 40, width: 40}}
              source={require('../../../../assets/rectangle.png')}
              alt={'no img'}
            />
            <VStack w={'88%'} ml={2}>
              <HStack justifyContent={'space-between'}>
                <Text
                  style={{
                    ...FontStyle.CustomFont,
                    fontWeight: 600,
                    fontSize: 14,
                    color: Colors.primary,
                  }}>
                  {name}
                </Text>
                <Text
                  style={{
                    ...FontStyle.CustomFont,
                    fontWeight: 600,
                    fontSize: 12,
                    color: Colors.blue,
                  }}>
                  {date}
                </Text>
              </HStack>
              <HStack alignItems={'center'}>
                <Image
                  source={require('../../../../assets/bluestar.png')}
                  alt={'no img'}
                  style={{height: 12, width: 12, marginRight: 5}}
                />
                <Text
                  style={{
                    ...FontStyle.CustomFont,
                    fontWeight: 500,
                    fontSize: 12,
                    color: Colors.blue,
                  }}>
                  {rating}
                </Text>
              </HStack>
            </VStack>
          </HStack>
          <Text
            style={{
              ...FontStyle.CustomFont,
              fontWeight: 500,
              fontSize: 13,
              color: Colors.secondary,
              marginTop: 12,
              textAlign: 'left',
            }}>
            {text}
          </Text>
        </VStack>
      </Box>
      <Box
        p={3}
        shadow={3}
        borderRadius={5}
        mt={4}
        w={'95%'}
        alignSelf={'center'}
        bgColor={'white'}>
        <VStack>
          <HStack>
            <Image
              style={{height: 40, width: 40}}
              source={require('../../../../assets/rectangle.png')}
              alt={'no img'}
            />
            <VStack w={'88%'} ml={2}>
              <HStack justifyContent={'space-between'}>
                <Text
                  style={{
                    ...FontStyle.CustomFont,
                    fontWeight: 600,
                    fontSize: 14,
                    color: Colors.primary,
                  }}>
                  {name}
                </Text>
                <Text
                  style={{
                    ...FontStyle.CustomFont,
                    fontWeight: 600,
                    fontSize: 12,
                    color: Colors.blue,
                  }}>
                  {date}
                </Text>
              </HStack>
              <HStack alignItems={'center'}>
                <Image
                  source={require('../../../../assets/bluestar.png')}
                  alt={'no img'}
                  style={{height: 12, width: 12, marginRight: 5}}
                />
                <Text
                  style={{
                    ...FontStyle.CustomFont,
                    fontWeight: 500,
                    fontSize: 12,
                    color: Colors.blue,
                  }}>
                  {rating}
                </Text>
              </HStack>
            </VStack>
          </HStack>
          <Text
            style={{
              ...FontStyle.CustomFont,
              fontWeight: 500,
              fontSize: 13,
              color: Colors.secondary,
              marginTop: 12,
              textAlign: 'left',
            }}>
            {text}
          </Text>
        </VStack>
      </Box>
      <Box
        p={3}
        shadow={3}
        borderRadius={5}
        mt={4}
        w={'95%'}
        alignSelf={'center'}
        bgColor={'white'}>
        <VStack>
          <HStack>
            <Image
              style={{height: 40, width: 40}}
              source={require('../../../../assets/rectangle.png')}
              alt={'no img'}
            />
            <VStack w={'88%'} ml={2}>
              <HStack justifyContent={'space-between'}>
                <Text
                  style={{
                    ...FontStyle.CustomFont,
                    fontWeight: 600,
                    fontSize: 14,
                    color: Colors.primary,
                  }}>
                  {name}
                </Text>
                <Text
                  style={{
                    ...FontStyle.CustomFont,
                    fontWeight: 600,
                    fontSize: 12,
                    color: Colors.blue,
                  }}>
                  {date}
                </Text>
              </HStack>
              <HStack alignItems={'center'}>
                <Image
                  source={require('../../../../assets/bluestar.png')}
                  alt={'no img'}
                  style={{height: 12, width: 12, marginRight: 5}}
                />
                <Text
                  style={{
                    ...FontStyle.CustomFont,
                    fontWeight: 500,
                    fontSize: 12,
                    color: Colors.blue,
                  }}>
                  {rating}
                </Text>
              </HStack>
            </VStack>
          </HStack>
          <Text
            style={{
              ...FontStyle.CustomFont,
              fontWeight: 500,
              fontSize: 13,
              color: Colors.secondary,
              marginTop: 12,
              textAlign: 'left',
            }}>
            {text}
          </Text>
        </VStack>
      </Box>
      <Box
        p={3}
        shadow={3}
        borderRadius={5}
        mt={4}
        w={'95%'}
        alignSelf={'center'}
        bgColor={'white'}>
        <VStack>
          <HStack>
            <Image
              style={{height: 40, width: 40}}
              source={require('../../../../assets/rectangle.png')}
              alt={'no img'}
            />
            <VStack w={'88%'} ml={2}>
              <HStack justifyContent={'space-between'}>
                <Text
                  style={{
                    ...FontStyle.CustomFont,
                    fontWeight: 600,
                    fontSize: 14,
                    color: Colors.primary,
                  }}>
                  {name}
                </Text>
                <Text
                  style={{
                    ...FontStyle.CustomFont,
                    fontWeight: 600,
                    fontSize: 12,
                    color: Colors.blue,
                  }}>
                  {date}
                </Text>
              </HStack>
              <HStack alignItems={'center'}>
                <Image
                  source={require('../../../../assets/bluestar.png')}
                  alt={'no img'}
                  style={{height: 12, width: 12, marginRight: 5}}
                />
                <Text
                  style={{
                    ...FontStyle.CustomFont,
                    fontWeight: 500,
                    fontSize: 12,
                    color: Colors.blue,
                  }}>
                  {rating}
                </Text>
              </HStack>
            </VStack>
          </HStack>
          <Text
            style={{
              ...FontStyle.CustomFont,
              fontWeight: 500,
              fontSize: 13,
              color: Colors.secondary,
              marginTop: 12,
              textAlign: 'left',
            }}>
            {text}
          </Text>
        </VStack>
      </Box>
      <Box
        p={3}
        shadow={3}
        borderRadius={5}
        mt={4}
        w={'95%'}
        alignSelf={'center'}
        bgColor={'white'}>
        <VStack>
          <HStack>
            <Image
              style={{height: 40, width: 40}}
              source={require('../../../../assets/rectangle.png')}
              alt={'no img'}
            />
            <VStack w={'88%'} ml={2}>
              <HStack justifyContent={'space-between'}>
                <Text
                  style={{
                    ...FontStyle.CustomFont,
                    fontWeight: 600,
                    fontSize: 14,
                    color: Colors.primary,
                  }}>
                  {name}
                </Text>
                <Text
                  style={{
                    ...FontStyle.CustomFont,
                    fontWeight: 600,
                    fontSize: 12,
                    color: Colors.blue,
                  }}>
                  {date}
                </Text>
              </HStack>
              <HStack alignItems={'center'}>
                <Image
                  source={require('../../../../assets/bluestar.png')}
                  alt={'no img'}
                  style={{height: 12, width: 12, marginRight: 5}}
                />
                <Text
                  style={{
                    ...FontStyle.CustomFont,
                    fontWeight: 500,
                    fontSize: 12,
                    color: Colors.blue,
                  }}>
                  {rating}
                </Text>
              </HStack>
            </VStack>
          </HStack>
          <Text
            style={{
              ...FontStyle.CustomFont,
              fontWeight: 500,
              fontSize: 13,
              color: Colors.secondary,
              marginTop: 12,
              textAlign: 'left',
            }}>
            {text}
          </Text>
        </VStack>
      </Box>
    </View>
  );
};
