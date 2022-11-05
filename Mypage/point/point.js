

import React, { useState, useContext, useEffect } from "react"
import { View, TextInput, TouchableOpacity, Button, StyleSheet, ScrollView, Text, Image } from "react-native"
//import { Context } from '../contextv/DetailContext'
import { Ionicons } from '@expo/vector-icons';
//import { cos } from 'react-native-reanimated';
//import { counterActions } from "../store"

import axios from "axios"


import { useSelector, useDispatch } from 'react-redux'
//import Search_Compo from '../../search_item/Search_Compo';


import Point_inner from "./point_inner";



const point = function ({ navigation }) {
 //const token = useSelector((state) => state.token.token)
 console.log('내역확인')

 var item = navigation.getParam('data');
 const nickname = useSelector((state) => state.owner.owner);
 var len = (item.length * 5);
 return (
  <View style={{
   backgroundColor: '#F2F2F2',
   width: '100%',
   height: '100%'
  }}>


   <View style={{
    backgroundColor: '#F2F2F2',
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
      marginTop: 25,
     }} name="arrow-back-circle" size={50} color="#545252" />

    </TouchableOpacity>

    <Text style={{
     fontSize: 20,
     alignSelf: "flex-start",
     //color: '#7C7C7C',
     marginTop: 40,
     marginLeft: 70,
     position: 'absolute',
     textAlign: 'center',


     fontFamily: "Sc"
    }}>누적 포인트 내역</Text>
   </View>

   <View
    style={{
     backgroundColor: '#F2F2F2',
     height: '90%'
    }


    } >
    <View style={{
     backgroundColor: '#ffffff',
     height: 150,
     margin: 10,
     flexDirection: 'row',
     borderRadius: 5



    }}>

     <View style={{
      width: '100%',


     }}>


      <View style={{
       backgroundColor: '#FFE978',
       height: '70%',
       width: '25%',
       margin: 20,
       marginLeft: 20,
       borderRadius: 50,
       position: 'relative',
       flexDirection: 'row'


      }}>
       <Image
        style={{
         height: '100%',
         width: '100%',
         margin: 0,
         padding: 0,
         borderRadius: 30,

         //       borderRadius: '50%',
        }}
        source={{ uri: "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FAFzsZ%2FbtqI088tZW3%2FHCqq10x0OG9SoMdG2Bo3YK%2Fimg.jpg" }}
       />

       <View style={{
        width: 200,
        height: 100
       }}>


        <Text style={{
         fontSize: 20,
         fontFamily: "Sc",
         marginTop: 20,
         marginLeft: 50
        }}>
         {`${nickname}님`}
        </Text>
        <Text style={{
         fontSize: 15,
         fontFamily: "Sc",
         margin: 10,
         marginLeft: 50
        }}>
         {`누적포인트 ${len}pt`}
        </Text>
       </View>
      </View>



     </View >
    </View>

    <View style={{
     width: '100%',




    }}>
     <ScrollView>
      <View style={{

       width: '95%',
       height: 400,
       backgroundColor: 'black',
       margin: 10,
       flexDirection: 'row',

       // justifyContent: 'space-between',
       backgroundColor: '#F2F2F2',
       // justifyContent: 'flex-start',
       flexWrap: 'wrap',
       marginTop: 15
       //position: 'abso
      }}>


       {item.map((el, index) => {

        return <Point_inner data={el} key={index}></Point_inner>
       })}


      </View>

     </ScrollView>


    </View>



   </View >




  </View>


 )


}


point.navigationOptions = () => {
 return {
  header: () => false,
 };
};


export default point;
