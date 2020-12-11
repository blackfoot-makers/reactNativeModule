import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import List from './src/List';
import { ListContextProvider } from './src/List/context';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <ListContextProvider>
      <NavigationContainer>
        <Drawer.Navigator drawerPosition="right">
          <Drawer.Screen name="All" component={List} />
          <Drawer.Screen name="Selected" component={List} />
          <Drawer.Screen name="NotSelected" component={List} />
        </Drawer.Navigator>
      </NavigationContainer>
      <StatusBar hidden />
    </ListContextProvider>

  );
};

export default App;
