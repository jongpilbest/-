

import React, { useState, useContext, useEffect, useRef } from "react"
import { View, Image, TextInput, TouchableOpacity, Button, StyleSheet, Text } from "react-native"




const Ingre_item = function ({ show }) {
 console.log(show)
 return (

  <View style={{
   backgroundColor: 'white',
   marginRight: 10,
   width: 100,
   height: 100,
   borderRadius: 50,
   marginTop: 10,


  }}>

   <Text style={{
    fontFamily: 'Sc',
    fontSize: 13,
    textAlign: 'center',
    margin: 20,

   }}>
    {show}
   </Text>

  </View>



 )
}

export default Ingre_item;
