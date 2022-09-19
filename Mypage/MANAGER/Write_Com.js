
import { useSelector, useDispatch } from 'react-redux'
import React, { useState, useContext, useEffect } from "react"
import { View, Pressable, TextInput, TouchableOpacity, Button, StyleSheet, Text } from "react-native"


const Write_Com = function ({ data }) {



 var [misu, setmisu] = useState("");

 return (
  <View style={{

   width: 300,
   height: 60,
   backgroundColor: '#DDEEF2',
   margin: 10,
   borderRadius: 20,
   // alignContent: 'center',
   alignSelf: 'center',
   flexDirection: 'row'

  }} >
   <View style={{
    width: '40%',
    marginTop: 20
   }}>
    <Text style={{
     fontFamily: 'Nam-Bold',
     fontSize: 17,
     textAlign: 'center'
    }}>

     {data}
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
      width: '100%',
      height: '100%',

      borderColor: 'transparent',
      margin: 10,
      justifyContent: 'center',
      alignSelf: 'center',
      backgroundColor: 'white',

      // padding: 20,
      fontSize: 15, fontFamily: "Nam-Bold"

     }}
     placeholder="입력해주세요"
     placeholderTextColor={'#B9B9B9'}
     value={misu}
     autoCorrect={false}
     //secureTextEntry={true}
     onChangeText={(ele) => setmisu(ele)}>

    </TextInput>



   </View>





  </View>










 )
}




export default Write_Com;
