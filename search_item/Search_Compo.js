


import React, { useState, useContext, useEffect, useRef } from "react"
import { View, Image, TextInput, TouchableOpacity, Button, StyleSheet, Dimensions, Text } from "react-native"


var hey = -1;



import { useSelector, useDispatch } from 'react-redux'
import first from "../signup/first";


const Search_Compo = function ({ navigation, vale, touch }) {
 //console.log(`vale ${vale}`)
 var [num, setnum] = useState(0);

 console.log(vale.name)
 var fist = '';
 var sec = '';
 if (vale.name.length >= 10) {
  fist = vale.name.slice(0, 10);
  sec = vale.name.slice(10, vale.name.length);

 }
 else if (vale.name.length < 10) {
  fist = vale.name
 }
 return (

  <TouchableOpacity onPress={() => {
   touch(vale.name);

  }}>

   <View style={{
    backgroundColor: 'white',
    width: Dimensions.get("window").width / 2.6,
    height: 170,
    margin: 15,

    padding: 0,
    borderRadius: 5,
    borderColor: '#FFE978',
    borderWidth: 2,





   }}

   >
    <Image
     style={{
      height: 90,
      width: 90,
      marginTop: 30,
      marginLeft: 20,

      padding: 0,

      //       borderRadius: '50%',
     }}
     source={{ uri: vale.image ? vale.image : null }}
    //source={{ uri: image }}
    />

    <Text style={{
     fontFamily: "Sc",
     fontSize: 12,
     textAlign: 'center',
     marginTop: 5,


    }}>
     {fist}
    </Text>
    <Text style={{
     fontFamily: "Sc",
     fontSize: 10,
     textAlign: 'center',


    }}>
     {sec}
    </Text>

   </View>


  </TouchableOpacity >

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