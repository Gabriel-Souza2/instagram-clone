import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Home } from './src/screens/Home';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/global/styles/theme';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {

  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  }); 

  if(!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </GestureHandlerRootView>

  );
}
