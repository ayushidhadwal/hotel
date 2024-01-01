import React, {useCallback, useRef} from 'react';
import {Box, Image} from 'native-base';
import {Dimensions, FlatList} from 'react-native';
import {Slider} from './Slider';

import {GetStarted} from '../../data/GetStarted';
import {RestaurantSliderList} from '../../data/RestaurantSliderList';
import {RestaurantSliderDesign} from './RestaurantSliderDesign';

const window = Dimensions.get('screen');

export const RestaurantSlider = ({data}: {data: banner[]}) => {
  const [index, setIndex] = React.useState<number>(0);

  const onViewableItemsChanged = useCallback(
    (data: {changed: {index: number}[]}) => {
      setIndex(data.changed[0].index as number);
    },
    [],
  );

  const flatListRef = useRef<FlatList>(null);

  const renderItem = ({item}: {item: banner}) => {
    return (
      <Box
        w={window.width}
        height={(window.height * 25) / 100}
        justifyContent={'center'}>
        <Image
          source={require('../../assets/restaurantsetails.png')}
          alt="slider img"
          h={220}
          alignSelf={'center'}
        />
      </Box>
    );
  };

  // @ts-ignore
  return (
    <Box>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => String(item.id)}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{
          itemVisiblePercentThreshold: '50%',
        }}
        ref={flatListRef}
      />
      <Box alignItems={'center'}>
        <RestaurantSliderDesign
          data={RestaurantSliderList}
          activeIndex={index}
        />
      </Box>
    </Box>
  );
};
