import React, {FC} from 'react';

import {Box, ScrollView} from 'native-base';
import {RootStackScreenProps} from '../../navigation/types';

import {MenuDetailCard} from './components/MenuDetailCard';

type Props = RootStackScreenProps<'Appetizers'>;

export const MenuDetailsScreen: FC<Props> = ({navigation}) => {
  return (
    <Box bgColor={'white'} flex={1}>
      <ScrollView flex={1} showsVerticalScrollIndicator={false}>
        <MenuDetailCard
          rate={'22.000 KD'}
          food={'Canape'}
          description={
            'an appetizer consisting of apiece of bread or toast or a cracker topped with a savoury spread.'
          }
        />
      </ScrollView>
    </Box>
  );
};
