

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
     alignSelf: "flex-start",
     //color: '#7C7C7C',
     marginTop: 40,
     marginLeft: 70,
     position: 'absolute',


     fontFamily: "Nam-Bold"
    }}>누적 포인트 내역</Text>
   </View>

   <View
    style={{
     backgroundColor: 'white',
     height: '90%'
    }


    } >
    <View style={{
     backgroundColor: '#DDEEF2',
     height: 150,
     margin: 10,
     flexDirection: 'row',
     borderRadius: 20


    }}>

     <View style={{
      width: '100%',


     }}>


      <View style={{
       backgroundColor: 'white',
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
        source={{ uri: ' https://mblogthumb-phinf.pstatic.net/20161008_248/sasa9508_1475929220263OMzsO_JPEG/2.jpg?type=w2' }}
       />

       <View style={{
        width: 200,
        height: 100
       }}>


        <Text style={{
         fontSize: 20,
         fontFamily: "Nam-Bold",
         marginTop: 20,
         marginLeft: 50
        }}>
         {`${nickname}님`}
        </Text>
        <Text style={{
         fontSize: 15,
         fontFamily: "Nam-Bold",
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
       backgroundColor: 'white',
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
