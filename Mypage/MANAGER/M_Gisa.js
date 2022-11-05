

import React, { useState, useContext, useEffect } from "react"
import { View, TextInput, TouchableOpacity, Button, StyleSheet, Text } from "react-native"
//import { Context } from '../contextv/DetailContext'
import { Ionicons } from '@expo/vector-icons';
//import { cos } from 'react-native-reanimated';
//import { counterActions } from "../store"

import axios from "axios"


//import { useSelector, useDispatch } from 'react-redux'
import Search_Compo from '../../search_item/Search_Compo';






const M_Gisa = function ({ navigation, data }) {
 //const token = useSelector((state) => state.token.token)
 const [first, setfirst] = useState('');
 const [sceond, setsecond] = useState('');
 const [third, setthird] = useState('');
 const [five, setfive] = useState('');
 return (
  <View style={{
   backgroundColor: '#F2F2F2',
   width: '100%',
   height: '100%'
  }}>
   <View style={{
    width: '100%',
    height: '40%'
   }}>
    <Text style={{
     marginTop: '40%',
     textAlign: 'center'
     , fontSize: 30
    }}> 관리자 기사 등록</Text>
   </View>

   <View>

    <View style={{

     width: 300,
     height: 50,
     backgroundColor: '#FFE978',
     margin: 10,

     // alignContent: 'center',
     alignSelf: 'center',
     flexDirection: 'row'

    }} >
     <View style={{
      width: '40%',
      marginTop: 10
     }}>
      <Text style={{

       fontFamily: 'Sc',
       fontSize: 17,
       textAlign: 'center'
      }}>
       타이틀

      </Text>
     </View>
     <View style={{
      width: '50%',
      backgroundColor: 'white',
      height: 30,
      marginTop: 10
     }}>

      <TextInput
       style={{
        width: '86%',
        height: '100%',

        borderColor: 'transparent',


        padding: '10%',
        justifyContent: 'center',
        alignSelf: 'center',
        borderWidth: 1,
        backgroundColor: 'white',
        //padding: 20,
        fontSize: 10,
        fontFamily: "Sc"
       }}
       value={first}
       placeholder="타이틀을 입력해주세요"
       placeholderTextColor={'#545252'}
       autoCorrect={false}
       onChangeText={(ele) => setfirst(ele)}>

      </TextInput>


     </View>





    </View>

   </View>
   <View>
    <View style={{

     width: 300,
     height: 50,
     backgroundColor: '#FFE978',
     margin: 10,

     // alignContent: 'center',
     alignSelf: 'center',
     flexDirection: 'row'

    }} >
     <View style={{
      width: '40%',
      marginTop: 10
     }}>
      <Text style={{

       fontFamily: 'Sc',
       fontSize: 17,
       textAlign: 'center'
      }}>
       기사내용

      </Text>
     </View>
     <View style={{
      width: '50%',
      backgroundColor: 'white',
      height: 30,
      marginTop: 10
     }}>

      <TextInput
       style={{
        width: '86%',
        height: '13%',

        borderColor: 'transparent',

        marginTop: '17%',
        padding: 15,
        justifyContent: 'center',
        alignSelf: 'center',
        borderWidth: 1,
        backgroundColor: '#F2F2F2',
        //padding: 20,
        fontSize: 10,
        fontFamily: "Sc"
       }}
       value={sceond}
       placeholder="타이틀을 입력해주세요"
       placeholderTextColor={'#545252'}
       autoCorrect={false}
       onChangeText={(ele) => setsecond(ele)}>

      </TextInput>


     </View>





    </View>

   </View>

   <View>

    <View style={{

     width: 300,
     height: 50,
     backgroundColor: '#FFE978',
     margin: 10,

     // alignContent: 'center',
     alignSelf: 'center',
     flexDirection: 'row'

    }} >
     <View style={{
      width: '40%',
      marginTop: 10
     }}>
      <Text style={{

       fontFamily: 'Sc',
       fontSize: 17,
       textAlign: 'center'
      }}>
       uri

      </Text>
     </View>
     <View style={{
      width: '50%',
      backgroundColor: 'white',
      height: 30,
      marginTop: 10
     }}>

      <TextInput
       style={{
        width: '86%',
        height: '13%',

        borderColor: 'transparent',

        marginTop: '17%',
        padding: 15,
        justifyContent: 'center',
        alignSelf: 'center',
        borderWidth: 1,
        backgroundColor: '#F2F2F2',
        //padding: 20,
        fontSize: 10,
        fontFamily: "Sc"
       }}
       value={third}
       placeholder="타이틀을 입력해주세요"
       placeholderTextColor={'#545252'}
       autoCorrect={false}
       onChangeText={(ele) => setthird(ele)}>

      </TextInput>


     </View>





    </View>
   </View>





  </View >

 )


}


M_Gisa.navigationOptions = () => {
 return {
  header: () => false,
 };
};


export default M_Gisa;
