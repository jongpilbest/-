
import { useSelector, useDispatch } from 'react-redux'
import React, { useState, useContext, useEffect } from "react"
import { View, TextInput, TouchableOpacity, Button, StyleSheet, Text } from "react-native"
//import { Context } from '../contextv/DetailContext'
//import { authAction } from "../redux/auth";
//import { cos } from 'react-native-reanimated';
//import { counterActions } from "../store"

import axios from "axios"
import { Ionicons } from '@expo/vector-icons';
//import Manager_Enroll from './Manager_Enroll';

import Manager_Com from './Manager_Com';
const Manager = function ({ navigation }) {

 var map_manager = ["상품등록", "기사등록", "상품요청 조회", "공지사항 등록"]

 return (

  <View style={{
   width: '100%',
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
    }}>관리자 페이지</Text>
   </View>


   <View style={{
    width: '100%',
    height: '90%',




   }}>

    <View style={{

     width: 250,
     height: 100,
     backgroundColor: '#DDEEF2',
     margin: 10,
     borderRadius: 20,
     // alignContent: 'center',
     alignSelf: 'center'

    }} >



     <TouchableOpacity onPress={() => {

      navigation.navigate('Write_Enroll');

     }}>
      <View style={{
       width: '100%',
       height: 55,


       //margin: 20
      }}>


       <Text style={{
        fontSize: 20,
        fontFamily: "Nam-Bold",
        color: 'black',
        textAlign: 'center',
        marginTop: 30
       }}>
        상품등록
       </Text>

      </View>
     </TouchableOpacity>



    </View>
    <View style={{

     width: 250,
     height: 100,
     backgroundColor: '#DDEEF2',
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
        fontFamily: "Nam-Bold",
        color: 'black',
        textAlign: 'center',
        marginTop: 30
       }}>
        기사등록
       </Text>




      </View>
     </TouchableOpacity>



    </View>
    <View style={{

     width: 250,
     height: 100,
     backgroundColor: '#DDEEF2',
     margin: 10,
     borderRadius: 20,
     // alignContent: 'center',
     alignSelf: 'center'

    }} >



     <TouchableOpacity onPress={() => {

      navigation.navigate('Manager_Enroll')

     }}>
      <View style={{
       width: '100%',
       height: 55,


       //margin: 20
      }}>


       <Text style={{
        fontSize: 20,
        fontFamily: "Nam-Bold",
        color: 'black',
        textAlign: 'center',
        marginTop: 30
       }}>
        상품 요청 조회
       </Text>




      </View>
     </TouchableOpacity>



    </View>

    <View style={{

     width: 250,
     height: 100,
     backgroundColor: '#DDEEF2',
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
        fontFamily: "Nam-Bold",
        color: 'black',
        textAlign: 'center',
        marginTop: 30
       }}>
        공지사항 등록
       </Text>




      </View>
     </TouchableOpacity>



    </View>



   </View>

  </View>

 )


}


Manager.navigationOptions = () => {
 return {
  header: () => false,
 };
};


export default Manager;
