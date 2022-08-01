


import React, { useState, useContext, useEffect, useRef } from "react"
import { View, Image, TextInput, TouchableOpacity, Button, StyleSheet, Text } from "react-native"


var hey = -1;



import { useSelector, useDispatch } from 'react-redux'


const Search_Compo = function ({ navigation, vale, touch }) {
 //console.log(`vale ${vale}`)
 var [num, setnum] = useState(0);


 return (

  <TouchableOpacity onPress={() => {
   touch(vale.name);

  }}>

   <View style={{
    backgroundColor: '#DDEEF2',
    width: 140,
    height: 170,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 10,
    padding: 0,
    borderRadius: 100,

    flexDirection: "row",


   }}

   >
    <Text style={{
     fontFamily: "Nam-Bold",
     fontSize: 11,
     textAlign: 'center',
     marginTop: 130,
     marginLeft: 30,

    }}>
     {vale.name}
    </Text>

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



export default Search_Compo