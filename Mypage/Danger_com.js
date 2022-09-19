
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
         width: 30,
         height: 30,
         borderRadius: 30,
         margin: 16,
         marginLeft: 16,
         flexDirection: 'row'
      }

   }


   return (
      <View style={{
         width: 60,
         height: 220,
         borderRadius: 30,
         flexDirection: 'row'


      }}>

         <View
            style={good(jhey)}>

            <Text style={{

               fontSize: 9,
               textAlign: 'center',
               fontFamily: "Nam-Bold"
               , margin: 8,
            }}>
               {jhey}
            </Text>

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
