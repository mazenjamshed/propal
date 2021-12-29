import React from 'react';
import CustomHeader from '../../components/header/header.component';
import SearchBox from '../../components/searchbox/searchbox.component';
import {ScrollView, View} from 'react-native';
import TabContainer from '../../components/Tabbox/tabcontainer.component';
import Slogan from './../../components/assets/icons/Slogan.svg';

const Home = ({navigation}) => {
  return (
    <ScrollView style={{backgroundColor: '#292929'}}>
      <CustomHeader />
      <SearchBox navigation={navigation} />
      <TabContainer />
      <View style={{alignItems: 'center', marginVertical: 20}}>
        <Slogan width={300} height={60} />
      </View>
    </ScrollView>
  );
};

export default Home;
