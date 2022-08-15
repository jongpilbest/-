
import { useSelector, useDispatch } from 'react-redux'
import React, { useState, useContext, useEffect } from "react"
import { View, TextInput, TouchableOpacity, Button, StyleSheet, Text } from "react-native"
//import { Context } from '../contextv/DetailContext'
import { authAction } from "../redux/auth";
//import { cos } from 'react-native-reanimated';
//import { counterActions } from "../store"

import axios from "axios"

import Search_Compo from '../search_item/Search_Compo';
import { ScrollView } from 'react-native-gesture-handler';
//import { useSelector, useDispatch } from 'react-redux'
import Danger_line from './Danger_line';


const Danger_com = function ({ navigation, key_r, heck, jhey }) {
   const token = useSelector((state) => state.token.token)

   const nickname = useSelector((state) => state.owner.owner);
   console.log('체크시떼')
   console.log(heck[key_r], heck[key_r + 1]);
   var good_bo = [100 - heck[key_r] + 15, 100 - heck[key_r + 1] + 15];
   const good = function (al) {
      var hey = 100 - al;

      return {
         positon: 'absolute',
         top: hey,
         backgroundColor: 'white',
         width: 21,
         height: 21,
         borderRadius: 30,
         margin: 15,
         flexDirection: 'row'
      }

   }


   return (
      <View style={{
         width: 50,
         height: 220,
         borderRadius: 30,
         flexDirection: 'row'


      }}>


         <View onLayout={event => {
            const layout = event.nativeEvent.layout;
            console.log(jhey)
            console.log(' 찾아라')
            console.log('height:', layout.height);
            console.log('width:', layout.width);
            console.log('x:', layout.x);
            console.log('y:', layout.y);
         }} style={good(jhey)}>



         </View>
         <Danger_line jhey={jhey} good_bo={good_bo}></Danger_line>
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

export default Danger_com;
