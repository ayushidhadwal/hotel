import React, {FC} from 'react';

import {HStack, Box, VStack} from 'native-base';
import {Colors} from '../../../styles/Colors';
import {Text, ImageBackground, Image} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import FontStyle from '../../../styles/FontStyle';

type Props = {
  heading: string;
  rating: string;
  food: string;
  cafe: string;
  dollar: string;
  distance: string;
};

export const FeaturedRestaurant: FC<Props> = ({
  heading,
  rating,
  food,
  cafe,
  dollar,
  distance,
}) => {
  return (
    <Box
      flex={1}
      bgcolor={'red.300'}
      borderTopRadius={5}
      m={3}
      overflow={'hidden'}>
      <ImageBackground
        style={{
          height: 260,
          borderTopLeftRadius: 5,
          borderTopRightRadius: 5,
        }}
        source={require('../../../assets/hotel.png')}>
        <Box flex={1} bgColor={'rgba(0, 0, 0, 0.5)'}>
          <Box p={1} alignSelf={'flex-end'} bgColor={Colors.primary}>
            <Image
              style={{height: 17, width: 17}}
              source={require('../../../assets/heart.png')}
              alt={'no img'}
            />
          </Box>

          <Text
            style={{
              ...FontStyle.CustomFont,
              fontWeight: 600,
              fontSize: 30,
              color: Colors.white,
              padding: 15,
              marginTop: 20,
              textAlign: 'left',
            }}>
            {heading}
          </Text>
        </Box>
      </ImageBackground>
      <HStack borderBottomRadius={5} bgColor={Colors.primary}>
        <Box>
          <Image
            style={{height: 60, width: 60, margin: 9}}
            source={require('../../../assets/Cheesecake.png')}
            alt={'no img'}
          />
        </Box>

        <VStack mt={1} flex={1}>
          <Text
            style={{
              ...FontStyle.CustomFont,
              fontWeight: 500,
              fontSize: 16,
              color: Colors.blue,
              marginTop: 4,
              textAlign: 'left',
            }}>
            {cafe}
          </Text>
          <Text
            style={{
              ...FontStyle.CustomFont,
              fontWeight: 400,
              fontSize: 14,
              color: Colors.white,
              textAlign: 'left',
            }}>
            {food}
          </Text>

          <HStack justifyContent="space-between" pr={2} pb={2}>
            <HStack>
              <HStack>
                <Image
                  style={{height: 11, width: 11, marginRight: 3, marginTop: 5}}
                  source={require('../../../assets/whitestar.png')}
                  alt={'no img'}
                />
                <Text
                  style={{
                    ...FontStyle.CustomFont,
                    fontWeight: 400,
                    fontSize: 14,
                    color: 'white',
                    marginLeft: 4,
                  }}>
                  {rating}
                </Text>
              </HStack>

              <HStack>
                <Entypo name="dot-single" size={20} color={'white'} />
                <Text
                  style={{
                    ...FontStyle.CustomFont,
                    fontWeight: 400,
                    fontSize: 14,
                    color: Colors.white,
                  }}>
                  {dollar}
                </Text>
              </HStack>

              <HStack>
                <Entypo name="dot-single" size={20} color={'white'} />
                <Text
                  style={{
                    ...FontStyle.CustomFont,
                    fontWeight: 400,
                    fontSize: 14,
                    color: Colors.white,
                  }}>
                  {distance}
                </Text>
              </HStack>
            </HStack>

            <Box p={2} borderRadius={100} backgroundColor={'white'}>
              <Image
                style={{height: 12, width: 11.97}}
                source={require('../../../assets/redtelegram.png')}
                alt={'no img'}
              />
            </Box>
          </HStack>
        </VStack>
      </HStack>
    </Box>
  );
};
