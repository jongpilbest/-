


import React, { useState, useContext, useEffect, useRef } from "react"
import { View, TextInput, TouchableOpacity, Button, StyleSheet, Text } from "react-native"
import { authAction } from "../redux/auth";
//import { Context } from "../contextv/DetailContext";
import { useSelector, useDispatch } from 'react-redux'

//import { authAction } from "../redux/auth";
var hey = -1;




const Componcopy = function ({ vale }) {



 var [num, setnum] = useState(0);




 const onpress = () => setnum((pre) => pre + 1);


 const goto = function () {

  if (num == 2) {


   // check_one(1, vale.name);   context 사용해서 여기에서 바꾸는 걸로 한다.
   // 이때 check 를 바꿔야 하니 매개별수를 같이 넣어서 .. = 이름+ 매개변수 
   console.log('ERROR MISU CHECK')
   //vale.check = 0;
   console.log(vale)

   setnum(0);
   return (
    {
     backgroundColor: '#D2D2D2',
     width: 89,
     height: 100,
     marginTop: 10,
     marginLeft: 30,
     padding: 0,
     borderRadius: 20,

     flexDirection: "row",

    }
   )
  }

  else if (num == 1) {
   console.log('일로왈')

   if (tr == true) {

    setnum(2);
    //return;

   }

   dispatch(authAction.setallergy_1(vale.name))



   return (
    {

     backgroundColor: '#D2E6FF',
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


  return (



   <TouchableOpacity
    onPress={() => onpress()}>
    <View style={goto()}

    >
     <Text>  {vale.name}</Text>



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

}

export default Componcopy