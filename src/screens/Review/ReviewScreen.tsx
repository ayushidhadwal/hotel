import React, {FC} from 'react';

import {Box, Pressable, TextArea, ScrollView} from 'native-base';
import {
  RootBottomTabScreenProps,
  RootStackScreenProps,
} from '../../navigation/types';
import {View, Text} from 'react-native';
import {Colors} from '../../styles/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontStyle from '../../styles/FontStyle';
import {red} from 'react-native-reanimated/lib/typescript/reanimated2/Colors';
import {Rating} from 'react-native-ratings';
import {useTranslation} from 'react-i18next';

type Props = RootStackScreenProps<'Review'>;

export const ReviewScreen: FC<Props> = ({navigation}) => {
  const {t} = useTranslation();
  return (
    <ScrollView bgColor={Colors.white} safeAreaBottom flex={1}>
      {/*<Box flex={1} bgColor={'pink.50'}>*/}
      <Text
        style={{
          ...FontStyle.CustomFont,
          color: Colors.primary,
          fontSize: 18,
          fontWeight: 600,
          marginTop: 20,
          marginLeft: 12,
          textAlign: 'left',
        }}>
        {t('Please provide your review')}
      </Text>
      <View
        style={{
          backgroundColor: Colors.white,
          borderRadius: 4,
          height: 40,
          width: 360,
          elevation: 5,
          shadowColor: 'black', // Shadow color
          shadowOffset: {width: 0, height: 2}, // Shadow offset (x, y)
          shadowOpacity: 0.3, // Shadow opacity
          shadowRadius: 2,
          alignSelf: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 8,
          marginTop: 20,
        }}>
        <Text
          style={{
            ...FontStyle.CustomFont,
            color: Colors.primary,
            fontSize: 16,
            fontWeight: 500,
            textAlign: 'left',
          }}>
          Cuisine
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Rating
            ratingCount={5}
            minValue={1}
            style={{
              paddingVertical: 2,
              direction: 'ltr',
            }}
            imageSize={20}
            ratingColor="#FE6150"
            ratingBackgroundColor="#C9C9C9"
          />
        </View>
      </View>
      <View
        style={{
          backgroundColor: Colors.white,
          borderRadius: 4,
          height: 40,
          width: 360,
          elevation: 5,
          shadowColor: 'black', // Shadow color
          shadowOffset: {width: 0, height: 2}, // Shadow offset (x, y)
          shadowOpacity: 0.3, // Shadow opacity
          shadowRadius: 2,
          alignSelf: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 8,
          marginTop: 10,
        }}>
        <Text
          style={{
            ...FontStyle.CustomFont,
            color: Colors.primary,
            fontSize: 16,
            fontWeight: 500,
            textAlign: 'left',
          }}>
          Service
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Rating
            ratingCount={5}
            minValue={1}
            style={{
              paddingVertical: 2,
              direction: 'ltr',
            }}
            imageSize={20}
            ratingColor="#FE6150"
            ratingBackgroundColor="#C9C9C9"
          />
        </View>
      </View>
      <View
        style={{
          backgroundColor: Colors.white,
          borderRadius: 4,
          height: 40,
          width: 360,
          elevation: 5,
          shadowColor: 'black', // Shadow color
          shadowOffset: {width: 0, height: 2}, // Shadow offset (x, y)
          shadowOpacity: 0.3, // Shadow opacity
          shadowRadius: 2,
          alignSelf: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 8,
          marginTop: 10,
        }}>
        <Text
          style={{
            ...FontStyle.CustomFont,
            color: Colors.primary,
            fontSize: 16,
            fontWeight: 500,
            textAlign: 'left',
          }}>
          Ambience
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Rating
            ratingCount={5}
            minValue={1}
            style={{
              paddingVertical: 2,
              direction: 'ltr',
            }}
            imageSize={20}
            ratingColor="#FE6150"
            ratingBackgroundColor="#C9C9C9"
          />
        </View>
      </View>
      <View
        style={{
          backgroundColor: Colors.white,
          borderRadius: 4,
          height: 40,
          width: 360,
          elevation: 5,
          shadowColor: 'black', // Shadow color
          shadowOffset: {width: 0, height: 2}, // Shadow offset (x, y)
          shadowOpacity: 0.3, // Shadow opacity
          shadowRadius: 2,
          alignSelf: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 8,
          marginTop: 10,
        }}>
        <Text
          style={{
            ...FontStyle.CustomFont,
            color: Colors.primary,
            fontSize: 16,
            fontWeight: 500,
            textAlign: 'left',
          }}>
          Value
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Rating
            ratingCount={5}
            minValue={1}
            style={{
              paddingVertical: 2,
              direction: 'ltr',
            }}
            imageSize={20}
            ratingColor="#FE6150"
            ratingBackgroundColor="#C9C9C9"
          />
        </View>
      </View>
      <Box
        style={{height: 130}}
        my={10}
        justifyContent={'center'}
        alignItems="center"
        w="100%"
        py={5}>
        <TextArea
          // mb={8}
          minHeight={130}
          multiline={true}
          focusOutlineColor={Colors.primary}
          borderColor={'white'}
          backgroundColor={'white'}
          borderRadius={4}
          shadow={2}
          placeholder={t('Special comments (optional)')}
          w="92%"
        />
      </Box>
      {/*</Box>*/}
      <Pressable
        onPress={() => navigation.navigate('Update')}
        style={{
          marginTop: 170,
          alignSelf: 'center',
          borderRadius: 5,
          marginVertical: 15,
          width: 360,
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
          {t('Submit')}
        </Text>
      </Pressable>
    </ScrollView>
  );
};
