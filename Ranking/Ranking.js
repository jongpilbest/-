
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
  console.log(ran)
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
      backgroundColor: '#F2F2F2',
      height: 2000,
    }}>


      <View style={{
        backgroundColor: '#F2F2F2',
        height: 110,
        width: '100%'


        //eight: '35%'
      }}>

        <TouchableOpacity onPress={() => {

          normal();

        }}>
          <MaterialIcons style={{
            fontSize: 30,
            position: 'absolute',
            top: 30,
            right: 23,
            marginTop: 10
          }} name="update" size={60} color="#545252" />

        </TouchableOpacity>
        <Text style={{
          fontFamily: "Aullia"
          , fontSize: 44,
          marginLeft: 20,
          marginTop: 22,

          color: 'black'
        }}>
          Anof
        </Text>

        <Text style={{
          fontSize: 16,
          alignSelf: "center",
          color: '#545252',
          position: 'absolute',
          top: 80,
          left: 30,
          fontFamily: "Sc"
        }}>랭킹순위</Text>




      </View>
      <View style={{
        width: '100%',
        height: '40%',
        backgroundColor: '#F2F2F2'
      }}>


        <ScrollView
          showsVerticalScrollIndicator={false}
          // showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={true}>




          {
            ran.length > 1 ? ran.map((el, index) => {
              return <Ranking_Com t={el} fo={index} key={index}></Ranking_Com>
            }) : null
          }


        </ScrollView>
      </View>
      <View style={{
        width: '90%',
        height: 60,
        marginLeft: '5%',
        borderRadius: 5,
        bottom: '35%',
        position: 'absolute',
        backgroundColor: '#545252'
      }}>

        {
          ran2.ranking ? <Text style={{

            fontFamily: 'Sc',
            fontSize: 20,
            textAlign: 'center',
            marginTop: 10,
            color: 'white'
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
    borderRadius: 5,
    marginLeft: '3%',
    marginLeft: 15,
    marginTop: '5%',



  }

})

export default Ranking;
