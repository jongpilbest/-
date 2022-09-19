

import React, { useState, useContext, useEffect } from "react"
import { View, TextInput, TouchableOpacity, Button, StyleSheet, ScrollView, Text, Image } from "react-native"
//import { Context } from '../contextv/DetailContext'
import { Ionicons } from '@expo/vector-icons';
//import { cos } from 'react-native-reanimated';
//import { counterActions } from "../store"

import axios from "axios"


import { useSelector, useDispatch } from 'react-redux'
//import Search_Compo from '../../search_item/Search_Compo';


import Sung_com from "./Sung_com";
const sung = function ({ navigation }) {
 //const token = useSelector((state) => state.token.token)
 console.log('내역확인')

 var item = ['단백질', '무기질', '탄수화물', '지방', '비타민']

 return (
  <View style={{
   backgroundColor: '#ffffff',
   width: '100%',
   height: '100%'
  }}>


   <View style={{
    backgroundColor: '#F4F4F4',
    height: 80,
    width: '100%'


    //eight: '35%'
   }}>

    <TouchableOpacity onPress={() => {

     console.log('엥')
     navigation.pop()
    }}>
     <Ionicons style={{

      marginLeft: 15,
      marginTop: 20,
     }} name="arrow-back-circle" size={50} color="black" />

    </TouchableOpacity>


    <Text style={{
     fontSize: 20,
     alignSelf: "center",
     textAlign: 'center',
     //color: '#7C7C7C',
     marginTop: 30,
     marginLeft: 0,
     position: 'absolute',


     fontFamily: "Nam-Bold"
    }}>성분정보</Text>
   </View>

   <View
    style={{
     backgroundColor: 'white',
     height: '95%'
    }


    } >








    <View style={{
     width: '100%',
     height: '100%'



    }}>

     <View style={{

      width: '95%',
      height: 400,
      backgroundColor: 'black',
      margin: 10,
      flexDirection: 'row',

      // justifyContent: 'space-between',
      backgroundColor: 'white',
      // justifyContent: 'flex-start',
      flexWrap: 'wrap',
      marginTop: 15
      //position: 'abso
     }}>


      {item.map((el, index) => {

       return <Sung_com data={el} key={index}></Sung_com>
      })}


     </View>




    </View>



   </View >




  </View>


 )


}


sung.navigationOptions = () => {
 return {
  header: () => false,
 };
};


export default sung;
