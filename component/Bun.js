

import React, { useState, useContext, useEffect } from "react"
import { View, TextInput, TouchableOpacity, Button, StyleSheet, ScrollView, Text, Image } from "react-native"
//import { Context } from '../contextv/DetailContext'
import { Ionicons } from '@expo/vector-icons';
//import { cos } from 'react-native-reanimated';
//import { counterActions } from "../store"

import axios from "axios"


//import Search_Compo from '../../search_item/Search_Compo';



import Bun_Com from "./Bun_Com";
const Bun = function ({ navigation }) {
 //const token = useSelector((state) => state.token.token)
 console.log('내역확인')


 var item = [{
  name: '단백질',
  good: '단백질은 생명 유지에 필수적인 영양소로서 효소, 호르몬, 항체 등의 주요 생체 기능을 수행하고 근육 등의 체조직을 구성합니다. 단백질은 살아있는 세포에서 수분 다음으로 풍부하게 존재하므로 식이를 통해 체내에서 필요한 단백질을 규칙적으로 공급해주는 일로 건강 유지에 필수적입니다.',
  bad: '성장과 체격 유지를 해줍니다.효소와 호르몬을 생성합니다.항체를 생성합니다.체액의 유지와 전해질 균형유지에 도움을 줍니다.산-염기 균형유지에 도움을 줍니다.에너지를 생성합니다.체내에서 영양소 등 여러 물질을 운반합니다.'
 },

 {
  name: '무기질',
  good: '무기질은 식품을 완전히 연소시켰을 때 재로 남는 것을 말하며 회분 또는 광물질이라고도 합니다. 인체 체중의 약 4%가량을 무기질이 차지하고 있습니다. 이와 같이 극소량이지만 조직의 구성성분으로 필요하며 6대 영양소중의 하나로서 영양상 불가결한 물질입니다.',
  bad: '무기질은 신체의 각 부분을 형성합니다.신체를 구성하는 많은 무기질 중에서 칼슘과 인은 뼈와 치아 같은 경조직(硬組織)을 구성하는데 중요합니다.뼈와 치아의 칼슘, 인, 불소 등의 농도는 경조직의 발달에 많은 영향을 줍니다.또한 호르몬, 효소의 구성성분이기도 합니다'
 },
 {
  name: '탄수화물',
  good: '탄수화물은 우리 식생활에서 가장 많은 양을 차지하는 열량식품으로서 지질, 단백질과 같이 3대 영양소 중의 하나입니다.',
  bad: '탄수화물은 1g에 4kcal의 열량을 냅니다.신체활동을 위해서는 에너지가 끊임없이 요구됩니다. 중추신경계는 에너지 급원으로 오직 포도당만을 사용하므로 중추신경계의 원활한 작용을 위해서는 탄수화물은 꼭 있어야 하고 지방도 에너지 급원으로 쓰여지긴 하지만 이때에도 탄수화물이 필요합니다.'
 },
 {
  name: '지방',
  good: '지방질이라 함은 지방(fat), 기름(oil) 및 이들의 유도체의 총칭으로 당질, 단백질과 더불어 생체의 주요한 성분으로서 영양상 필수적인 물질입니다. 지방질은 식물의 종실, 동물의 지방조직, 내장ㆍ골격 등에서 얻을 수 있고, 화학적으로는 지방산과 글리세롤의 에스테르를 말합니다.',
  bad: '저장에너지의 주요형태입니다.근육이 일하는데 필요한 에너지를 공급합니다.질병시나 식품섭취가 부족할 때 체내 비상용에너지의 원료입니다.내장장기를 보호합니다.피하지방은 환경온도변화로부터 체내를 보호합니다.세포막의 주요성분입니다.체내에서 필요한 다른 물질로 전환될 수 있습니다.'
 },
 {
  name: '비타민',
  good: ' 장점1',
  bad: '단점2'
 },


 ]
 return (
  <View style={{
   backgroundColor: '#F2F2F2',
   width: '100%',
   height: '100%'
  }}>


   <View style={{
    backgroundColor: '#F2F2F2',
    height: 80,
    width: '100%'


    //eight: '35%'
   }}>

    <TouchableOpacity onPress={() => {

     console.log('엥')
     navigation.pop()
    }}>
     <Ionicons style={{

      marginLeft: 15,
      marginTop: 20,
     }} name="arrow-back-circle" size={50} color="black" />

    </TouchableOpacity>


    <Text style={{
     fontSize: 20,


     color: '#545252',
     marginTop: 40,
     marginLeft: 70,
     position: 'absolute',


     fontFamily: "Sc"
    }}>성분정보</Text>
   </View>

   <View
    style={{
     backgroundColor: '#F2F2F2',
     height: '95%'
    }


    } >








    <View style={{
     width: '100%',
     height: '100%'



    }}>

     <View style={{

      width: '95%',
      height: 400,
      backgroundColor: 'black',
      margin: 10,
      flexDirection: 'row',

      // justifyContent: 'space-between',
      backgroundColor: '#F2F2F2',
      // justifyContent: 'flex-start',
      flexWrap: 'wrap',
      marginTop: 15
      //position: 'abso
     }}>


      {item.map((el, index) => {

       return <Bun_Com data={el} key={el.name}></Bun_Com>
      })}


     </View>




    </View>



   </View >




  </View>


 )


}


Bun.navigationOptions = () => {
 return {
  header: () => false,
 };
};


export default Bun;
