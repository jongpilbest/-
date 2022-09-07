
import { useSelector, useDispatch } from 'react-redux'
import React, { useState, useContext, useEffect } from "react"
import { View, TextInput, TouchableOpacity, ScrollView, Button, StyleSheet, Text } from "react-native"


import axios from "axios"
import { Ionicons } from '@expo/vector-icons';

//import { useSelector, useDispatch } from 'react-redux'


import Qna_Com from './Qna_Com';
const Qna = function ({ navigation, }) {
 // const token = useSelector((state) => state.token.token)

 var arr = [1, 2, 3, 4, 5, 6];

 return (
  <View style={{
   backgroundColor: '#ffffff'
  }}>
   <View style={{
    backgroundColor: '#F4F4F4',
    height: 80,
    width: '100%'


    //eight: '35%'
   }}>
    <TouchableOpacity onPress={() => {


     navigation.pop();
    }}>
     <Ionicons style={{

      marginLeft: 15,
      marginTop: 20,
     }} name="arrow-back-circle" size={50} color="black" />

    </TouchableOpacity>

    <Text style={{
     fontSize: 20,
     alignSelf: "flex-start",
     //color: '#7C7C7C',
     marginTop: 40,
     marginLeft: 70,
     position: 'absolute',


     fontFamily: "Nam-Bold"
    }}>FAQ</Text>
   </View>
   <View style={{
    width: '100%',
    height: 1000,
    marginTop: 30,
    backgroundColor: "#DDEEF2"

   }}>
    <ScrollView
     contentContainerStyle={{ flexGrow: 1 }}
     showsVerticalScrollIndicator={false}

     // showsHorizontalScrollIndicator={false}
     pagingEnabled={true}>
     <View style={{
      width: '100%',
      height: 1300,

     }}>

      {arr.map((el, index) => {
       return <Qna_Com key={index
       }></Qna_Com>

      })}

     </View>
    </ScrollView>

   </View>
  </View>
 )


}


Qna.navigationOptions = () => {
 return {
  header: () => false,
 };
};


export default Qna;
