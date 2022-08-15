
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



const Danger_line = function ({ navigation, jhey, good_bo }) {
   const token = useSelector((state) => state.token.token)
   var first = good_bo[0];
   var second = good_bo[1]
   const nickname = useSelector((state) => state.owner.owner);
   console.log(jhey);
   const good = function (al) {
      var hey = 100 - al;

      return {
         positon: 'absolute',
         top: hey,
         backgroundColor: 'white',
         width: 20,
         height: 20,
         borderRadius: 30,
         margin: 15
      }

   }


   return (
      <View onLayout={event => {
         const layout = event.nativeEvent.layout;
         console.log(jhey)
         console.log('line')
         console.log('height:', layout.height);
         console.log('width:', layout.width);
         console.log('x:', layout.x);
         console.log('y:', layout.y);
      }} style={{

         width: 35,
         height: 130,
         marginLeft: -15,
         marginTop: 15,
         //backgroundColor: 'blue'


      }} >
         <Svg height="100%" width="100%">
            <Line

               // googg()
               x1="0"
               y1={first}
               x2="40"
               y2={second - 5}
               stroke="black"
               strokeWidth="0.7"></Line>
         </Svg>

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

export default Danger_line;
