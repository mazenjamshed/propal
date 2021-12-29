import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const Details = ({route}) => {
  const {image, address, desc, price} = route.params;
  return (
    <ScrollView style={{backgroundColor: 'black'}}>
      <Image
        source={{
          uri: image,
        }}
        style={{
          height: 210,
          width: '100%',
          // borderRadius: 20,
          // padding: 10,
          // margin: 5,
          // marginVertical: 10,
          // flex: 1,
          // resizeMode: 'cover',
        }}
      />

      <Text
        style={{
          color: 'red',
          fontSize: 22,
          letterSpacing: 1.5,
          marginTop: 15,
          fontWeight: 'bold',
          letterSpacing: 2.7,
          fontFamily: 'Oswald-VariableFont_wght',
          padding: 10,
        }}>
        PRICE:
        <Text
          style={{
            color: 'white',
            fontSize: 22,
            letterSpacing: 1.5,
            // marginRight: 5,
            fontWeight: 'bold',
            letterSpacing: 2.7,
            fontFamily: 'Oswald-VariableFont_wght',
          }}>
          {price}
        </Text>
      </Text>

      <Text
        style={{
          color: 'red',
          fontSize: 22,
          letterSpacing: 1.5,
          // marginRight: 5,
          fontWeight: 'bold',
          letterSpacing: 2.7,
          fontFamily: 'Oswald-VariableFont_wght',
          padding: 10,
        }}>
        Description
      </Text>

      <Text
        style={{
          color: 'white',
          fontSize: 17,
          letterSpacing: 1.5,
          marginRight: 5,
          fontWeight: 'bold',
          letterSpacing: 2.7,
          fontFamily: 'Oswald-VariableFont_wght',
          paddingHorizontal: 10,
        }}>
        This is located in {address} and is worth {price}
      </Text>

      <Text
        style={{
          color: 'red',
          fontSize: 22,
          letterSpacing: 1.5,
          marginTop: 15,
          fontWeight: 'bold',
          letterSpacing: 2.7,
          fontFamily: 'Oswald-VariableFont_wght',
          padding: 10,
        }}>
        Additional Information
      </Text>

      <Text
        style={{
          color: 'white',
          fontSize: 17,
          letterSpacing: 1.5,
          marginRight: 5,
          fontWeight: 'bold',
          letterSpacing: 2.7,
          fontFamily: 'Oswald-VariableFont_wght',
          paddingHorizontal: 10,
        }}>
        {desc}
      </Text>
      <View
        style={{
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 25,
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: 'red',
            width: 270,
            alignItems: 'center',
            paddingVertical: 12,
            borderRadius: 15,
            // justifyContent: 'center',
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              fontWeight: 'bold',
              letterSpacing: 2.7,
              fontFamily: 'Oswald-VariableFont_wght',
              letterSpacing: 4,
            }}>
            Contact Seller
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Details;

const styles = StyleSheet.create({});
