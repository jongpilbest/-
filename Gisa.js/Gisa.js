
import { useSelector, useDispatch } from 'react-redux'
import React, { useState, useContext, useEffect } from "react"
import { View, TextInput, TouchableOpacity, Button, StyleSheet, Text, ScrollView } from "react-native"

import axios from 'axios';

import Gisa_Com from './Gisa_Com';

const Gisa = function ({ navigation }) {
 const token = useSelector((state) => state.token.token);
 const item = navigation.getParam('item');
 console.log('기사 페이지');
 var hey = [1, 2, 3, 4, 5];
 console.log(item)
 return (
  <View style={{
   backgroundColor: '#DDEEF2',
   height: 3000,
  }}>

   <View style={{
    backgroundColor: '#F4F4F4',
    height: 80,
    width: '100%',


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


   <View style={{
    width: '100%',
    height: '80%',
    marginTop: 10,




   }}>
    <ScrollView showsVerticalScrollIndicator={false}
     // showsVerticalScrollIndicator={false}
     showsHorizontalScrollIndicator={false}
     style={{ flexGrow: 1 }}
    // showsHorizontalScrollIndicator={false}
    >
     <View style={{
      width: '100%',
      height: 2700

     }}>


      {
       item.map((el, index) => {
        return <Gisa_Com good={el} key={index}></Gisa_Com>
       })
      }
     </View>
    </ScrollView>

   </View>

  </View >

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
