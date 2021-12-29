import React from 'react';
import 'react-native-gesture-handler';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  backgroundColor,
} from 'react-native';
import Home from './screens/home/home.component';
// import HomeStackNavigation from './android/gradle/Navigation/HomeStackNavigation';

import {createDrawerNavigator} from '@react-navigation/drawer';
import SearchProperty from './screens/search/searchproperty.component';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AppStack from './navigation/appStack';

// const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <AppStack />
      {/* <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SearchProperty"
          component={SearchProperty}
          options={{
            title: 'Properties',
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: '700',
              letterSpacing: 7,
              fontFamily: 'Oswald-VariableFont_wght',
            },
          }}
        />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
};
// const styles = StyleSheet.create({
//   header: {
//     backgroundColor: 'red',
//   },
// });

export default App;
