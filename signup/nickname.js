


import React, { useState, useContext, useEffect } from "react"
import { View, TextInput, TouchableOpacity, Button, StyleSheet, Text } from "react-native"
import { Context } from '../contextv/DetailContext'


import axios from "axios"


const nickname = function ({ navigation }) {

  const [id, setid] = useState("");


  // var userId = Math.floor(Math.random() * 10);
  const { add_nickname } = useContext(Context)
  const z = 1;

  var bol_check = 0;

  const check_id = function () {
    console.log('?HI')

    axios.get(`http://192.168.15.137:5000/auth/checkNickname/${id}`, {
      nickname: id
    })
      .then((response) => {
        if (response) {
          console.log('?');

          console.log(response.data)
          bol_check = response.data

          //console.log(response.data);
          //setUser(response);
        } else {
          alert("failed to ");
        }
      }).catch((err) => {
        console.log(err.message);
        console.log(err)
        console.log('?');
      });



  }

  const checkcorrct = function () {



    if (bol_check == true) {
      return false


    }
    return true;
  }

  const go_go_opacity = function () {

    if (id.length == 0) {
      return { opacity: 0 }
    }
    else {
      return {
        fontSize: 15,
        color: '#71A6E3',
        fontWeight: 'bold',
        marginLeft: '50%'
      }
    }
  }

  return (
    <View style={{
      backgroundColor: 'white',
      height: '100%'
    }}>
      <View style={{
        marginTop: '30%',
        marginLeft: '3%'

      }}>
        <Text style={{

          fontSize: 20,
          color: '#545252',
          marginLeft: 15,
          fontWeight: 'bold'


        }}>

          닉네임을  입력해주세요
        </Text>
      </View>

      <TextInput
        style={style.border}
        value={id}
        autoCorrect={false}
        onChangeText={(ele) => setid(ele)}
        onSubmitEditing={() => check_id()}>
      </TextInput>
      {!checkcorrct() && <Text style={go_go_opacity()}>
        존재하는 닉네임 입니다.
      </Text>}

      < TouchableOpacity onPress={() => {


        add_nickname(id)
        navigation.navigate('second');
      }

      }>
        <View style={{
          backgroundColor: '#D2E6FF'
          , width: '37%',
          height: '11%',
          borderRadius: 10,
          marginTop: '80%',
          marginLeft: '60%'
          //marginTop: '40%'


        }}>
          <Text style={{
            fontSize: 19,
            alignItems: 'center',
            alignContent: 'center',
            textAlign: 'center',
            color: '#545252',
            marginTop: '10%',
            fontWeight: 'bold'
          }}>
            다음
          </Text>
        </View>

      </TouchableOpacity>


    </View >

  )


}

const style = StyleSheet.create({
  text: {
    width: 200,
    height: 40,
    borderColor: "black"
  },

  border: {
    width: '85%',
    height: 50,
    borderColor: '#D2D2D2',
    borderWidth: 3,
    margin: 10,
    borderRadius: 20,
    marginLeft: '3%',
    marginLeft: 15,
    marginTop: '5%',


  }

})


export default nickname;

