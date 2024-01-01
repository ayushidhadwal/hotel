import React, {FC} from 'react';

import {Text, HStack, Image, Box, View, VStack, ScrollView} from 'native-base';
import {Colors} from '../../../styles/Colors';
import {Dimensions, ImageBackground} from 'react-native';

const {width} = Dimensions.get('screen');

type Props = {image: string};

export const ImageCard: FC<Props> = ({image}) => {
  return (
    <Box alignSelf={'center'} flex={1}>
      <ScrollView
        pagingEnabled={true}
        scrollEventThrottle={10}
        showsHorizontalScrollIndicator={false}
        horizontal={true}>
        <View flex={1} my={5} flexDirection={'row'}>
          <ImageBackground
            style={{
              height: 150,
              width: width - 100,
              marginHorizontal: 8,
            }}
            source={image}
            borderRadius={5}>
            <Box borderRadius={100} alignSelf={'flex-end'}>
              <Image
                ml={1}
                h={10}
                w={10}
                source={require('../../../assets/chat.png')}
                alt={'no img'}
                bottom={3}
              />
            </Box>
          </ImageBackground>
          <ImageBackground
            style={{
              height: 150,
              width: width - 100,
              marginHorizontal: 8,
            }}
            source={image}
            borderRadius={5}>
            <Box borderRadius={100} alignSelf={'flex-end'}>
              <Image
                ml={1}
                h={10}
                w={10}
                source={require('../../../assets/chat.png')}
                alt={'no img'}
                bottom={3}
              />
            </Box>
          </ImageBackground>
          <ImageBackground
            style={{
              height: 150,
              width: width - 100,
              marginHorizontal: 8,
            }}
            source={image}
            borderRadius={5}>
            <Box borderRadius={100} alignSelf={'flex-end'}>
              <Image
                ml={1}
                h={10}
                w={10}
                source={require('../../../assets/chat.png')}
                alt={'no img'}
                bottom={3}
              />
            </Box>
          </ImageBackground>
        </View>
      </ScrollView>
    </Box>
  );
};
