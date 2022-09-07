
import { useSelector, useDispatch } from 'react-redux'
import React, { useState, useContext, useEffect } from "react"
import { View, TextInput, TouchableOpacity, Button, StyleSheet, Text } from "react-native"

import { Ionicons } from '@expo/vector-icons';




const Empty = function ({ navigation }) {






 return (
  <View style={{
   backgroundColor: '#DDEEF2',
   height: '100%'
  }}>

   <Text>
    하단바 바꾸는거 
 </Text>




  </View >

 )


}
Empty.navigationOptions = () => {
 return {
  header: () => false,
 };
};

const style = StyleSheet.create({
 text: {
  width: 200,
  height: 40,
  borderColor: "black"
 },

 border: {
  width: '85%',
  height: 50,
  backgroundColor: 'white',
  borderColor: 'white',

  borderWidth: 3,
  margin: 10,
  borderRadius: 10,
  marginLeft: '3%',
  marginLeft: 15,
  marginTop: '5%',



 }

})

export default Empty;
