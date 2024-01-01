import React, {FC} from 'react';

import {
  Text,
  HStack,
  Image,
  Box,
  VStack,
  ScrollView,
  Divider,
} from 'native-base';
import {Colors} from '../../../styles/Colors';
import {ImageBackground} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import FontStyle from '../../../styles/FontStyle';

type Props = {
  rating: string;
  dollar: string;
  cafe: string;
  food: string;
  distance: string;
};

export const LocationCard: FC<Props> = ({
  rating,
  distance,
  dollar,
  food,
  cafe,
}) => {
  return (
    <Box>
      <VStack
        style={{
          width: 250,
          height: 77,
          marginLeft: 15,
          elevation: 5,
          shadowColor: 'black', // Shadow color
          shadowOffset: {width: 0, height: 2}, // Shadow offset (x, y)
          shadowOpacity: 0.3, // Shadow opacity
          shadowRadius: 2,
        }}
        borderRadius={4}
        alignSelf={'center'}
        backgroundColor={'white'}
        shadow={2}>
        <HStack>
          <Box p={3}>
            <Image
              style={{height: 54, width: 54}}
              source={require('../../../assets/Cheesecake.png')}
              alt={'no img'}
            />
          </Box>
          <VStack>
            <HStack mt={2} w={'77%'} justifyContent={'space-between'}>
              <Text
                style={{
                  fontWeight: 500,
                  fontSize: 16,
                  ...FontStyle.CustomFont,
                  color: Colors.blue,
                }}
                fontSize={'md'}
                color={Colors.blue}>
                {cafe}
              </Text>
            </HStack>

            <Text
              style={{
                fontWeight: 500,
                fontSize: 14,
                ...FontStyle.CustomFont,
                color: Colors.secondary,
                textAlign: 'left',
              }}>
              {food}
            </Text>
            <HStack justifyContent={'space-between'}>
              <HStack w={'78%'} justifyContent={'space-between'}>
                <HStack alignItems={'center'} w={'77%'}>
                  <Image
                    style={{height: 11, width: 11, marginRight: 3}}
                    source={require('../../../assets/redheart.png')}
                    alt={'no img'}
                  />
                  <Text
                    style={{
                      fontWeight: 500,
                      fontSize: 13,
                      ...FontStyle.CustomFont,
                      color: Colors.blue,
                    }}>
                    {rating}
                  </Text>
                  <Entypo name="dot-single" size={20} color={Colors.blue} />
                  <Text
                    style={{
                      fontWeight: 500,
                      fontSize: 13,
                      ...FontStyle.CustomFont,
                      color: Colors.blue,
                    }}>
                    {dollar}
                  </Text>
                  <Entypo name="dot-single" size={20} color={Colors.blue} />
                  <Text
                    style={{
                      fontWeight: 500,
                      fontSize: 13,
                      ...FontStyle.CustomFont,
                      color: Colors.blue,
                    }}>
                    {distance}
                  </Text>
                </HStack>
              </HStack>
            </HStack>
          </VStack>
        </HStack>
      </VStack>
    </Box>
  );
};
