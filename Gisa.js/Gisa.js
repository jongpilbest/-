
import { useSelector, useDispatch } from 'react-redux'
import React, { useState, useContext, useEffect } from "react"
import { View, TextInput, TouchableOpacity, Button, StyleSheet, Text } from "react-native"

import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';



const Gisa = function ({ navigation }) {
 const token = useSelector((state) => state.token.token);


 return (
  <View style={{
   backgroundColor: '#DDEEF2',
   height: 2000,
  }}>

   <View style={{
    backgroundColor: '#F4F4F4',
    height: 80,
    width: '100%'


    //eight: '35%'
   }}>

    <Text style={{
     fontSize: 20,
     alignSelf: "flex-start",
     //color: '#7C7C7C',
     marginTop: 30,
     marginLeft: 20,
     position: 'absolute',


     fontFamily: "Nam-Bold"
    }}>트랜드기사</Text>
   </View>



  </View>

 )


}
Gisa.navigationOptions = () => {
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

export default Gisa;
