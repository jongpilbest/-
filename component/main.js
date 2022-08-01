
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
//import { useSelector, useDispatch } from 'react-redux'

const main = function ({ navigation }) {
  const dispatch = useDispatch();
  // const is_id = useSelector((state) => state.auth.id)
  //const is_password = useSelector((state) => state.auth.password)
  const [id, setid] = useState('');
  // const { signtoken } = useContext(Context);
  // console.log(Context2._currentValue.state);
  // const { logicalWidth, logicalHeight } = Dimensions.get('window')
  var state_state = useSelector((state) => state.good.good);

  var array_lst = ['콘칩', '콘사', '콘소메', '콘사사', '칩시', '시구', '시구시'];
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

  const [password, setpassword] = useState('');
  return (
    <View style={{
      backgroundColor: 'white',

    }} >
      <View style={{
        flexDirection: 'row'
      }}>
        <View style={{
          width: 80,
          height: 80,
          marginTop: 20,
          backgroundColor: '#DDEEF2',
          borderRadius: '50%',
          alignItems: 'center',
          marginLeft: 150,
          flexDirection: 'column'

        }}>
          <Text style={{
            fontFamily: "Aullia"
            , fontSize: 33,
            textAlign: 'center',
            marginTop: 20
          }}>
            Anof
          </Text>
        </View>
        <TouchableOpacity onPress={() => {

          navigation.navigate('Barcode_main');
        }}>
          <View style={{
            marginTop: 40,
            borderColor: 'black',
            borderWidth: 1,
            marginLeft: 60,
            borderRadius: '50%',
            width: 50,
            height: 50,
            backgroundColor: 'white',
          }}>
            <MaterialCommunityIcons
              style={{

                margin: 13
              }}

              name="barcode-scan" size={22} color="black" />
          </View>
        </TouchableOpacity>
      </View>
      <View style={{
        backgroundColor: '#EAEAEA',
        width: '90%',
        height: 38,
        margin: 15,
        borderRadius: 20,
        flexDirection: 'row'
      }}>
        <Ionicons name="search"
          style={{
            margin: 5,
          }} size={30} color="black" />

        <TextInput style={{
          fontFamily: "Nam-Bold"
          , fontSize: 12,
          margin: 12

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

            axios.get(`http://220.86.187.246:5000/product/search/${id}`,

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
      <View
        style={{
          width: '90%',
          height: 65,
          margin: 3,
          marginLeft: 15,
          backgroundColor: '#DDEEF2',
          borderRadius: 30,
          flexDirection: 'row'
        }}>
        <View style={{
          backgroundColor: 'white',
          width: 45,
          height: 45,
          margin: 10,
          marginLeft: 20,
          borderRadius: '50%'
        }}>
          <Ionicons
            style={{
              margin: 10
            }}
            name="information" size={24} color="black" />


        </View>
        <Text style={{
          fontFamily: "Nam-Bold"
          , fontSize: 12,
          marginTop: 25,
          marginLeft: 20

        }}>
          성분 정보
        </Text>

      </View>
      <View>

        <Text style={{
          fontFamily: "Nam-Bold"
          , fontSize: 12,
          marginTop: 13,
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
          <View style={{
            width: 100,
            height: 140,
            borderRadius: 50,
            margin: 6,
            marginLeft: 10,
            backgroundColor: '#DDEEF2',
          }}>

          </View>
          <View style={{
            width: 100,
            height: 140,
            borderRadius: 50,
            margin: 6,
            backgroundColor: '#DDEEF2',
          }}>

          </View>
          <View style={{
            width: 100,
            height: 140,
            borderRadius: 50,
            margin: 6,
            backgroundColor: '#DDEEF2',
          }}>

          </View>
          <View style={{
            width: 100,
            height: 140,
            borderRadius: 50,
            margin: 6,
            backgroundColor: '#DDEEF2',
          }}>

          </View>

        </ScrollView>
        <View style={{
          backgroundColor: 'white'
        }}>
          <Text style={{
            fontFamily: "Nam-Bold"
            , fontSize: 12,
            marginTop: 10,
            marginLeft: 20

          }}> {`${nickname} 님을 위한 추천 기사`} </Text>

          <View style={{
            margin: 8,
            marginLeft: 15,
            width: '90%',
            height: 130,
            backgroundColor: '#DDEEF2',
            borderRadius: 20,
          }}>
            <View style={{
              width: '90%',
              marginTop: 15,
              height: 40,
              marginLeft: 15,
              borderRadius: 20,
              backgroundColor: 'white'
            }}>
              <Text style={{
                fontFamily: "Nam-Bold"
                , fontSize: 12,
                marginTop: 10,
                marginLeft: 20

              }}>
                어쩌구
              </Text>

            </View>
            <View style={{
              width: '90%',
              marginTop: 15,
              height: 40,
              marginLeft: 15,
              borderRadius: 20,
              backgroundColor: 'white'
            }}>
              <Text style={{
                fontFamily: "Nam-Bold"
                , fontSize: 12,
                marginTop: 10,
                marginLeft: 20

              }}>
                어쩌구
              </Text>

            </View>
          </View>

          <View style={{
            width: '100%',
            height: 20,
            backgroundColor: 'white'
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