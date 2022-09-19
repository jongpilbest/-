
import { useSelector, useDispatch } from 'react-redux'
import React, { useState, useContext, useEffect } from "react"
import { View, TextInput, TouchableOpacity, Button, StyleSheet, Text } from "react-native"
//import { Context } from '../contextv/DetailContext'
//import { authAction } from "../redux/auth";
//import { cos } from 'react-native-reanimated';
//import { counterActions } from "../store"
import Write_Com from './Write_Com'
import axios from "axios"
import { Ionicons } from '@expo/vector-icons';
//import Manager_Enroll from './Manager_Enroll';
//import REal_Com from './REal_Com';
import { ScrollView } from 'react-native-gesture-handler';
import Componcopy from '../../signup/Componcopy'
import Componn from '../../signup/Componn'
const Write_Enroll = function ({ navigation }) {



 const mos_v = useSelector((state) => state.auth.ingredient)
 const misugo = function (el) {
  dispatch(authAction.setallergy_1(el))


 }
 const mos = useSelector((state) => state.auth.allergy)

 var misu = [


  "이름", "브랜드", "상품이미지", "상세이미지", "바코드", "유저아이디", "유저닉네임"
 ]

 return (

  <View style={{
   width: '100%',
   backgroundColor: 'white',
   height: '100%',
   // flexDirection: 'row'
  }}>
   <View style={{
    backgroundColor: '#F4F4F4',
    height: 80,
    width: '100%'


    //eight: '35%'
   }}>
    <TouchableOpacity onPress={() => {


     navigation.pop();
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
    }}>상품등록</Text>
   </View>
   <ScrollView>


    {misu.map((el, index
    ) => {
     return <Write_Com data={el} key={index}></Write_Com>
    })}


    <View>
     <Text style={{
      fontFamily: 'Nam-Bold',
      fontSize: 18,
      textAlign: 'center',
      margin: 10,
     }}>
      알레르기
     </Text>
    </View>



    <View style={styles.frined}>

     {mos.map((el, index) => {
      return < Componn key={index} gogo={(el) => misugo(el)} vale={el}></Componn>
     })
     }

    </View>


    <View>
     <Text style={{
      fontFamily: 'Nam-Bold',
      fontSize: 18,
      margin: 10,
      textAlign: 'center'
     }}>
      비선호
     </Text>
    </View>
    <ScrollView style={styles.border}>
     <View style={styles.frined_2}>

      {mos_v.map((el, index) => {
       return < Componcopy key={index} gogo={(el) => misugo(el)} vale={el}></Componcopy>
      })
      }

     </View>
    </ScrollView>
    <View style={{
     width: '100%',
     height: 100,
     backgroundColor: 'white'
    }}>
     <TouchableOpacity>
      <View style={{
       width: 150,
       height: 50,
       borderRadius: 10,
       display: 'flex',
       marginLeft: 200,
       backgroundColor: '#FF4444',

      }}>
       <Text style={
        {
         fontFamily: 'Nam-Bold',
         fontSize: 20,
         color: 'white',
         textAlign: 'center',
         marginTop: 10
        }
       }>
        등록
       </Text>
      </View>
     </TouchableOpacity>
    </View>
   </ScrollView>

  </View>



 )


}
const styles = StyleSheet.create({


 border: {
  width: '94%',
  height: 400,

  borderWidth: 3,
  margin: 3,
  marginLeft: 10,
  borderColor: 'transparent'


 },
 frined_2: {

  flexDirection: 'row',
  borderRadius: 20,
  height: 350,
  // justifyContent: 'space-between',
  backgroundColor: '#DDEEF2',
  // justifyContent: 'flex-start',
  flexWrap: 'wrap'
 },
 frined: {
  width: '94%',
  marginLeft: 10,
  flexDirection: 'row',
  borderRadius: 20,
  height: 700,
  // justifyContent: 'space-between',
  backgroundColor: '#DDEEF2',
  // justifyContent: 'flex-start',
  flexWrap: 'wrap'
 }




})

Write_Enroll.navigationOptions = () => {
 return {
  header: () => false,
 };
};


export default Write_Enroll;
