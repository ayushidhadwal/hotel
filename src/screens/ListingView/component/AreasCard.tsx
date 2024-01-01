import React, {FC} from 'react';

import {Dimensions, Image, ImageBackground, Text, View} from 'react-native';

import FontStyle from '../../../styles/FontStyle';
import {Colors} from '../../../styles/Colors';
import {Cuisines} from '../../Home/components/Cuisines';
import {Box, HStack, Pressable, VStack} from 'native-base';
import Entypo from 'react-native-vector-icons/Entypo';
import {bool} from 'yup';

const {width, height} = Dimensions.get('screen');

const AreaCard: FC<{id: string; area: string; checked: boolean}> = ({
  id,
  area,
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
        {area}
      </Text>
    </View>
  );
};

type Props = {
  Areas: {
    id: string;
    area: string;
  }[];
};
export const AreasCard: FC<Props> = ({Areas = []}) => {
  return (
    <HStack ml={4} flexWrap={'wrap'} space={2}>
      {Areas.map(Area => {
        return (
          <AreaCard
            key={Area.id}
            // onPress={Cuisine}
            id={Area.id}
            area={Area.area}
            checked={Area.checked}
          />
        );
      })}
    </HStack>
  );
};
