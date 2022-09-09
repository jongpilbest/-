
import { useSelector, useDispatch } from 'react-redux'
import React, { useState, useContext, useEffect } from "react"
import { View, TextInput, TouchableOpacity, ScrollView, Button, StyleSheet, Text } from "react-native"


import axios from "axios"
import { Ionicons } from '@expo/vector-icons';

//import { useSelector, useDispatch } from 'react-redux'



const Qna_inner = function ({ item }) {

 return (



  <View style={{

   width: 300,
   height: 160,
   marginLeft: 15
  }}>

   <Text style={{
    fontFamily: 'Nam-Bold',
    margin: 10
   }}>
    {item}
   </Text>

  </View>

 )


}


Qna_inner.navigationOptions = () => {
 return {
  header: () => false,
 };
};


export default Qna_inner;
