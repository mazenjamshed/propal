import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Home from '../screens/home/home.component';
import SearchProperty from '../screens/search/searchproperty.component';
import Details from '../screens/details/details.component';

const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (
    <Drawer.Navigator
      //   drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: 'red',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#fff',

        drawerLabelStyle: {
          //   marginLeft: -25,
          fontFamily: 'Oswald-VariableFont_wght',
          fontSize: 15,
          letterSpacing: 2,
          fontWeight: '700',
        },
        drawerStyle: {
          backgroundColor: '#292929',
          // width: 240,
        },
      }}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen
        name="SearchProperty"
        component={SearchProperty}
        options={{
          title: 'Fresh Listings',
          headerShown: true,
          headerStyle: {
            backgroundColor: 'black',
            height: 80,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: '700',
            letterSpacing: 6,
            fontFamily: 'Oswald-VariableFont_wght',
          },
        }}
      />
      <Drawer.Screen
        name="details"
        component={Details}
        options={{
          title: 'Property Details',
          headerShown: true,
          headerStyle: {
            backgroundColor: 'black',
            height: 80,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: '700',
            letterSpacing: 6,
            fontFamily: 'Oswald-VariableFont_wght',
          },
        }}
      />
    </Drawer.Navigator>
  );
};

export default AppStack;

const styles = StyleSheet.create({});
