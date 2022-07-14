


import React, { useState, useContext, useEffect, useRef } from "react"
import { View, Image, TextInput, TouchableOpacity, Button, StyleSheet, Text } from "react-native"


var hey = -1;





const Component_item = function ({ vale, touch }) {
 //console.log(`vale ${vale}`)
 var [num, setnum] = useState(0);


 return (

  <TouchableOpacity onPress={() => touch(vale)}>

   <View style={{
    backgroundColor: '#D2D2D2',
    width: 140,
    height: 140,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    padding: 0,
    borderRadius: 20,

    flexDirection: "row",


   }}

   >
    <Image style={{
     width: '90%',
     height: '90%',
    }}
     source={vale.src}>

    </Image>
   </View>


  </TouchableOpacity>

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



export default Component_item