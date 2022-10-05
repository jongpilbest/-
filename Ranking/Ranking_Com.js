


import React, { useState, useContext, useEffect, useRef } from "react"
import { View, Image, TextInput, TouchableOpacity, Button, StyleSheet, Text } from "react-native"


var hey = -1;

import { AntDesign } from '@expo/vector-icons';


var check = 1;

const Ranking_Com = function ({ fo, item, t }) {






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

  }}

  >

   <View style={{
    width: '30%',

   }}>
    <Text style={{
     fontFamily: 'Nam-Regular',
     fontSize: 23,
     margin: 10
    }}>
     {`${t.ranking}위`}
    </Text>
   </View>
   <View style={{
    width: '80%'
   }}>
    <Text style={{
     fontFamily: 'Nam-Regular',
     fontSize: 20,
     marginTop: 20,

     textAlign: 'center'
    }}>
     {`${t.nickname}님`}
    </Text>
   </View>

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