

import React, { useState, useContext, useEffect, useRef } from "react"
import { View, Image, TextInput, TouchableOpacity, Button, StyleSheet, Text } from "react-native"




const Kisa = function ({ show }) {
 console.log(show)
 return (
  <View style={{
   width: '90%',
   marginTop: 15,
   height: 40,
   marginLeft: 15,
   borderRadius: 5,
   backgroundColor: 'white'
  }}>
   <Text style={{
    fontFamily: "Sc"
    , fontSize: 10,
    marginTop: 10,
    marginLeft: 20,
    margin: 10

   }}>
    {show.title}
   </Text>

  </View>



 )
}

export default Kisa;
