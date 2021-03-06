import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../../screens/home/home.component';
import SearchProperty from '../../../screens/search/searchproperty.component';
const Stack = createNativeStackNavigator();

const HomeStackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SearchProperty" component={SearchProperty} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeStackNavigation;

const styles = StyleSheet.create({});
