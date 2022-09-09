
import { useSelector, useDispatch } from 'react-redux'
import React, { useState, useContext, useEffect } from "react"
import { View, TextInput, TouchableOpacity, Button, StyleSheet, Text } from "react-native"

import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';

import Ranking_Com from './Ranking_Com';

const Ranking = function ({ navigation }) {
 const token = useSelector((state) => state.token.token);


 useEffect(() => {
  axios.get("http://13.209.73.153:5000/mypage/ranking",
   {
    headers: {
     'X-AUTH-TOKEN': token,


    }
   }
  ).then((response) => {
   if (response) {

    var data = response.data


    console.log(data)



    //dispatch(changeAction.setallergy_1(vale.kr))
    //setUser(response);
   } else {
    alert("failed to ");
   }
  }).catch((err) => {
   console.log(err.message);
   console.log(err)

   console.log('랭킹 오류 ');
  });

 }, [])



 var h = [1, 2, 3, 4, 5, 6]


 return (
  <View style={{
   backgroundColor: '#DDEEF2',
   height: 2000,
  }}>


   <View style={{
    backgroundColor: '#F4F4F4',
    height: 80,
    width: '100%'


    //eight: '35%'
   }}>


    <Text style={{
     fontSize: 20,
     alignSelf: "flex-start",
     //color: '#7C7C7C',
     marginTop: 30,
     marginLeft: 20,
     position: 'absolute',


     fontFamily: "Nam-Bold"
    }}>랭킹순위</Text>
   </View>
   <View style={{
    width: '100%',
    height: 470
   }}>



    <ScrollView
     showsVerticalScrollIndicator={false}
     // showsVerticalScrollIndicator={false}
     showsHorizontalScrollIndicator={true}>

     <View style={{
      width: '100%',
      height: 500,
      backgroundColor: '#DDEEF2',
      marginTop: 20
     }}>

      {
       h.map((el, index) => {
        return <Ranking_Com t={el} key={index}></Ranking_Com>
       })
      }




     </View>
    </ScrollView>
   </View>
   <View style={{
    width: 330,
    height: 60,
    marginLeft: 20,
    borderRadius: 10,
    backgroundColor: '#BDBDBD'
   }}>

   </View>


  </View>

 )


}
Ranking.navigationOptions = () => {
 return {
  header: () => false,
 };
};

const style = StyleSheet.create({
 text: {
  width: 200,
  height: 40,
  borderColor: "black"
 },

 border: {
  width: '85%',
  height: 50,
  backgroundColor: 'white',
  borderColor: 'white',

  borderWidth: 3,
  margin: 10,
  borderRadius: 10,
  marginLeft: '3%',
  marginLeft: 15,
  marginTop: '5%',



 }

})

export default Ranking;
