
import React, { useState, useContext, useEffect } from "react"
import { View, ScrollView, TextInput, TouchableOpacity, Image, Button, StyleSheet, Text } from "react-native"
import { Context } from "../../contextv/DetailContext"
import Ms from "../../signup/Ms"
import { LogBox } from "react-native";

LogBox.ignoreLogs(["EventEmitter.removeListener"]);
import SeachBar from "../../signup/SearchBar"
var chekc = -1;
var chek = 0;
import Componn from "../../signup/Componn"
const Change_State = function ({ navigation }) {

 console.log(navigation)
 /*
 useEffect(() => {
  //navigation.navigate('Mypage_main')?.navigationoptions({ tabBarStyle: { display: "none" } })

  return () => navigation.navigate('Mypage_main').navigationoptions({ tabBarStyle: { display: "none" } });
 }, [navigation]);
*/

 const [MS_good, misu] = Ms();
 var mos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
 const check_most = function (el) {

  if (el == "") {
   chekc = -1;
   chek = mos;

   text_input = 0;

   return;

  }

  console.log(mos)
  chek = mos.filter(evlv => {
   return evlv.kr == el
  })
  //console.log(`chek ${chek}`)


  if (chek.length > 0) {
   chekc = 11;
   text_input = 33;
  }
  else if (chek.length == 0) {
   chekc = 0
   console.log('ERROR CHECK')
   text_input = 1;
  }



  return;




 }

 return (
  <View style={{
   backgroundColor: 'white'
  }}>
   <Button onPress={() => {
    navigation.navigate('Mypage_main')
   }}>

   </Button>

   <View style={{
    marginTop: '10%',
    marginLeft: '3%'
   }}>
    <Text style={{
     marginLeft: 13,
    }}>
     <Text style={{
      fontSize: 22,
      color: '#71A6E3',

      fontWeight: 'bold'
     }}>
      알레르기
     </Text>
     <Text style={{
      fontSize: 22,
      color: '#545252',
      marginLeft: 20,

      fontWeight: 'bold'
     }}>
      성분수정
     </Text>
    </Text>
    <Text style={{
     fontSize: 13,
     color: '#545252',
     marginLeft: 22,
     marginTop: 10,

     fontWeight: 'bold'
    }}>
     마이페이지에서 변경 가능합니다.

    </Text>
   </View>

   <SeachBar onfinsh={(vl) => {
    MS_good()

    check_most(vl);
   }} >


   </SeachBar>

   <ScrollView style={styles.border}>



    <View style={styles.frined}>



     {


      chekc == 11 && check_good() && < Componn vale={chek[0]}></Componn>

     }
     {
      chekc == -1 && mos.map((el, index) => {
       return < Componn key={index} vale={el}></Componn>
      })

     }




    </View>



   </ScrollView>


  </View>

 )
}


const styles = StyleSheet.create({


 border: {
  width: '90%',
  height: 800,

  borderWidth: 3,
  margin: 10,
  borderColor: 'transparent'


 },
 frined: {

  flexDirection: 'row',

  height: 600,
  // justifyContent: 'space-between',
  backgroundColor: 'white',
  // justifyContent: 'flex-start',
  flexWrap: 'wrap'
 }




})

export default Change_State;

