
import { useSelector, useDispatch } from 'react-redux'
import React, { useState, useContext, useEffect } from "react"
import { View, TextInput, TouchableOpacity, ScrollView, Button, StyleSheet, Text } from "react-native"


import axios from "axios"
import { Ionicons } from '@expo/vector-icons';

//import { useSelector, useDispatch } from 'react-redux'


import Qna_Com from './Qna_Com';
const Qna = function ({ navigation, }) {
 // const token = useSelector((state) => state.token.token)
 // const arr = navigation.getParam('item');
 const arr =
  [
   {
    "title": "알레르기 정보를 수정하고 싶어요.",
    "content": "마이페이지의 상태수정에서 알레르기와 비선호 성분 정보를 수정할 수 있습니다."
   },
   {
    "title": "식품 등록 후 포인트 적립이 안돼요.",
    "content": "포인트는 관리자 확인 과정을 거쳐 적립되므로 식품 등록 후 포인트 적립까지 시간 지연이 있을 수 있습니다."
   },
   {
    "title": "위험 성분 분석이 무엇인가요?",
    "content": "등록한 비선호 식품들을 분석하여 회원님께 위험한 성분들을 위험도 퍼센트와 함께 제공해드리는 서비스입니다. 비선호 식품에는 섭취 후 알레르기 반응 등을 일으킨 식품들을 등록해야 해당 서비스를 정확도 높게 이용하실 수 있습니다."
   },
   {
    "title": "위험 성분 분석이 안돼요.",
    "content": "위험 성분 분석 서비스는 비선호 식품으로 등록한 식품의 수가 10개 이상이어야 이용 가능합니다. 마이페이지의 비선호 식품 확인을 통해 등록한 식품 수를 확인해주세요."
   }
  ]


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
     alignSelf: "flex-start",
     //color: '#7C7C7C',
     marginTop: 40,
     marginLeft: 70,
     position: 'absolute',


     fontFamily: "Nam-Bold"
    }}>FAQ</Text>
   </View>
   <View style={{
    width: '100%',
    height: 1000,
    marginTop: 30,
    backgroundColor: "#DDEEF2"

   }}>
    <ScrollView
     contentContainerStyle={{ flexGrow: 1 }}
     showsVerticalScrollIndicator={false}

     // showsHorizontalScrollIndicator={false}
     pagingEnabled={true}>
     <View style={{
      width: '100%',
      height: 1300,

     }}>

      {arr.map((el, index) => {
       return <Qna_Com item={el} key={index
       }></Qna_Com>

      })}

     </View>
    </ScrollView>

   </View>
  </View>
 )


}


Qna.navigationOptions = () => {
 return {
  header: () => false,
 };
};


export default Qna;
