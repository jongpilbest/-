
import { useSelector, useDispatch } from 'react-redux'
import React, { useState, useContext, useEffect } from "react"
import { View, TextInput, TouchableOpacity, Button, StyleSheet, Text, ScrollView } from "react-native"
//import { Context } from '../contextv/DetailContext'
import { authAction } from "../redux/auth";
//import { cos } from 'react-native-reanimated';
//import { counterActions } from "../store"
import { Ionicons } from '@expo/vector-icons';
import axios from "axios"

import Search_Compo from '../search_item/Search_Compo';
//import { useSelector, useDispatch } from 'react-redux'



const good_list = function ({ navigation }) {
 const token = useSelector((state) => state.token.token)
 console.log('여기서 확인')
 var item = navigation.getParam('data');
 var check = navigation.getParam('check');
 const name = function () {
  if (check == 1) {
   return '선호상품 상품 리스트'
  }
  if (check == 0) {
   return '비선호상품 상품 리스트'
  }
 }


 /*
 var item = [
  {
   "id": 4,
   "name": "핫식스 더킹 러쉬",
   "type": "음료류",
   "brand": "롯데칠성음료",
   "image": null
  },
  {
   "id": 5,
   "name": "핫식스팬시캔디",
   "type": "음료류",
   "brand": "롯데칠성음료",
   "image": null
  },
  {
   "id": 6,
   "name": "핫식스 더킹 파워",
   "type": "음료류",
   "brand": "롯데칠성음료",
   "image": null
  }
 ]
 */
 console.log(item)

 //const tr = useSelector((state) => state.auth.nickname)
 //const dispatch = useDispatch();

 const is_id = useSelector((state) => state.auth.nickname)


 // var userId = Math.floor(Math.random() * 10);
 // const { add_component, add_id, die } = useContext(Context)

 // const dispatch = useDispatch();
 // const set_id = useSelector((state) => state.id);
 //const push = () =>
 // const z = 1;

 const gopage = async function (elv) {





  await axios.post(`http://13.209.73.153:5000/product/custom`, {
   "name": elv

  },
   {
    headers: {
     'X-AUTH-TOKEN': token

    }
   }
  ).then((response) => {
   if (response) {
    console.log('확인해보자 ');
    console.log(response.data)



    console.log(mapv)
    // setcheck(response.data);
    //navigation.navigate('search_item_first', { data: response.data })
    //setUser(response);

    //navigation.navigate('Search_item_seconde', { name: elv, mapv: mapv, id: id_check })

   } else {
    alert("failed to ");
   }
  }).catch((err) => {
   console.log(err.message);
   console.log(err)
   console.log('?');
  });



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
     alignSelf: "flex-start",
     //color: '#7C7C7C',
     marginTop: 30,
     marginLeft: 70,
     position: 'absolute',


     fontFamily: "Nam-Bold"
    }}>{name()}</Text>
   </View>


   <View
    style={{
     backgroundColor: 'white',
     height: '90%'
    }


    } >
    <ScrollView
     style={{

      height: 1400,

     }}

    // showsVerticalScrollIndicator={false}

    // showsHorizontalScrollIndicator={false}
    >

     <View style={{
      flexDirection: 'row',

      height: 1300,
      // justifyContent: 'space-between',
      backgroundColor: 'white',
      // justifyContent: 'flex-start',
      flexWrap: 'wrap',
      marginTop: 15
     }}>



      {item.map((el, index) => {

       return (

        <Search_Compo key={index} touch={(vv) => gopage(vv)} vale={el}></Search_Compo>

       )
      })}
     </View>
    </ScrollView>

   </View >


  </View >

 )


}


good_list.navigationOptions = () => {
 return {
  header: () => false,
 };
};


export default good_list;
