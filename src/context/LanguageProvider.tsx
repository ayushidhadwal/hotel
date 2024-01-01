import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';
import {I18n} from 'i18n-js';
import English from '../i18n/en.json';
import {I18nManager} from 'react-native';
import {loadString, save, saveString} from '../utils/storage';
import Config from '../config';

export type LanguageType = 'en' | 'ar';

interface LangContextState {
  lang: LanguageType;
}

interface LangContextProps {
  state: LangContextState;
  t: (key: string) => string;
  changeLanguage: (language: LanguageType) => void;
}

export const LangContext = createContext<LangContextProps>(
  {} as LangContextProps,
);

const i18n = new I18n({
  en: English,
  ar: {
    'Get started': 'البدء',
  },
});

i18n.enableFallback = true;

export const LanguageProvider: FC<PropsWithChildren> = ({children}) => {
  const [lang, setLang] = useState<LanguageType>('en');

  const t = (value: string) => i18n.t(value);

  i18n.defaultLocale = lang;
  i18n.locale = lang;

  const changeLanguage = async (language: LanguageType) => {
    setLang(language);

    const isRtl = language === 'ar';

    I18nManager.allowRTL(isRtl);
    I18nManager.forceRTL(isRtl);
    I18nManager.swapLeftAndRightInRTL(isRtl);
    await saveString(Config.USER_LANG, language);
  };

  useEffect(() => {
    const restoreLang = async () => {
      const lng = await loadString(Config.USER_LANG);
      if (lng) {
        await changeLanguage(lng as LanguageType);
      }
    };

    restoreLang();
  }, []);

  const value = {
    changeLanguage,
    state: {
      lang,
    },
    t,
  };

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
};

export const useLanguage = () => useContext(LangContext);
