import React from 'react';
import {StatusBar, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Main from './Src/Navigation/Main';
import {colors} from './Src/Utils/Colors';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
        animated={true}
        backgroundColor={colors.primary}
        barStyle={'default'}
        showHideTransition={'none'}
        hidden={false}
      />
      <Main />
    </NavigationContainer>
  );
}
