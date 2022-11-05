


import React, { useState, useContext, useEffect, useRef } from "react"
import { View, Image, TextInput, TouchableOpacity, Button, StyleSheet, Text } from "react-native"


var hey = -1;

import Qna_inner from "./Qna_inner";
import { AntDesign } from '@expo/vector-icons';


var check = 1;

const Qna_Com = function ({ item }) {
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

 const hey_show = function () {
  if (check == 2) {
   console.log(check)
   setcheck(0)
  }

  if (check == 0) {
   return false
  }
  else if (check == 1) {

   return true
  }



 }


 const setshow = function () {

  setcheck(pre => pre + 1);

 }

 const innerStyle = function () {

  if (check == 0) {
   return {
    backgroundColor: 'white',
    width: '90%',
    height: 60,
    margin: 10,
    marginLeft: 20,

    borderRadius: 5,
    borderColor: '#FFFFFF',
    flexDirection: 'row',
    flexWrap: 'wrap'
   }

  }

  else if (check == 1) {
   return {
    backgroundColor: 'white',
    width: '90%',
    height: 190,
    margin: 10,
    marginLeft: 20,

    borderRadius: 5,
    borderColor: '#FFFFFF',
    flexDirection: 'row',
    flexWrap: 'wrap'
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
     fontFamily: 'Sc',
     fontSize: 16,
     marginTop: 15,
     marginLeft: 15
    }}>
     {item.title}
    </Text>
    {
     onshow() && <View style={{
      width: 30,
      height: 30,
      //backgroundColor: 'pink',
      position: 'absolute',
      top: 15,
      right: 15
     }}>
      <AntDesign style={{

       marginLeft: 5
      }} name="caretdown" size={25} color="black" />
     </View>



    }
    <View style={{


    }}>
     {hey_show() && <Qna_inner item={item.content}></Qna_inner>}
    </View>


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



export default Qna_Com