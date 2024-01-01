import * as React from 'react';
import {NativeBaseProvider} from 'native-base';

import {NativeBaseTheme} from './src/styles/NativeBaseTheme';
import {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import AppNavigation from './src/navigation';
import './src/i18n';
import {store} from './src/store';
import {Provider} from 'react-redux';

function App() {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 3000);
  }, []);

  return (
    <>
      <Provider store={store}>
        <NativeBaseProvider theme={NativeBaseTheme}>
          <AppNavigation />
        </NativeBaseProvider>
      </Provider>
    </>
  );
}
export default App;
