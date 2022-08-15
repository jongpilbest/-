


import React, { useState, useContext, useEffect, useRef } from "react"
import { View, Image, TextInput, TouchableOpacity, Button, StyleSheet, Text } from "react-native"
import Barcode from "../component/Barcode";
//import { Context } from "../contextv/DetailContext";
import Enroll_new from "./Enroll_new";
var check = 1;
var new_enroll = [1];

const Enroll_page = function ({ navigation }) {
 //var state_state = (Context._currentValue.state.Barcode);
 const item_show = navigation.getParam('data');
 console.log('??????');
 console.log(item_show)

 //console.log(state_state)
 useEffect(() => {
  new_enroll.length = 1;
 }, [])

 const fill_in = () => {

  if (check == 1) {
   return {
    opacity: 1
   }
  }
  else {
   return {
    opacity: 0
   }

  }



 }
 const goto_barcode = function () {
  //console.log('hey')
  navigation.navigate('Barcode')
 }
 return (

  <View style={{
   backgroundColor: 'white',
   height: '100%'
  }}>

   <View style={{
    backgroundColor: '#F4F4F4',
    width: '100%',
    height: 100
    //eight: '35%'
   }}>
    <Text style={{
     fontSize: 20,
     alignSelf: "center",
     //color: '#7C7C7C',
     position: 'absolute',
     top: '35%',
     left: '5%',
     marginTop: '5%',
     fontFamily: "Nam-Bold"
    }}>추가하기</Text>
   </View>
   <View style={{
    height: '40%',
    width: '100%'
   }}>

    <Enroll_new misu={() => goto_barcode()} hey={item_show}></Enroll_new>


   </View>
   <View style={{
    height: 20
   }}>

    {
     /*<Text style={fill_in()}>채워주세요</Text>*/
    }



   </View>


  </View>

 )
}
Enroll_page.navigationOptions = () => {
 return {
  header: () => false,
 };
};
const styles = StyleSheet.create({


 border: {

  backgroundColor: 'white',
  width: 80,
  height: 100,
  marginTop: 10,
  marginLeft: 30,




 },




})



export default Enroll_page