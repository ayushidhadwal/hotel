import React, {FC} from 'react';

import {Box, Button, HStack, Image, Pressable, Text} from 'native-base';
import {
  RootNavigationProps,
  RootStackScreenProps,
} from '../../navigation/types';

import {
  Dimensions,
  I18nManager,
  ImageBackground,
  Platform,
  StatusBar,
} from 'react-native';

import {RestaurantDetailsCard} from './component/RestaurantDetailsCard';
import TopTabNavigation from '../../navigation/TopTabNavigation';

import {RestaurantSliderList} from '../../data/RestaurantSliderList';
import {RestaurantSlider} from '../../component/common/RestaurantSlider';

type Props = RootStackScreenProps<'RestaurantScreen'>;

const window = Dimensions.get('screen');

export const RestaurantScreen: FC<Props> = navigation => {
  return (
    <Box bgColor={'white'} safeAreaTop flex={1}>
      <StatusBar barStyle="light-content" backgroundColor={'#FE6150'} />
      <Box position={'relative'}>
        <RestaurantSlider data={RestaurantSliderList} />
        <Box
          // bg={'rgba(0, 0, 0, .5)'}
          position={'absolute'}
          left={0}
          right={0}
          top={0}>
          <HStack
            justifyContent={'space-between'}
            w={'95%'}
            p={1}
            alignSelf={'center'}
            my={3}>
            <Box
              alignItems={'center'}
              p={1}
              bgColor={'white'}
              borderRadius={100}>
              <Image
                source={require('../../assets/backarrow.png')}
                alt={'no img'}
                h={4}
                w={4}
              />
            </Box>
            <HStack justifyContent={'space-between'} w={'25%'}>
              <Pressable
                alignItems={'center'}
                p={1}
                bgColor={'white'}
                borderRadius={100}>
                <Image
                  source={require('../../assets/bluetelegram.png')}
                  alt={'no img'}
                  h={4}
                  w={4}
                />
              </Pressable>
              <Box
                alignItems={'center'}
                p={1}
                bgColor={'white'}
                borderRadius={100}>
                <Image
                  source={require('../../assets/blueheart.png')}
                  alt={'no img'}
                  h={4}
                  w={4}
                />
              </Box>
              <Box
                alignItems={'center'}
                p={1}
                bgColor={'white'}
                borderRadius={100}>
                <Image
                  source={require('../../assets/blueshare.png')}
                  alt={'no img'}
                  h={4}
                  w={4}
                />
              </Box>
            </HStack>
          </HStack>
        </Box>
      </Box>

      <Box
        flex={1}
        bgColor={'white'}
        pt={5}
        left={0}
        right={0}
        position="absolute"
        roundedTop={20}
        overflow="hidden"
        style={{
          top:
            Platform.OS === 'ios'
              ? (window.height * 30) / 100
              : (window.height * 22) / 100,
        }}
        bottom={0}>
        <RestaurantDetailsCard
          dollar={'$$$$'}
          heading={'The Cheescake Factory'}
          rate={'2300'}
          food={'Italian, Japenese, cafe'}
          location={'Street 123, Salmiya, Kuwait'}
          rating={'4.3'}
          reviews={'reviews'}
        />
        <TopTabNavigation />
      </Box>
    </Box>
  );
};
