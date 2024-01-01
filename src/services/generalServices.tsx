import {ColorType} from 'native-base/lib/typescript/components/types';
import {I18nManager} from 'react-native';
import Snackbar from 'react-native-snackbar';
import { Colors } from '../styles/Colors';

export const showToast = ({msg, color}: {msg: string; color?: ColorType}) => {
  if (msg) {
    Snackbar.show({
      text: msg || 'Something went to wrong',
      duration: Snackbar.LENGTH_SHORT,
      backgroundColor: (color as string) || 'red',
      textColor: 'white',
      rtl: I18nManager.isRTL,
    });
  }
};
