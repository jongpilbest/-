

import React, { useState, useContext, useEffect, useRef } from "react"
import { View, Image, TextInput, TouchableOpacity, Button, StyleSheet, Text } from "react-native"




const Allery_item = function ({ show }) {

 return (

  <View style={{
   backgroundColor: 'white',
   marginRight: 10,
   width: 90,
   height: 100,
   borderRadius: 50,
   marginTop: 10,


  }}>
   <Text>
    {show}
   </Text>

  </View>



 )
}

export default Allery_item;
