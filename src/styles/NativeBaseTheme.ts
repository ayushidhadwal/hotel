import {extendTheme} from 'native-base';

export const NativeBaseTheme = extendTheme({
  fontConfig: {
    EB_Garamond: {
      100: {
        normal: 'EBGaramond-Thin',
        italic: 'EBGaramond-ThinItalic',
      },
      200: {
        normal: 'EBGaramond-Light',
        italic: 'EBGaramond-LightItalic',
      },
      300: {
        normal: 'EBGaramond-ExtraLight',
        italic: 'EBGaramond-ExtraLightItalic',
      },
      400: {
        normal: 'EBGaramond-Regular',
        italic: 'EBGaramond-Italic',
      },
      500: {
        normal: 'EBGaramond-Medium',
        italic: 'EBGaramond-MediumItalic',
      },
      600: {
        normal: 'EBGaramond-Bold',
        italic: 'EBGaramond-BoldItalic',
      },
      700: {
        normal: 'EBGaramond-SemiBold',
        italic: 'EBGaramond-SemiBoldItalic',
      },
      800: {
        normal: 'EBGaramond-ExtraBold',
        italic: 'EBGaramond-ExtraBoldItalic',
      },
      900: {
        normal: 'EBGaramond-Black',
        italic: 'EBGaramond-BlackItalic',
      },
    },
  },
  fonts: {
    heading: 'EBGaramond-Bold',
    body: 'EBGaramond-Regular',
    mono: 'EBGaramond-ThinItalic',
  },
});
