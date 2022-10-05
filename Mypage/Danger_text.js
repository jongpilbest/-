
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



const Danger_Text = function ({ text }) {
   const token = useSelector((state) => state.token.token)

   const nickname = useSelector((state) => state.owner.owner);
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

         kr: '대두'

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
         name: 'peanut',

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
      if (text == al[i].name) {
         your = `  ${al[i].kr} `;
         break;
      }
   }

   return (
      <View style={{

         width: 60,
         marginLefta: 8
      }} >
         <Text style={{

            fontSize: 10,
            fontFamily: "Nam-Bold",
            marginTop: 10

         }}>
            {
               your
            }

         </Text>


      </View>




   )


}

/*
good_list.navigationOptions = () => {
 return {
    header: () => false,
 };
};
   */

export default Danger_Text;
