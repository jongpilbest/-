
import { useSelector, useDispatch } from 'react-redux'
import React, { useState, useContext, useEffect } from "react"
import { View, TextInput, TouchableOpacity, Button, StyleSheet, Text } from "react-native"
//import { Context } from '../contextv/DetailContext'
import { authAction } from "../redux/auth";
//import { cos } from 'react-native-reanimated';
//import { counterActions } from "../store"

import axios from "axios"
import { Ionicons } from '@expo/vector-icons';



const Nickname = function ({ navigation }) {
  const dispatch = useDispatch();
  const [id, setid] = useState("");
  const [checkhey, setcheck] = useState(false);

  //const tr = useSelector((state) => state.auth.nickname)
  //const dispatch = useDispatch();

  const is_id = useSelector((state) => state.auth.nickname)


  // var userId = Math.floor(Math.random() * 10);
  // const { add_component, add_id, die } = useContext(Context)

  // const dispatch = useDispatch();
  // const set_id = useSelector((state) => state.id);
  //const push = () =>
  // const z = 1;

  const go_go_opacity = function () {

    if (id.length == 0) {
      return { opacity: 0 }
    }
    else {
      return {
        fontSize: 15,
        color: '#545252',
        fontWeight: 'bold',
        marginLeft: 20,

        fontFamily: 'Sc',
      }
    }
  }








  const check_id = function () {



    console.log('//')
    axios.get(`http://15.165.76.99:5000/auth/checkNickname/${id}`).then((response) => {
      if (response) {
        console.log('?? nickname');
        console.log(response.data)
        setcheck(response.data);
        if (response.data == false) {
          dispatch(authAction.setnickname(id))
        }

        //setUser(response);
      } else {
        alert("failed to ");
      }
    }).catch((err) => {
      console.log(err.message);
      console.log(err)
      console.log('?');
    });
    //console.log(' 체큰 ')
    //console.log(checkhey)
    // if (checkhey==true)



  }
  const check = function () {

    if (checkhey == true) {
      console.log('1 맞냐고')

      return false;

    }
    else
      return true;



  }



  return (
    <View style={{
      backgroundColor: '#F2F2F2',
      height: '100%'
    }}>

      <TouchableOpacity onPress={() => {

        console.log('엥')
        navigation.pop()
      }}>
        <Ionicons style={{

          marginLeft: 15,
          marginTop: 20,
        }} name="arrow-back-circle" size={50} color="#545252" />

      </TouchableOpacity>
      <View style={{
        marginTop: '10%',
        marginLeft: '3%'

      }}>

        <Text style={{
          fontSize: 20,
          color: '#545252',
          marginLeft: 15,
          fontWeight: 'bold',
          fontFamily: 'Sc',


        }}>
          닉네임을 입력해주세요
        </Text>
      </View>



      <TextInput
        style={style.border}
        value={id}
        autoCorrect={false}
        onChangeText={(ele) => {
          setid(ele);
          setcheck(false)
        }}
        onSubmitEditing={() => check_id()}>
      </TextInput>
      {!check() && <Text style={go_go_opacity()}>
        존재하는 닉네임 입니다
      </Text>}
      < TouchableOpacity onPress={() => {


        if (id.length >= 0) {
          if (checkhey == false) {

            // die();


            dispatch(authAction.setnickname(id))

            // add_id(id);
            navigation.navigate('second')


          }







        }


      }}>
        <View style={{
          backgroundColor: '#545252',

          width: '37%',
          height: 45,
          borderRadius: 5,
          marginTop: '30%',
          marginLeft: '50%'
          //marginTop: '40%'
          //marginTop: '40%'


        }}>
          <Text style={{
            fontSize: 16,
            alignItems: 'center',
            alignContent: 'center',
            textAlign: 'center',
            color: 'white',
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
Nickname.navigationOptions = () => {
  return {
    header: () => false,
  };
};

const style = StyleSheet.create({
  text: {
    width: 200,
    height: 40,
    borderColor: "black"
  },

  border: {
    width: '85%',
    height: 50,
    backgroundColor: 'white',
    borderColor: '#545252',

    borderWidth: 1,
    margin: 10,
    borderRadius: 5,
    marginLeft: '3%',
    marginLeft: 15,
    marginTop: '5%',


  }

})

export default Nickname;