import React, {FC} from 'react';

import {Dimensions, Image, ImageBackground, Text, View} from 'react-native';

import FontStyle from '../../../styles/FontStyle';
import {Colors} from '../../../styles/Colors';
import {Cuisines} from '../../Home/components/Cuisines';
import {Box, HStack, Pressable, VStack} from 'native-base';
import Entypo from 'react-native-vector-icons/Entypo';

const {width, height} = Dimensions.get('screen');

const CuisineCard: FC<{id: string; country: string; checked: boolean}> = ({
  id,
  country,
  checked,
}) => {
  return (
    <View
      style={{
        width: (width * 40) / 100,

        flexDirection: 'row',
        marginVertical: 6,
      }}>
      <Image
        style={{height: 24, width: 24}}
        source={
          checked
            ? require('../../../assets/checkcircle.png')
            : require('../../../assets/circle.png')
        }
      />
      <Text
        style={{
          ...FontStyle.CustomFont,
          color: Colors.secondary,
          fontSize: 16,
          fontWeight: 500,
          marginLeft: 8,
        }}>
        {country}
      </Text>
    </View>
  );
};

type Props = {
  Cuisines: {
    id: string;
    country: string;
    checked: boolean;
  }[];
};
export const CuisinesCard: FC<Props> = ({Cuisines = []}) => {
  return (
    <HStack ml={4} flexWrap={'wrap'} space={2}>
      {Cuisines.map(Cuisine => {
        return (
          <CuisineCard
            key={Cuisine.id}
            // onPress={Cuisine}
            id={Cuisine.id}
            country={Cuisine.country}
            checked={Cuisine.checked}
          />
        );
      })}
    </HStack>
  );
};
