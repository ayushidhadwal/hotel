import React, {FC} from 'react';

import {RootBottomTabScreenProps} from '../../navigation/types';

import {Colors} from '../../styles/Colors';
import {View, Text, Pressable, Image} from 'react-native';
import FontStyle from '../../styles/FontStyle';
import {Input, Box, HStack} from 'native-base';
import {Header} from '../../component/common/Header';

type Props = RootBottomTabScreenProps<'About'>;

export const AboutScreen: FC<Props> = ({navigation}) => {
  return (
    <Box bgColor={Colors.white} safeAreaBottom flex={1}>
      <Text
        style={{
          ...FontStyle.CustomFont,
          color: '#808080',
          textAlign: 'justify',
          marginHorizontal: 15,
          marginTop: 25,
          fontWeight: 500,
          fontSize: 16,
        }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Text>
    </Box>
  );
};
