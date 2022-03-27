// In App.js in a new project

import * as React from 'react';
import {View, Text, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {ColorPrimary} from './utils/constanta';
import Route from './route';

function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={ColorPrimary} />
      <Route />
    </NavigationContainer>
  );
}

export default App;
