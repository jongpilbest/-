
import React, { useState, useContext, useEffect } from "react"
import { View, TextInput, TouchableOpacity, Button, StyleSheet, Text } from "react-native"
//simport '../assets/font' as Font from "expo-font";
//import { Context } from '../contextv/DetailContext'
//import { Context2 } from '../contextv/DetailContext'
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ScrollView } from "react-native-gesture-handler";
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux'
import { goodAction } from "../redux/good";
var new_A = [];
var index_array = [];
import Recomd from "./Recomd";
import Allery_item from "../search_item/Allery_item";
//import { useSelector, useDispatch } from 'react-redux'
import Kisa from "./Kisa";

import Bun from "./Bun";


import { faGoogle } from "@fortawesome/free-brands-svg-icons";



const main = function ({ navigation }) {
  var item = navigation.getParam('item');
  var main_kisa = navigation.getParam('main_kisa');
  var good_main_kisa = [];
  console.log(main_kisa)
  console.log(item)


  //const item_show = navigation.getParam('data');
  const dispatch = useDispatch();

  // const is_id = useSelector((state) => state.auth.id)
  //const is_password = useSelector((state) => state.auth.password)
  const [id, setid] = useState('');
  // const { signtoken } = useContext(Context);
  // console.log(Context2._currentValue.state);
  // const { logicalWidth, logicalHeight } = Dimensions.get('window')
  var state_state = useSelector((state) => state.good.good);

  const token = useSelector((state) => state.token.token)
  const nickname = useSelector((state) => state.owner.owner);

  const goto_text = function (el) {

    //setid(ele);
    console.log(el)

    if (id.length == 0) {

      // delete_all();




      new_A.length = 0;
      array_lst.forEach(element => {
        var ch = element.split('');
        // console.log(ch);
        new_A.push(ch)
        //console.log(new_A)
      });


      dispatch(goodAction.setgood(new_A))




    }

    else if (id.length >= 1) {


      var cc = [];
      console.log(el)

      state_state.forEach((EV, index) => {


        var chec = el.length;
        var good = el.toString().split('')
        var misu = (good[chec - 1])


        if (EV.includes(misu)) {

          cc.push(EV);

        }


      })
      console.log(cc, cc.length);
      if (cc.length > 0) {



        dispatch(goodAction.setgood(new_A))

        console.log(state_state)

      }


    }



  }

  const go_S = function (ey) {
    console.log('엥');
    console.log(ey)
    navigation.navigate('Search_item_seconde', { name: ey.name, ssec: ey.ssec, mapv: ey.mapv, id: ey.id })

  }

  const [password, setpassword] = useState('');
  return (
    <View style={{
      backgroundColor: '#F2F2F2',

    }} >
      <View style={{
        flexDirection: 'row'
      }}>
        <View style={{
          width: '100%',
          height: 80,
          marginTop: 20,
          backgroundColor: '#F2F2F2',


          flexDirection: 'column'

        }}>
          <Text style={{
            fontFamily: "Aullia"
            , fontSize: 45,
            marginLeft: 30,
            marginTop: 20,
            color: 'black'
          }}>
            Anof
          </Text>
        </View>

      </View>
      <View style={{
        backgroundColor: 'white',
        width: '90%',
        height: 42,
        borderWidth: 1,
        borderColor: '#F2F2F2',
        margin: 15,
        borderRadius: 5,
        flexDirection: 'row'
      }}>
        <Ionicons name="search"
          style={{
            margin: 5,
          }} size={30} color="black" />

        <TextInput style={{
          fontFamily: "Sc"
          , fontSize: 12,
          width: '100%',
          height: 40,


        }}

          value={id}
          placeholder="찾고 싶은 상품을 검색해주세요"
          placeholderTextColor={'#B9B9B9'}
          autoCorrect={false}
          clearTextOnFocus={true}
          onChangeText={(ele) => {

            setid(ele);
            // goto_text(ele);

          }}
          onSubmitEditing={() => {
            console.log('검색해보자고')
            ///product/search/{keyword}
            console.log(id, token);

            axios.get(`http://15.165.76.99:5000/product/search/${id}`,

              {
                headers: {
                  'X-AUTH-TOKEN': token

                }
              }
            ).then((response) => {
              if (response) {
                console.log('??서놓 상품>');
                //console.log(response.data)
                // setcheck(response.data);
                navigation.navigate('search_item_first', { data: response.data })
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

          }
        >

        </TextInput>


      </View>
      <View style={{
        width: '90%',
        height: '15%',

        marginLeft: '3%',
        flexDirection: 'row'
      }}>

        <View style={{
          width: '47%',
          height: '70%',
          backgroundColor: '#FFE978',
          marginTop: '2%',
          marginLeft: '3%',

        }}>


          <TouchableOpacity onPress={() => {
            navigation.navigate('Bun')
          }}>
            <View
              style={{
                width: '50%',
                height: '90%',
                margin: 3,
                marginLeft: '5%',

                borderRadius: 5,
                flexDirection: 'row',

              }}>
              <View style={{
                backgroundColor: 'white',
                width: 55,
                height: 55,
                padding: '2%',
                marginLeft: '5%',
                marginTop: '10%',
                borderRadius: 50,
                alignItems: 'center'



              }}>
                <Ionicons
                  style={{
                    margin: '20%'
                  }}
                  name="information" size={24} color="black" />


              </View>
              <View style={{
                alignContent: 'center',
                justifyContent: 'center',
                margin: '15%',
                width: '80%',

              }}>
                <Text style={{

                  fontSize: 12,



                }}>
                  성분 정보
                </Text>

              </View>



            </View>
          </TouchableOpacity>

        </View>

        <View style={{
          width: '47%',
          height: '70%',
          backgroundColor: '#FFE978',
          marginTop: '2%',
          marginLeft: '3%'
        }}>

          <TouchableOpacity onPress={() => {

            navigation.navigate('Barcode_main');
          }}>
            <View
              style={{
                width: '55%',
                height: '90%',
                margin: 3,
                marginLeft: '5%',

                borderRadius: 5,
                flexDirection: 'row',
                display: 'flex'
              }}>
              <View style={{
                backgroundColor: 'white',
                width: 50,
                height: 50,
                padding: '2%',
                justifyContent: 'center',

                borderRadius: 50,
                display: 'flex',

                alignContent: 'center',
                justifyContent: 'center',
                marginTop: '15%'


              }}>
                <MaterialCommunityIcons
                  style={{

                    margin: '25%'
                  }}

                  name="barcode-scan" size={22} color="black" />
              </View>
              <View style={{
                alignContent: 'center',
                justifyContent: 'center'
              }}>
                <View style={{
                  alignContent: 'center',
                  justifyContent: 'center',
                  margin: '15%',
                  width: '80%',

                }}>
                  <Text style={{
                    fontFamily: "Sc"
                    , fontSize: 12,


                  }}>
                    바코드검색
                  </Text>

                </View>
              </View>

            </View>
          </TouchableOpacity>

        </View>

        <View>




        </View>


      </View>


      <View style={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',

      }}>


      </View >
      <View style={{
        width: '100%',
        height: '70%',
        backgroundColor: '#F2F2F2'
      }}>

        <Text style={{
          fontFamily: "Sc"
          , fontSize: 15,

          marginLeft: 20

        }}> {`${nickname} 님을 위한 추천 상품`} </Text>
        <ScrollView
          style={{
            margin: 10
          }} horizontal={true}
          showsVerticalScrollIndicator={false}
          // showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          // showsHorizontalScrollIndicator={false}
          pagingEnabled={true}>
          {item.map((el, index) => {

            return (

              <Recomd keep={(gg) => go_S(gg)} key={index} show={el}></Recomd>

            )
          })}

        </ScrollView>


        <View style={{
          backgroundColor: '#F2F2F2',
        }}>

          <Text style={{
            fontFamily: "Sc"
            , fontSize: 15,
            marginTop: 10,
            marginLeft: 20

          }}> {`${nickname} 님을 위한 추천 기사`} </Text>

          <View style={{
            margin: 5,
            marginLeft: 15,
            width: '90%',
            height: '45%',
            backgroundColor: '#F2F2F2',
            borderRadius: 5,
          }}>
            <ScrollView>
              <TouchableOpacity onPress={() => {
                navigation.navigate('Gisa', { item: main_kisa });
              }}>
                {
                  main_kisa.map((el, index) => {

                    return <Kisa key={index} show={el}></Kisa>


                  })}
              </TouchableOpacity>
            </ScrollView>

          </View>



          <View style={{
            width: '100%',
            height: 10,
            backgroundColor: '#F2F2F2'
          }}>

          </View>

        </View>

      </View>





    </View >


  )
}
//main.navigationsetOptions({ tabBarStyle: { display: 'none' } })
main.navigationOptions = () => {
  return {
    header: () => false,
  };
};
const style = StyleSheet.create({
  border: {
    width: '86%',
    height: '15%',

    borderColor: 'black',
    borderWidth: 3,
    margin: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#D2E6FF'

  },
  login: {
    fontSize: 58,
    alignSelf: "center",
    color: '#7C7C7C',
    position: 'absolute',
    top: '35%',
    marginTop: '5%',
    // fontFamily: 'Mate-Regular'


  }, bottm: {
    //alignSelf: "center",
    //justifyContent: 'center',
    top: '13%',
    textAlign: 'center',
    alignContent: 'center',
    fontSize: 17,
    color: '#545252',
    // fontFamily: 'Roboto',

    marginTop: '4%'
  }, bottmm: {
    marginTop: 20,
    fontSize: 20,
    alignSelf: "center",
  }

})


export default main;