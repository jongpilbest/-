
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


 return (
  <View style={{

   width: 40,
   marginLeft: 10
  }} >
   <Text style={{

    fontSize: 11,
    fontFamily: "Nam-Bold",
    marginTop: 10

   }}>
    {
     text
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
