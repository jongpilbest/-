

import React, { useState, useContext, useEffect } from "react"
import { View, ScrollView, TextInput, TouchableOpacity, Button, StyleSheet, Text } from "react-native"
//import { Context } from "../contextv/DetailContext";
//import Componcopy from "./Componcopy";
//import Componn from "./Componn"
import Componcopy from "./Componcopy";
import { useSelector, useDispatch } from 'react-redux'
import SeachBar from "./SearchBar"
import Ms from "./Ms";
//import { TapGestureHandler } from "react-native-gesture-handler";
import axios from "axios"
import fian from "./fian";


import { authAction } from "../redux/auth";
var chekc = -1;
var chek = 0;
var text_input = 0;
import { Ionicons } from '@expo/vector-icons';

const ingredient = function ({ navigation }) {

  const mos = useSelector((state) => state.auth.ingredient)
  const [num, setnum] = useState(false);
  const compon_length = useSelector((state) => state.auth.array_list_2);
  useEffect(() => {
    console.log('하나 이상 ?', compon_length.length)
    if (compon_length.length > 0) {
      setnum(false);
    }
    if (compon_length.length == 0) {
      setnum(true);
    }

  }, [compon_length])



  const [MS_good, misu] = Ms();
  const [chna, obj_cha] = fian();

  const [write, setwrite] = useState(0);
  console.log(misu);
  const dispatch = useDispatch();
  var arry_list = useSelector((state) => state.auth.array_list)
  var arry_list_2 = useSelector((state) => state.auth.array_list_2)
  var id = useSelector((state) => state.auth.id)
  var password = useSelector((state) => state.auth.password);

  var nickname = useSelector((state) => state.auth.nickname);

  // console.log(mos, chekc)

  const check_most = function (el) {

    if (el == "") {

      chekc = -1;
      chek = mos;

      text_input = 0;

      return;

    }

    chek = mos.filter(evlv => {
      return evlv.kr == el
    })
    console.log(`chek ${chek}`)


    if (chek.length > 0) {
      chekc = 11;
      text_input = 33;
    }
    else if (chek.length == 0) {
      chekc = 0
      console.log('ERROR CHECK')
      text_input = 1;
    }





    return;




  }



  const check_good = function () {


    if (chekc == 11) {
      console.log('11인데요')
      chekc = 10;
      return true;
    }
    else
      console.log('11아닌데요 ')
    return false;

  }


  //const shpw = put_state.slice(0, 5);


  async function goserver() {
    var ob_grien = {
      ingredient: {

      }
    }
    //console.log('CHECK FIAN')
    console.log('?');
    var ob = {
      allergy: {

      }
    }
    var gogo = {


      ingredient: [{
        name: 'natrium',
        check: 0,


        kr: '나트륨'


      },
      {
        name: "carbohydrates",
        check: 0,
        kr: '탄수화물'

      }, {
        name: "sugar",
        check: 0,
        kr: '당류'

      },
      {

        name: "fat",
        check: 0,
        kr: '지방'


      }
        , {
        name: 'trans_fat',
        check: 0,
        kr: '트랜스지방'

      },
      {
        name: "saturated_fat",
        check: 0,
        kr: '포화지방'
      },
      {
        name: "cholesterol",
        check: 0,
        kr: '콜레스테롤'

      },
      {
        name: "protein",
        check: 0,
        kr: '단백질'

      },
      {
        name: "calorie",
        check: 0,
        kr: '칼로리'

      }]
    }

    var go = {
      allergy: [

        {
          name: 'wheat',
          check: 0,
          kr: '밀가루'
        },

        {
          name: 'milk',
          check: 0,
          kr: '우유'

        }
        , {
          name: 'buckwheat',
          check: 0,
          kr: '메밀'

        },

        {
          name: 'soybean',
          check: 0,
          kr: '대두'

        }
        , {
          name: 'mackerel',
          check: 0,
          kr: '고등어'


        }
        , {
          name: 'crab',
          check: 0,
          kr: '게'


        }, {
          name: 'shrimp',
          check: 0,
          kr: '새우'

        }, {
          name: 'pork',
          check: 0,
          kr: '돼지 고기'

        }, {
          name: 'peach',
          check: 0,
          kr: '복숭아'

        }, {
          name: 'tomato',
          check: 0,
          kr: '토마토'

        }, {
          name: 'walnut',
          check: 0,
          kr: '호두'
        },

        {
          name: 'peanut',
          check: 0,
          kr: '땅콩'




        },


        {
          name: 'chicken',
          check: 0,
          kr: '닭'

        }, {
          name: 'beef',
          check: 0,
          kr: '쇠고기'

        }, {
          name: 'squid',
          check: 0,
          kr: '오징어'

        }, {
          name: 'shellfish',
          check: 0,
          kr: '조개'


        },
        {
          name: 'egg',
          check: 0,
          kr: '달걀'


        }]
    }
    console.log(arry_list)
    gogo.ingredient.map(el => {
      arry_list_2.map(va => {
        if (el.kr == va) {
          el.check = 1;

        }

      })

    })



    //var arry_list = useSelector((state) => state.auth.array_list)
    go.allergy.map(el => {
      arry_list.map(va => {
        if (el.kr == va) {
          el.check = 1;

        }

      })

    })


    for (var pro in go.allergy) {
      var cc = (go.allergy[pro]);
      var oj_ = Object.values(cc);
      console.log(oj_)
      ob.allergy[oj_[0]] = oj_[1];


    }
    for (var pro in gogo.ingredient) {
      var cvc = (gogo.ingredient[pro]);
      var ojv_ = Object.values(cvc);
      console.log(ojv_)
      ob_grien.ingredient[ojv_[0]] = ojv_[1];


    }
    console.log(ob.allergy);
    console.log(ob_grien.ingredient);

    console.log(id, password)


    axios.post("http://15.165.76.99:5000/auth/join", {
      "userId": id,
      "password": password,
      "nickname": nickname,
      "ingredient": ob_grien.ingredient,
      "allergy": ob.allergy,
    })
      .then((response) => {
        if (response) {
          console.log('?');
          console.log('성공')
          dispatch(authAction.setallergy_zero())
          dispatch(authAction.setingre_zero())
          navigation.navigate('Edit')
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
        marginTop: '3%',
        marginLeft: '3%'
      }}>
        <Text style={{
          marginLeft: 13,
        }}>
          <Text style={{
            fontSize: 22,
            color: '#545252',

            fontWeight: 'bold',
            fontFamily: 'Sc'

          }}>
            비선호
          </Text>
          <Text style={{
            fontSize: 22,
            color: '#545252',

            fontWeight: 'bold',
            fontFamily: 'Sc',
          }}>
            성분을 알려주세요
          </Text>
        </Text>
        <Text style={{
          fontSize: 13,
          color: '#545252',
          marginLeft: 22,
          marginTop: 10,

          fontWeight: 'bold',
          fontFamily: 'Sc',
        }}>
          마이페이지에서 변경 가능합니다.

        </Text>
      </View>
      <SeachBar onfinsh={(vl) => {
        MS_good()

        check_most(vl);
      }} >


      </SeachBar>
      {
        num && <Text style={{
          fontFamily: 'Sc',
          marginLeft: '10%',
          color: '#545252'

        }}>
          최소 하나 이상 선택해주세요
        </Text>
      }

      {
        text_input == 1 && <Text style={{
          fontSize: 22,
          color: 'white',
          marginLeft: 20,

          fontWeight: 'bold'
        }}>
          검색되는 비선호 성분이 없습니다

        </Text>
      }
      <View style={{
        height: '52%',
        width: '100%',
        marginLeft: 10


      }}>
        <ScrollView style={styles.border}>



          <View style={styles.frined}>


            {


              chekc == 11 && check_good() && <Componcopy vale={chek[0]}></Componcopy>

            }
            {
              chekc == -1 && mos.map((el, index) => {
                return <Componcopy key={index} vale={el}></Componcopy>
              })

            }




          </View>



        </ScrollView>
      </View>
      < TouchableOpacity onPress={() => {

        goserver();
      }

      }>

        <View style={{
          backgroundColor: '#545252'
          , width: '83%',
          height: 40,
          borderRadius: 5,
          marginTop: 20,

          alignSelf: 'center',
          alignContent: 'center'




        }}>
          <Text style={{
            fontSize: 16,
            alignItems: 'center',
            alignContent: 'center',
            textAlign: 'center',
            color: 'white',
            marginTop: 12,
            fontWeight: 'bold',
            fontFamily: 'Sc',
          }}>
            완료
          </Text>
        </View>

      </TouchableOpacity >




    </View >

  )
}
ingredient.navigationOptions = () => {
  return {
    header: () => false,
  };
};

const styles = StyleSheet.create({

  border: {
    width: '90%',
    height: 800,

    borderWidth: 3,
    margin: 3,
    borderColor: 'transparent'



  },
  frined: {

    flexDirection: 'row',
    height: 700,
    // justifyContent: 'space-between',
    backgroundColor: '#F2F2F2',
    // justifyContent: 'flex-start',
    flexWrap: 'wrap'
  }



})
export default ingredient;