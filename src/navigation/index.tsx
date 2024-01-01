import React, { useEffect } from 'react';
import {
  DefaultTheme,
  NavigationContainer,
  Theme,
} from '@react-navigation/native';

import { Colors } from '../styles/Colors';
import RootStackNavigation from './RootStackNavigation';
import { loadString } from '../utils/storage';
import Config from '../config';
import i18n from 'i18next';
import { I18nManager } from 'react-native';
import { useAppSelector } from '../store';
import AuthStackNavigation from './AuthStackNavigation';

const NavigationTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    text: Colors.white,
  },
};

export default () => {
  useEffect(() => {
    const restoreLang = async () => {
      const lng = await loadString(Config.USER_LANG);
      if (lng) {
        const isRtl = lng === 'ar';

        i18n?.changeLanguage(lng);
        I18nManager.allowRTL(isRtl);
        I18nManager.forceRTL(isRtl);
        I18nManager.swapLeftAndRightInRTL(isRtl);
      }
    };

    restoreLang();
  }, []);

  const token = useAppSelector((state) => state.auth.token)



  return (
    <NavigationContainer theme={NavigationTheme}>
      {token ? <RootStackNavigation /> : <AuthStackNavigation />}


    </NavigationContainer>
  );
};
