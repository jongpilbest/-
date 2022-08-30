
import { useSelector, useDispatch } from 'react-redux'
import React, { useState, useContext, useEffect } from "react"
import { View, TextInput, TouchableOpacity, Button, StyleSheet, Text } from "react-native"
//import { Context } from '../contextv/DetailContext'
import { authAction } from "../redux/auth";
//import { cos } from 'react-native-reanimated';
//import { counterActions } from "../store"
import Svg, { Line } from 'react-native-svg';
import axios from "axios"

import Search_Compo from '../search_item/Search_Compo';
import { ScrollView } from 'react-native-gesture-handler';
//import { useSelector, useDispatch } from 'react-redux'

import { AntDesign } from '@expo/vector-icons';

const Danger_your = function ({ text, hey }) {
 const token = useSelector((state) => state.token.token)
 console.log(hey)
 const nickname = useSelector((state) => state.owner.owner);
 var chek = `${hey.value}%`
 var your = '';
 var al = [

  {
   name: 'wheat',

   kr: '밀가루'
  },

  {
   name: 'milk',

   kr: '우유'

  }
  , {
   name: 'buckwheat',

   kr: '메밀'

  },

  {
   name: 'soybean',

   kr: '콩'

  }
  , {
   name: 'mackerel',

   kr: '고등어'


  }
  , {
   name: 'crab',

   kr: '게'


  }, {
   name: 'shrimp',

   kr: '새우'

  }, {
   name: 'pork',

   kr: '돼지 고기'

  }, {
   name: 'peach',

   kr: '복숭아'

  }, {
   name: 'tomato',

   kr: '토마토'

  }, {
   name: 'walnut',

   kr: '땅콩'
  }, {
   name: 'chicken',

   kr: '닭'

  }, {
   name: 'beef',

   kr: '쇠고기'

  }, {
   name: 'squid',

   kr: '오징어'

  }, {
   name: 'shellfish',

   kr: '조개'


  },
  {
   name: 'egg',
   check: 0,
   kr: '달걀'


  }]
 for (var i = 0; i < al.length; i++) {
  if (hey.name == al[i].name) {
   your = `  ${al[i].kr} `;
   break;
  }
 }
 return (
  <View style={{

   width: '95%',
   height: 130,
   backgroundColor: '#DDEEF2',
   marginTop: 20,
   borderRadius: 50,
   marginLeft: 10,

  }} >
   <View style={{
    width: 80,
    height: 80,
    borderRadius: '50%',
    backgroundColor: 'white',
    marginTop: 15,
    marginLeft: 15,
    flexDirection: 'column'


   }}>
    <AntDesign name="warning" size={40} style={{
     margin: 20
    }} color="black" />

   </View>
   <View style={{
    width: 50,
    height: 30,

    marginLeft: 30,
    marginTop: 5

   }}>
    <Text style={{

     fontSize: 13,
     fontFamily: 'Nam-Bold',
     marginLeft: 15
    }}>
     {chek}
    </Text>

   </View>
   <View style={{
    width: '63%',
    height: 100,

    position: 'absolute',
    top: 20,
    left: 100
   }}>
    <Text style={{

     fontFamily: 'Nam-Bold',
     fontSize: 15,
     marginTop: 30
    }}>
     {`${nickname}님은${your} 성분을 주의하세요`}
    </Text>

   </View>



  </View>




 )


}



export default Danger_your;
