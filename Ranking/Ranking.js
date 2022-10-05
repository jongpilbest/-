
import { useSelector, useDispatch } from 'react-redux'
import React, { useState, useContext, useEffect } from "react"
import { View, TextInput, TouchableOpacity, Button, StyleSheet, Text } from "react-native"
import { MaterialIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';
import Rank__api from './Rank__api';
import Ranking_Com from './Ranking_Com';


//import { RadioButtonAndroid } from 'react-native-paper/lib/typescript/src/components/RadioButton/RadioButtonAndroid';

const Ranking = function ({ navigation }) {
  const token = useSelector((state) => state.token.token);
  const [normal, ran, ran2] = Rank__api();

  const [time, settime] = useState(0);
  const [change, setchange] = useState(0);



  const [ee, setee] = useState([]);


  useEffect(() => {
    normal();
    console.log('?')
    console.log(ran)
  }, [])



  return (
    <View style={{
      backgroundColor: '#DDEEF2',
      height: 2000,
    }}>


      <View style={{
        backgroundColor: '#F4F4F4',
        height: 80,
        width: '100%'


        //eight: '35%'
      }}>


        <Text style={{
          fontSize: 20,
          alignSelf: "flex-start",
          //color: '#7C7C7C',
          marginTop: 30,
          marginLeft: 20,
          position: 'absolute',


          fontFamily: "Nam-Bold"
        }}>랭킹순위</Text>

        <TouchableOpacity onPress={() => {

          normal();

        }}>
          <MaterialIcons style={{
            fontSize: 30,
            position: 'absolute',
            top: 20,
            right: 23,
            marginTop: 10
          }} name="update" size={40} color="black" />

        </TouchableOpacity>


      </View>
      <View style={{
        width: '100%',
        height: 470
      }}>



        <ScrollView
          showsVerticalScrollIndicator={false}
          // showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={true}>

          <View style={{
            width: '100%',
            height: 1600,
            backgroundColor: '#DDEEF2',
            marginTop: 20
          }}>


            {
              ran.length > 1 ? ran.map((el, index) => {
                return <Ranking_Com t={el} fo={index} key={index}></Ranking_Com>
              }) : null
            }

          </View>
        </ScrollView>
      </View>
      <View style={{
        width: 330,
        height: 60,
        marginLeft: 20,
        borderRadius: 10,
        backgroundColor: '#BDBDBD'
      }}>

        {
          ran2.ranking ? <Text style={{
            fontFamily: 'Nam-Bold',
            fontSize: 20,
            textAlign: 'center',
            marginTop: 10,
          }}>{` ${ran2.nickname}님 순위 ${ran2.ranking}위`}</Text>
            : null
        }





      </View>


    </View>

  )


}
Ranking.navigationOptions = () => {
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
    borderColor: 'white',

    borderWidth: 3,
    margin: 10,
    borderRadius: 10,
    marginLeft: '3%',
    marginLeft: 15,
    marginTop: '5%',



  }

})

export default Ranking;
