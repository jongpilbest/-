


import React, { useState, useContext, useEffect, useRef } from "react"
import { View, Image, TextInput, TouchableOpacity, Button, StyleSheet, Text } from "react-native"


var hey = -1;


import { Octicons } from '@expo/vector-icons';


var check = 1;

const Qna_Com = function ({ navigation, vale, touch }) {
 var [check, setcheck] = useState(0)
 const onshow = function () {

  if (check == 2) {
   console.log(check)
   setcheck(0)
  }

  if (check == 0) {
   return true
  }
  else if (check == 1) {

   return false
  }


 }
 const setshow = function () {

  setcheck(pre => pre + 1);

 }

 const innerStyle = function () {

  if (check == 0) {
   return {
    backgroundColor: 'white',
    width: 330,
    height: 60,
    margin: 10,
    marginLeft: 20,

    borderRadius: 10,
    borderColor: '#FFFFFF',
    flexDirection: 'row'
   }

  }

  else if (check == 1) {
   return {
    backgroundColor: 'white',
    width: 330,
    height: 130,
    margin: 10,
    marginLeft: 20,

    borderRadius: 10,
    borderColor: '#FFFFFF',
    flexDirection: 'row'
   }

  }
 }


 return (

  <TouchableOpacity onPress={() => {
   setshow();

  }}>


   <View style={innerStyle()}

   >
    <Text style={{
     fontFamily: 'Nam-Bold'
    }}>
     안녕
    </Text>
    {
     onshow() &&

     <Octicons style={{
      marginLeft: 260,
      marginTop: 15,


     }} name="north-star" size={30} color="#404040" />

    }
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



export default Qna_Com