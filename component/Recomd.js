

import React, { useState, useContext, useEffect, useRef } from "react"
import { View, Image, TextInput, TouchableOpacity, Button, StyleSheet, Text } from "react-native"
import first from "../signup/first";




const Recomd = function ({ show }) {
  var hd_Ar = []
  var firs = show.name.split(' ');
  var first = '';
  var second = '';

  if (firs.length >= 2) {
    for (var i = 0; i < 2; i++) {
      first += `${firs[i]} `;

    }
    for (var g = 2; g <= firs.length - 1; g++) {
      second += `${firs[g]} `;
    }

  }
  if (firs.length < 2) {
    first = firs[0];
    second = firs[1];
  }



  // var fins = fisr.toString()


  return (

    <View style={{
      width: 100,
      height: 140,
      borderRadius: 50,
      margin: 6,
      marginLeft: 10,
      borderColor: '#DDEEF2',
      borderWidth: 3,
      backgroundColor: 'white',
    }}>
      <View style={{
        width: 80,
        height: 80,
        margin: 2
      }}>
        <Image
          style={{
            height: '100%',
            width: '100%',
            margin: 5,
            padding: 0,
            borderRadius: 30,

            //       borderRadius: '50%',
          }}
          source={{ uri: show.image ? show.image : null }}

        />
        <Text style={
          {
            fontSize: 8,
            fontFamily: 'Nam-Bold',
            textAlign: 'center'
          }
        }>

          {first} </Text>
        <Text style={
          {
            fontSize: 8,
            fontFamily: 'Nam-Bold',
            textAlign: 'center'

          }
        }>

          {second} </Text>
      </View>



    </View >



  )
}

export default Recomd;
