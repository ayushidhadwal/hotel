import React, {FC, useCallback, useContext, useRef} from 'react';

import {AuthStackScreenProps} from '../../../navigation/types';
import {Box, HStack} from 'native-base';
import {Pressable, Text} from 'react-native';
import {Colors} from '../../../styles/Colors';
import {Dimensions, FlatList, Platform, StatusBar, Button} from 'react-native';
import {
  GetStarted,
  GetStartedAr,
  GetStartedEn,
  GetStartedItem,
} from '../../../data/GetStarted';
import {Slider} from '../../../component/common/Slider';
import FontStyle from '../../../styles/FontStyle';
import {useTranslation} from 'react-i18next';
import {defaultLocale} from 'yup';
import i18n from 'i18next';

type Props = AuthStackScreenProps<'GetStarted'>;

export const GetStartedScreen: FC<Props> = ({navigation}) => {
  const [index, setIndex] = React.useState<number>(0);

  const {t} = useTranslation();

  // @ts-ignore
  const onViewableItemsChanged = useCallback(data => {
    setIndex(data.changed[0].index as number);
  }, []);

  const flatListRef = useRef<FlatList>(null);

  const renderItem = ({item}: {item: GetStartedItem}) => {
    const window = Dimensions.get('window');

    return (
      <Box marginTop={'18%'} flex="1" w={window.width} p={5}>
        <Text
          style={{
            ...FontStyle.CustomFont,
            fontSize: 26,
            fontWeight: 600,
            color: Colors.primary,
            textAlign: 'left',
          }}>
          {item.heading}
        </Text>
        <Text
          style={{
            ...FontStyle.CustomFont,
            fontSize: 18,
            fontWeight: 500,
            color: Colors.primary,
            marginTop: 6,
            textAlign: 'left',
          }}>
          {item.text}
        </Text>
      </Box>
    );
  };

  return (
    // <AppLayout>

    <Box safeArea flex={1}>
      <StatusBar barStyle="light-content" backgroundColor={'#FE6150'} />
      <Box flex={1}>
        <Box flex={1}>
          <Box marginTop={5} alignItems={'center'} justifyContent={'center'}>
            <Slider data={GetStartedEn} activeIndex={index} />
          </Box>
          <FlatList
            data={i18n.language === 'en' ? GetStartedEn : GetStartedAr}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            horizontal={true}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            onViewableItemsChanged={onViewableItemsChanged}
            viewabilityConfig={{
              itemVisiblePercentThreshold: '50%',
            }}
            ref={flatListRef}
          />
        </Box>
      </Box>

      <Box p={5} pb={Platform.OS ? 5 : 0}>
        <Pressable
          style={{
            marginTop: 40,
            alignSelf: 'center',
            borderRadius: 5,
            marginVertical: 2,
            width: '100%',
            height: 50,
            justifyContent: 'center',
          }}
          onPress={() => navigation.navigate('Login')}
          backgroundColor={Colors.primary}>
          <Text
            style={{
              ...FontStyle.CustomFont,
              fontSize: 22,
              fontWeight: 600,
              color: Colors.white,
              textAlign: 'center',
            }}>
            {t('Get started')}
          </Text>
        </Pressable>
      </Box>
    </Box>
    // </AppLayout>
  );
};
