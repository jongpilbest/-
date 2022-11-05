

import React, { useState, useContext, useEffect, useRef } from "react"
import { View, Image, TextInput, TouchableOpacity, Button, StyleSheet, Text } from "react-native"

import { useSelector, useDispatch } from 'react-redux'

import { changeAction } from "../../redux/change";
//import { Context } from "../contextv/DetailContext";

var hey = -1;




const Change_ingre_Com = function ({ vale, gogo }) {
 //console.log(`vale ${vale}`)
 var [num, setnum] = useState(0);


 const allergy_name = useSelector((state) => state.change.ingredient)
 const dispatch = useDispatch();
 const good_list = useSelector((state) => state.change.array_list_2);
 const original_list = useSelector((state) => state.change.ingre_original);
 const check_change_arr = useSelector((state) => state.change.change_list)
 // console.log('ARRAU& 리스트')

 const tr = original_list.includes(vale.name);
 //var imagepath = require(`${vale.image}`)

 // let imagepath = require( vale.image )
 // const { check_corrct } = useContext(Context);

 const onpress = () => {
  console.log('check')
  //console.log(is_id)
  setnum((pre) => pre + 1);
  //console.log('ㅇㅅㅇ ')
  console.log(num)

  if (tr == true && num == 0) {
   var nma = '';
   for (var i = 0; i < allergy_name.length; i++) {
    if (vale.kr == allergy_name[i].kr) {
     nma = allergy_name[i].name;
     break;
    }

   }
   console.log('여기로 가?', good_list, nma)
   dispatch(changeAction.setingredient_0(nma));
   return;

  }


  if (num == 0) {

   console.log('처음누름?')

   var nma = '';

   for (var i = 0; i < allergy_name.length; i++) {
    if (vale.kr == allergy_name[i].kr) {
     nma = allergy_name[i].name;
     break;
    }

   }
   dispatch(changeAction.setingredient_1(nma))
   //dispatch(changeAction.setallergy_0(nma))


  }
  else if (num == 1) {
   console.log('두번째')
   //  console.log(vale.kr)

   var nmav = '';

   for (var i = 0; i < allergy_name.length; i++) {
    if (vale.kr == allergy_name[i].kr) {
     nmav = allergy_name[i].name;
     break;
    }

   }
   //dispatch(changeAction.setallergy_1(nmav))
   dispatch(changeAction.setingredient_1(nmav))

   // setnum(0);
  }
 };

 const goto = function () {


  if (num == 2) {
   console.log('올로')


   setnum(0)

   return (
    {
     backgroundColor: '#ffffff',
     width: 89,
     height: 100,
     marginTop: 10,
     marginLeft: 20,
     padding: 0,
     borderRadius: 20,

     flexDirection: "row",

    }
   )
  }
  else if (tr == true && num == 1) {



   return (
    {

     backgroundColor: '#ffffff',
     width: 89,
     height: 100,
     marginTop: 10,
     marginLeft: 20,
     padding: 0,
     borderRadius: 20,

     flexDirection: "row",

    }
   )

  }

  else if (num == 1) {
   console.log('일로왈')
   //console.log(vale.kr)
   //setfirst((pre) => pre + 1)
   console.log(good_list)



   return (
    {

     backgroundColor: '#FF4444',
     width: 89,
     height: 100,
     marginTop: 10,
     marginLeft: 20,
     padding: 0,
     borderRadius: 20,

     flexDirection: "row",

    }
   )
  }


  else if (tr == true) {


   return (

    {

     backgroundColor: '#FDFFB4',
     width: 89,
     height: 100,
     marginTop: 10,
     marginLeft: 20,
     padding: 0,
     borderRadius: 20,
     flexDirection: "row",

    }
   )
  }




  else if (num == 0) {
   //check_corrct(vale.name, 0);
   return (
    {

     backgroundColor: '#ffffff',
     width: 89,
     height: 100,
     marginTop: 10,
     marginLeft: 20,
     padding: 0,
     borderRadius: 20,
     flexDirection: "row",
     // flexWrap: "wrap",

    }
   )
  }





 }


 return (




  <TouchableOpacity
   onPress={() => onpress()}>
   <View style={goto()}

   >
    <View style={{
     width: '100%',
     height: '80%',

     justifyContent: 'center',


    }}>

     <Text style={{
      fontSize: 14,
      color: '#545252',
      fontWeight: 'bold',
      marginLeft: 4,
      marginTop: 0,

      fontFamily: 'Sc',



     }}>  {vale.kr}</Text>

    </View>




   </View >

  </TouchableOpacity>


 )
}

const styles = StyleSheet.create({


 border: {

  backgroundColor: 'white',
  width: 80,
  height: 100,
  marginTop: 10,
  marginLeft: 30,




 },




})



export default Change_ingre_Com