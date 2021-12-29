import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TabBox from './tabbox.component';

import People from './../assets/icons/people.svg';
import News from './../assets/icons/news.svg';
import HouseSell from './../assets/icons/insurance.svg';
import Invest from './../assets/icons/stats.svg';

const TabContainer = () => {
  return (
    <View style={styles.tabContainer}>
      <View
        style={{
          flexDirection: 'row',
          marginBottom: 25,
          justifyContent: 'space-between',
          width: '100%',
        }}>
        <TabBox svg={HouseSell} title="Sell/Rent Out" />
        <TabBox svg={Invest} title="Invest" />
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
        }}>
        <TabBox svg={News} title="News" />
        <TabBox svg={People} title="Clubs" />
      </View>
    </View>
  );
};

export default TabContainer;

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    margin: 10,
    flexWrap: 'wrap',
  },
});
