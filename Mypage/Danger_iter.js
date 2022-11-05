
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



const Danger_iter = function ({ text }) {
   const token = useSelector((state) => state.token.token)

   const nickname = useSelector((state) => state.owner.owner);
   var chek = `${text}%`

   return (
      <View style={{

         width: 40,
         marginLeft: 40,
         backgroundColor: 'white'
      }} >
         <Text style={{

            fontSize: 10,
            fontFamily: "Sc",
            marginTop: 10

         }}>
            {
               chek
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

export default Danger_iter;