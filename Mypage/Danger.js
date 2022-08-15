
import { useSelector, useDispatch } from 'react-redux'
import React, { useState, useContext, useEffect } from "react"
import { View, TextInput, TouchableOpacity, Button, StyleSheet, Text } from "react-native"
//import { Context } from '../contextv/DetailContext'
import { authAction } from "../redux/auth";
//import { cos } from 'react-native-reanimated';
//import { counterActions } from "../store"
import Danger_line from './Danger_line';
import axios from "axios"
import Danger_com from './Danger_com';
import Search_Compo from '../search_item/Search_Compo';
import { ScrollView } from 'react-native-gesture-handler';
//import { useSelector, useDispatch } from 'react-redux'
import Danger_Text from './Danger_text';
import Danger_iter from './Danger_iter';
import Danger_your from './Danger_your';


const Danger = function ({ navigation }) {
   const token = useSelector((state) => state.token.token)

   const nickname = useSelector((state) => state.owner.owner);

   var gey_fo = ['지방', '소금', '트랜스지방', '탄수화물', '포화지방산', '단백질', '설탕']
   var gey = [44, 60, 14, 20, 8, 50, 10];

   const check_line = function () {

      for (var i = 0; i < gey.length - 1; i += 2) {

         <Danger_com key={index} jhey={[gey[i], gey[i + 1]]} ></Danger_com>

      }

   }

   return (

      <View style={{
         backgroundColor: '#ffffff'
      }}>


         <View style={{
            backgroundColor: '#F4F4F4',
            height: 80,
            width: '100%'


            //eight: '35%'
         }}>

            <Text style={{
               fontSize: 20,
               alignSelf: "center",
               textAlign: 'center',
               //color: '#7C7C7C',
               marginTop: 30,
               marginLeft: 10,
               position: 'absolute',


               fontFamily: "Nam-Bold"
            }}>위험 성분 분석</Text>
            <Text style={{
               alignSelf: "center",
               textAlign: 'center',
               marginTop: 50,
               marginLeft: 10,
               position: 'absolute',

            }}>
               {`${nickname}님`}

            </Text>
         </View>

         <View style={{

            width: '95%',
            height: 240,
            marginLeft: 10,
            marginTop: 20,
            backgroundColor: "#EAEAEA",
            borderRadius: 10,

         }}>
            <View style={{

               width: '100%',
               height: 100,
               marginLeft: 0,
               //backgroundColor: 'pink',
               flexDirection: 'row',



            }}>


               {gey.map((el, index) => {

                  if (index == 6) {
                     return;
                  }
                  return <Danger_com key_r={index} key={index} heck={gey} jhey={el} ></Danger_com>

               })}



            </View>
            <View style={{

               width: '95%',
               height: 90,

               marginTop: 50,
               marginRight: 10,
               marginLeft: 10

            }}>
               <View style={{

                  width: '100%',
                  height: 30,

                  flexDirection: 'row'
               }}>
                  {gey.map((el, index) => {


                     return <Danger_Text key={index} text={el}></Danger_Text>



                  })}


               </View>
               <View style={{

                  width: '100%',
                  height: 40,
                  backgroundColor: 'white',
                  borderRadius: 10,
                  flexDirection: 'row'
               }}>
                  {gey_fo.map((el, index) => {


                     return <Danger_Text key={index} text={el}></Danger_Text>



                  })}



               </View>

            </View>






         </View >
         <View style={{

            height: 500,
            width: '100%',
            margin: 10
         }}>

            <ScrollView>
               <View style={{
                  width: '95%',
                  height: 700,

               }}>

                  <Danger_your></Danger_your>
               </View>

            </ScrollView>
         </View>



      </View >





   )


}


Danger.navigationOptions = () => {
   return {
      header: () => false,
   };
};


export default Danger;
