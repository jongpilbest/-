

import React, { useState, useContext, useEffect } from "react"
import { View, TextInput, TouchableOpacity, Button, StyleSheet, Text } from "react-native"
//import { Context } from '../contextv/DetailContext'
import { Ionicons } from '@expo/vector-icons';
//import { cos } from 'react-native-reanimated';
//import { counterActions } from "../store"

import axios from "axios"


//import { useSelector, useDispatch } from 'react-redux'
import Search_Compo from '../../search_item/Search_Compo';






const like_list = function ({ navigation, data }) {
 //const token = useSelector((state) => state.token.token)
 console.log('내역확인')
 var item = navigation.getParam('data');


 return (
  <View style={{
   backgroundColor: '#ffffff'
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
     alignSelf: "flex-start",
     //color: '#7C7C7C',
     marginTop: 40,
     marginLeft: 70,
     position: 'absolute',


     fontFamily: "Nam-Bold"
    }}>선호 상품 리스트</Text>
   </View>

   <View
    style={{
     backgroundColor: 'white',
     height: '90%'
    }


    } >

    <TouchableOpacity onPress={() => {



    }}>


    </TouchableOpacity>
    <View style={{
     flexDirection: 'row',

     height: 300,
     // justifyContent: 'space-between',
     backgroundColor: 'white',
     // justifyContent: 'flex-start',
     flexWrap: 'wrap',
     marginTop: 15
    }}>



     {item.map((el, index) => {

      return (

       <Search_Compo key={index} touch={(vv) => gopage(vv)} vale={el}></Search_Compo>

      )
     })}
    </View>
   </View >



  </View >

 )


}


like_list.navigationOptions = () => {
 return {
  header: () => false,
 };
};


export default like_list;
