import React, { useState, useEffect } from 'react';
import {
  Text, View, TouchableOpacity, Alert,
  Button,
  Dimensions,
  StyleSheet,
  Vibration,

} from 'react-native';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'
import { BarCodeScanner } from 'expo-barcode-scanner';

const Barcode = function ({ navigation }) {


  const token = useSelector((state) => state.token.token)
  console.log(token);
  var keyword = "1"


  //var keyword_2 = '핫식스'

  axios.post(`http://13.209.83.188:5000/likeproduct/list`,

    {
      headers: {
        'X-AUTH-TOKEN': token

      }
    }
  ).then((response) => {
    if (response) {
      console.log('??서놓 상품>');
      console.log(response.data)
      // setcheck(response.data);

      //setUser(response);
    } else {
      alert("failed to ");
    }
  }).catch((err) => {
    console.log(err.message);
    console.log(err)
    console.log('?');
  });





  return (
    <View style={styles.container}>

      <Text></Text>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  scanner: { flex: 1 },
  btn: {
    position: 'absolute',
    top: 20
  }
});

export default Barcode