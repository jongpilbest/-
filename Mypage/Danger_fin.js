
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


const Danger_fin = function ({ navigation, jhey }) {
   const token = useSelector((state) => state.token.token)

   console.log('name', jhey)
   const good = function (al) {
      var hey = 100 - al;

      return {
         positon: 'absolute',
         top: hey,
         backgroundColor: '#545252',
         width: 38,
         height: 38,
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


         <View onLayout={event => {
            const layout = event.nativeEvent.layout;
            console.log(jhey)
            console.log(' 찾아라')
            console.log('height:', layout.height);
            console.log('width:', layout.width);
            console.log('x:', layout.x);
            console.log('y:', layout.y);
         }} style={good(jhey)}>

            <Text style={{


               fontSize: 12,
               textAlign: 'center',
               fontFamily: "Sc"
               , margin: 8,
               justifyContent: 'center',
               alignSelf: 'center',
               color: 'white'
            }}>
               {jhey + '%'}
            </Text>

         </View>

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

export default Danger_fin;
