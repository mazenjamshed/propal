import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const ListBox = ({desc, address, price, image, navigation}) => {
  return (
    <TouchableOpacity
      // activeOpacity={1}
      onPress={() => {
        navigation.navigate('details', {
          desc: desc,
          address: address,
          image: image,
          price: price,
        });
      }}
      style={{
        backgroundColor: '#1f1f1f',
        flexDirection: 'row',
        borderRadius: 20,
        marginHorizontal: 10,
        marginVertical: 10,
        paddingVertical: 5,
      }}>
      <View style={{flexBasis: '30%', height: 150, marginLeft: 5}}>
        <Image
          // source={require('./../assets/images/reactjs-2.png')}
          source={{
            uri: image,
          }}
          style={{
            height: 150,
            width: 130,
            borderRadius: 20,
            padding: 10,
            margin: 5,
            marginVertical: 10,
            flex: 1,
            resizeMode: 'cover',
          }}
        />
        {/* <Text style={{color: 'white'}}>
        </Text> */}
      </View>
      <View
        style={{
          flexBasis: '70%',
          justifyContent: 'space-around',
          position: 'relative',
          marginLeft: 30,
        }}>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 12}}>
          <Text
            style={{
              color: 'white',
              letterSpacing: 1.5,
              marginRight: 5,
              fontWeight: 'bold',
              letterSpacing: 2.7,
              fontFamily: 'Oswald-VariableFont_wght',
            }}>
            PKR
          </Text>
          <Text
            style={{
              color: 'white',
              fontSize: 18,
              fontWeight: 'bold',
              letterSpacing: 2.7,
              fontFamily: 'Oswald-VariableFont_wght',
            }}>
            {price}
          </Text>
        </View>
        <Text
          style={{
            color: 'white',
            fontWeight: '700',
            letterSpacing: 2,
            fontFamily: 'Montserrat-Regular',
            fontSize: 16,
          }}>
          {address}
        </Text>
        <Text
          style={{
            color: 'white',
            fontWeight: '600',
            fontFamily: 'Montserrat-Regular',
            fontSize: 16,
            lineHeight: 30,
          }}>
          {desc}
        </Text>
        <Text style={{color: 'white'}}></Text>
        <Text
          style={{
            color: 'white',
            backgroundColor: 'red',
            fontWeight: 'bold',
            letterSpacing: 1.5,
            position: 'absolute',
            right: 36,
            top: -3,
            paddingHorizontal: 20,
            paddingVertical: 10,
            fontSize: 18,
            borderRadius: 10,
          }}>
          FRESH
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListBox;

const styles = StyleSheet.create({});
