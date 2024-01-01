import React, {useCallback, useRef} from 'react';
import {Box, Image} from 'native-base';
import {Dimensions, FlatList} from 'react-native';

import {GetStartedEn} from '../../data/GetStarted';
import {Slider} from './Slider';

const window = Dimensions.get('window');

export const HomeSlider = ({data}: {data: banner[]}) => {
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
        flex={1}
        w={window.width}
        height={200}
        justifyContent={'center'}
        mt={5}>
        <Image
          borderRadius={5}
          source={require('../../assets/homesliderimage.png')}
          alt="slider img"
          w={'90%'}
          h={200}
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
        <Slider data={GetStartedEn} activeIndex={index} />
      </Box>
    </Box>
  );
};
