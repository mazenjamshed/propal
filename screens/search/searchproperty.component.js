import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import ListBox from '../../components/custom-listbox/listbox.component';

import firestore from '@react-native-firebase/firestore';

// const nav = useNavigation();
const SearchProperty = ({navigation}) => {
  const [loading, setLoading] = useState(true); // Set loading to true on component mount
  const [properties, setProperties] = useState([]); // Initial empty array of users

  useEffect(() => {
    const subscriber = firestore()
      .collection('properties')
      .onSnapshot(querySnapshot => {
        const properties = [];

        querySnapshot.forEach(documentSnapshot => {
          properties.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        setProperties(properties);
        setLoading(false);
      });

    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <View style={{backgroundColor: 'black'}}>
      <FlatList
        data={properties}
        renderItem={({item}) => (
          <ListBox
            address={item.address}
            desc={item.desc}
            price={item.price}
            image={item.image}
            navigation={navigation}
          />
        )}
      />
    </View>
  );
};

export default SearchProperty;

const styles = StyleSheet.create({});
