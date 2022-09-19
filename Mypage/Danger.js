
import { useSelector, useDispatch } from 'react-redux'
import React, { useState, useContext, useEffect } from "react"
import { View, TextInput, TouchableOpacity, Button, StyleSheet, Text } from "react-native"

import Danger_line from './Danger_line';
import { Ionicons } from '@expo/vector-icons';

import Danger_com from './Danger_com';

import { ScrollView } from 'react-native-gesture-handler';

import Danger_Text from './Danger_text';
import Danger_iter from './Danger_iter';
import Danger_your from './Danger_your';
import Danger_fin from './Danger_fin';


const Danger = function ({ navigation }) {
   const token = useSelector((state) => state.token.token)
   var item = navigation.getParam('data');
   var full = [];


   const nickname = useSelector((state) => state.owner.owner);
   console.log(' 여기서 확인하기 ')

   var fir = navigation.getParam('gey_fo');

   console.log(fir)

   var sec = navigation.getParam('gey');
   for (var misu = 0; misu < fir.length; misu++) {

      var at = {
         name: sec[misu],
         value: fir[misu]
      }

      full.push(at);
   }

   full.sort(function (a, b) {
      if (a.value > b.value) {
         return -1;
      }
      if (a.value < b.value) {
         return +1;
      }
      // a must be equal to b
      return 0;
   });
   console.log('상위 순위')
   var final = full.slice(0, 3);
   console.log(final)

   var alee = [

      {
         name: 'wheat',
         check: 0,
         kr: '밀가루'
      },

      {
         name: 'milk',
         check: 0,
         kr: '우유'

      }
      , {
         name: 'buckwheat',
         check: 0,
         kr: '메밀'

      },

      {
         name: 'soybean',
         check: 0,
         kr: '콩'

      }
      , {
         name: 'mackerel',
         check: 0,
         kr: '고등어'


      }
      , {
         name: 'crab',
         check: 0,
         kr: '게'


      }, {
         name: 'shrimp',
         check: 0,
         kr: '새우'

      }, {
         name: 'pork',
         check: 0,
         kr: '돼지 고기'

      }, {
         name: 'peach',
         check: 0,
         kr: '복숭아'

      }, {
         name: 'tomato',
         check: 0,
         kr: '토마토'

      }, {
         name: 'walnut',
         check: 0,
         kr: '땅콩'
      }, {
         name: 'chicken',
         check: 0,
         kr: '닭'

      }, {
         name: 'beef',
         check: 0,
         kr: '쇠고기'

      }, {
         name: 'squid',
         check: 0,
         kr: '오징어'

      }, {
         name: 'shellfish',
         check: 0,
         kr: '조개'


      },
      {
         name: 'egg',
         check: 0,
         kr: '달걀'


      }]
   var kr = ['콩', '닭', '달걀', '우유', '밀가루', '쇠고기', '토마토', '돼지고기'];






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
            <TouchableOpacity onPress={() => {


               navigation.pop();
            }}>
               <Ionicons style={{

                  marginLeft: 15,
                  marginTop: 20,
               }} name="arrow-back-circle" size={50} color="black" />

            </TouchableOpacity>

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
         <ScrollView
            showsHorizontalScrollIndicator={true}
            horizontal={true}>
            <View style={{

               width: '100%',
               height: 190,
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



                  {fir.map((el, index) => {

                     if (index == 8) {

                        return;

                     }
                     else if (index < 8) {
                        return <Danger_com key_r={index} key={index} heck={fir} jhey={el} ></Danger_com>
                     }


                  })}


                  {

                     <Danger_fin jhey={fir[fir.length - 1]}></Danger_fin>
                  }






               </View>


               <View style={{

                  width: '100%',
                  height: 90,

                  marginTop: 30,
                  marginRight: 10,
                  marginLeft: 10

               }}>


                  <View style={{

                     width: '100%',
                     height: 40,
                     backgroundColor: 'white',
                     borderRadius: 10,
                     flexDirection: 'row',
                     marginTop: 10,
                  }}>
                     {sec.map((el, index) => {


                        return <Danger_Text key={index} text={el}></Danger_Text>



                     })}




                  </View>


               </View>






            </View >
         </ScrollView>
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
                  {final.map((el, index) => {


                     return <Danger_your hey={el} key={index}></Danger_your>



                  })}


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
