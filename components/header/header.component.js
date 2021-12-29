import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const CustomHeader = () => {
  return (
    <View style={styles.header}>
      <View style={styles.header__logobox}>
        <Text style={styles.header__logo}>
          Propal
          <Text style={{color: '#ADADAD'}}>.com</Text>
        </Text>
        <Text style={styles.header__sub}>The Real Estate Marketplace</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#292929',
    padding: 15,
  },
  header__logobox: {
    width: '75%',
  },
  header__logo: {
    color: '#FF4747',
    fontSize: 35,
    fontWeight: 'bold',
    letterSpacing: 2.7,
    fontFamily: 'Oswald-VariableFont_wght',
  },
  header__sub: {
    color: '#ADADAD',
    fontSize: 14,
    letterSpacing: 1.5,
    fontWeight: 'bold',
    letterSpacing: 2.7,
    fontFamily: 'Oswald-VariableFont_wght',
  },
});
export default CustomHeader;
