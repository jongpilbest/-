
import { useSelector, useDispatch } from 'react-redux'
import React, { useState, useContext, useEffect } from "react"
import { View, TextInput, TouchableOpacity, Button, StyleSheet, Text } from "react-native"

const Point_inner = function ({ data }) {

 console.log(data);
 var hey = data.productname.split(' ');
 var data_he = data.date.split(' ');

 console.log('?')
 return (
  <View style={{

   width: 150,
   height: 150,
   backgroundColor: '#EAEAEA',
   margin: 10,
   borderRadius: 20,


  }} >
   <View style={{
    width: '100%',
    height: 55,
    margin: 20
   }}>
    {
     hey.map((el, index) => {

      return <Text key={index} style={{
       fontSize: 15,
       fontFamily: "Nam-Bold",
       color: '#727272'
      }}>
       {
        el
       }
      </Text>
     })

    }

   </View>
   <View style={{
    width: '100%',
    height: 50,
    flexDirection: 'row'

   }}>
    <Text style={{
     marginLeft: 10,
     marginTop: 20,
     fontSize: 12,
     fontFamily: "Nam-Bold",
     color: '#727272'

    }}>
     {data_he[0]}
    </Text>
    <Text style={{
     marginLeft: 15,

     fontSize: 30,
     fontFamily: "Nam-Bold",
     color: '#727272'

    }}>
     {`${data.point}pt`}
    </Text>


   </View>


  </View>




 )


}



export default Point_inner;
