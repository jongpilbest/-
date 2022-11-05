
import { useSelector, useDispatch } from 'react-redux'
import React, { useState, useContext, useEffect } from "react"
import { View, Pressable, TextInput, TouchableOpacity, Button, StyleSheet, Text } from "react-native"


const Manager_Com = function ({ inner }) {



 return (
  <View style={{

   width: 250,
   height: 100,
   backgroundColor: '#FFE978',
   margin: 10,
   borderRadius: 20,
   // alignContent: 'center',
   alignSelf: 'center'

  }} >



   <TouchableOpacity onPress={() => {



   }}>
    <View style={{
     width: '100%',
     height: 55,


     //margin: 20
    }}>


     <Text style={{
      fontSize: 20,
      fontFamily: "Sc",
      color: 'black',
      textAlign: 'center',
      marginTop: 30
     }}>
      {inner}
     </Text>




    </View>
   </TouchableOpacity>



  </View>





 )
}




export default Manager_Com;
