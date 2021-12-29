import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
// import Icon from './../assets/icons/news.svg';

const TabBox = props => {
  return (
    <View style={styles.tabbox}>
      <props.svg width={165} height={60} />
      <Text style={styles.tabHeading}>{props.title}</Text>
    </View>
  );
};

export default TabBox;

const styles = StyleSheet.create({
  tabbox: {
    backgroundColor: '#141414',
    textAlign: 'center',
    paddingVertical: 25,
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 20,
    width: 170,
    shadowColor: '#A3A3A3',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  tabHeading: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
    fontFamily: 'Oswald-VariableFont_wght',

    letterSpacing: 2.5,
    textAlign: 'center',
    marginTop: 8,
  },
});
