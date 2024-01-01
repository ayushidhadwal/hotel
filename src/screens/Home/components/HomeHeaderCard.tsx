import React, {FC} from 'react';

import {HStack} from 'native-base';
import {Text, View, Image} from 'react-native';
import {Colors} from '../../../styles/Colors';
import FontStyle from '../../../styles/FontStyle';

type Props = {text1: string; text2: string};

export const HomeHeaderCard: FC<Props> = ({text1, text2}) => {
  return (
    <HStack mx={4} mt={3} space={2}>
      <View
        style={{
          width: 100,
          borderColor: Colors.primary,
          borderRadius: 4,
          borderWidth: 1,
        }}>
        <View style={{flexDirection: 'row', margin: 2, alignItems: 'center'}}>
          <Image
            style={{height: 15, width: 15, marginLeft: 6}}
            source={require('../../../assets/locationpin.png')}
            alt={'no img'}
          />
          <Text
            style={{
              ...FontStyle.CustomFont,
              marginLeft: 10,
              fontSize: 14,
              fontWeight: 600,
              lineHeight: 17,
              color: Colors.primary,
            }}>
            {text1}
          </Text>
        </View>
      </View>
      <View
        style={{
          width: 100,
          borderColor: Colors.primary,
          borderRadius: 4,
          borderWidth: 1,
        }}>
        <View style={{flexDirection: 'row', margin: 2, alignItems: 'center'}}>
          <Image
            style={{height: 15, width: 15, marginLeft: 6}}
            source={require('../../../assets/mapview.png')}
            alt={'no img'}
          />
          <Text
            style={{
              ...FontStyle.CustomFont,
              marginLeft: 10,
              fontSize: 14,
              fontWeight: 600,
              lineHeight: 17,
              color: Colors.primary,
            }}>
            {text2}
          </Text>
        </View>
      </View>
    </HStack>
  );
};
