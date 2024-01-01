import React, {FC} from 'react';

import {Box, Button, HStack, ScrollView, Text} from 'native-base';
import {RootBottomTabScreenProps} from '../../navigation/types';
import {SearchAreaCard} from '../Home/components/SearchAreaCard';
import {SearchArea} from '../Home/components/SearchArea';
import {RestaurantCard} from './component/RestaurantCard';

type Props = RootBottomTabScreenProps<'ListingView'>;

export const ListingViewScreen: FC<Props> = ({navigation}) => {
  return (
    <Box bgColor={'white'} flex={1}>
      <RestaurantCard
        lunches={[
          {
            id: '1',
            rating: '4.3',
            dollar: '$$$$',
            cafe: 'Arabella cafe',
            food: 'Italian, Japenese, cafe',
            distance: '1.4 Km',
          },
          {
            id: '2',
            rating: '4.3',
            dollar: '$$$$',
            cafe: 'Arabella cafe',
            food: 'Italian, Japenese, cafe',
            distance: '1.4 Km',
          },
          {
            id: '3',
            rating: '4.3',
            dollar: '$$$$',
            cafe: 'Arabella cafe',
            food: 'Italian, Japenese, cafe',
            distance: '1.4 Km',
          },
        ]}
      />
    </Box>
  );
};
