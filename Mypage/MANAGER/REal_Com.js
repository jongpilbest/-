
import { useSelector, useDispatch } from 'react-redux'
import React, { useState, useContext, useEffect } from "react"
import { View, Pressable, TextInput, TouchableOpacity, Button, StyleSheet, Text } from "react-native"


const REal_Com = function ({ data }) {

 var [misu, setmisu] = useState("");
 var [name, setname] = useState("");

 var Change_name = [{

  "name": "이름"
 },
 { "brand": "브랜드" },
 { "product_image": "상품이미지" },
 { "info_image": "상세이미지" },
 { "barcode": "바코드" },
 { "enable": 0 },
 { "userId": "유저아이디" },
 { "userNickname": '유저닉네임' }
 ]
 useEffect(() => {
  Change_name.map((el) => {
   console.log(el)

   if (data[0] == Object.keys(el)) {

    setname(Object.values(el))

   }
  })
 }, [])



 console.log('여기로 가냐?')
 return (
  <View style={{

   width: 300,
   height: 50,
   backgroundColor: '#FFE978',
   margin: 10,
   borderRadius: 20,
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
     {name}

    </Text>
   </View>
   <View style={{
    width: '50%',
    backgroundColor: 'white',
    height: 30,
    marginTop: 10
   }}>

    <Text style={{

     fontFamily: 'Sc',
     textAlign: 'center',
     marginTop: 6
    }}>
     {data[1]}
    </Text>


   </View>





  </View>










 )
}




export default REal_Com;
