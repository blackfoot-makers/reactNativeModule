import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import List from './src/List';
import { ListContextProvider } from './src/List/context';
import SplashScreen from './src/SplashScreen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const DrawerScreen = () => (
  <Drawer.Navigator drawerPosition="right">
    <Drawer.Screen name="All" component={List} />
    <Drawer.Screen name="Selected" component={List} />
    <Drawer.Screen name="NotSelected" component={List} />
  </Drawer.Navigator>
);

const App = () => {
  return (
    <SafeAreaProvider>
      <ListContextProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={SplashScreen} options={{ header: () => null, cardStyle: { backgroundColor: 'white' } }} />
            <Stack.Screen name="Todo list" component={DrawerScreen} />
          </Stack.Navigator>
        </NavigationContainer>
        <StatusBar />
      </ListContextProvider>
    </SafeAreaProvider>

  );
};

export default App;
