import React, {FC} from 'react';

import {Text, View} from 'react-native';

import FontStyle from '../../../styles/FontStyle';
import {Colors} from '../../../styles/Colors';

export const PriceRangeCard: FC<{price: string}> = ({price}) => {
  return (
    <View
      style={{
        alignItems: 'center',
        width: 70,
        height: 40,
        backgroundColor: Colors.white,
        borderRadius: 4,
        justifyContent: 'center',
        marginVertical: 2,
        elevation: 5,
        shadowColor: 'black', // Shadow color
        shadowOffset: {width: 0, height: 2}, // Shadow offset (x, y)
        shadowOpacity: 0.3, // Shadow opacity
        shadowRadius: 2,
        marginLeft: 8,
      }}>
      <Text
        style={{
          textAlign: 'center',
          color: Colors.secondary,
          ...FontStyle.CustomFont,
          fontWeight: 500,
          fontSize: 22,
        }}>
        {price}
      </Text>
    </View>
  );
};
