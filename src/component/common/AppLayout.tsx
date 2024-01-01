import React from 'react';
import {ImageBackground, Dimensions} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {View} from 'native-base';

const WIDTH = Dimensions.get('screen').width;

type Props = {
  children: React.ReactNode;
};

export const AppLayout = ({children}: Props) => {
  // const {top} = useSafeAreaInsets();
  return (
    <ImageBackground
      source={require('../../assets/Background.png')}
      resizeMode={'cover'}
      style={{
        flex: 1,
        width: WIDTH,
        // paddingTop: top,
      }}>
      <View style={{flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.3)'}}>
        {children}
      </View>
    </ImageBackground>
  );
};
