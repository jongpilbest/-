


import React, { useState, useContext, useEffect, useRef } from "react"
import { View, Image, TextInput, TouchableOpacity, Button, StyleSheet, Text } from "react-native"


var hey = -1;

import { AntDesign } from '@expo/vector-icons';


var check = 1;

const Ranking_Com = function ({ item, t }) {






 return (


  <View style={{
   backgroundColor: 'white',
   width: 330,
   height: 60,
   margin: 10,
   marginLeft: 20,

   borderRadius: 10,
   borderColor: '#FFFFFF',
   flexDirection: 'row',
   flexWrap: 'wrap'
  }}

  >
   <Text>
    {t}
   </Text>
  </View>








 )
}

const styles = StyleSheet.create({


 border: {

  backgroundColor: 'white',
  width: 80,
  height: 100,
  marginTop: 10,
  marginLeft: 30,




 },




})



export default Ranking_Com