import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import IconHouse from './../assets/icons/house.svg';
const SearchBox = ({navigation}) => {
  return (
    <View style={styles.searchbox}>
      <View style={styles.left}>
        <IconHouse width={150} height={60} />
      </View>

      <View style={styles.right}>
        <Text style={(styles.text, styles.textWhite)}>Search Property:</Text>
        <View style={styles.btnbox}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate('SearchProperty')}>
            <Text style={styles.btnText}>Rent</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate('SearchProperty')}>
            <Text style={styles.btnText}>Buy</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchbox: {
    backgroundColor: 'red',
    flexDirection: 'row',
    padding: 25,
    paddingLeft: 0,
    borderRadius: 20,
    margin: 10,
    color: 'white',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  left: {
    flexBasis: '35%',
    justifyContent: 'center',
  },
  right: {
    flexBasis: '65%',
  },
  btnbox: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
  },
  btn: {
    backgroundColor: 'black',
    width: 100,
    display: 'flex',
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 15,
  },
  btnText: {
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 2.7,
    fontFamily: 'Oswald-VariableFont_wght',
    letterSpacing: 4,
  },
  textWhite: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 2.7,
    fontFamily: 'Oswald-VariableFont_wght',
  },
});
export default SearchBox;
