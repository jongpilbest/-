
import { useSelector, useDispatch } from 'react-redux'
import React, { useState, useContext, useEffect } from "react"
import { View, TextInput, TouchableOpacity, Button, StyleSheet, Text } from "react-native"
//import { Context } from '../contextv/DetailContext'
import { authAction } from "../redux/auth";
//import { cos } from 'react-native-reanimated';
//import { counterActions } from "../store"

import axios from "axios"

import { Ionicons } from '@expo/vector-icons';
//import { useSelector, useDispatch } from 'react-redux'
import Search_Compo from './Search_Compo';


var ingredient_kr = [{
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

var allergy_kr = [

  {
    name: 'wheat',
    check: 0,
    kr: '밀가루',
    image: ['https://cdn-icons-png.flaticon.com/512/992/992804.png', 'https://cdn-icons-png.flaticon.com/512/992/992730.png']

  },

  {
    name: 'milk',
    check: 0,
    kr: '우유',
    image: ['https://cdn-icons-png.flaticon.com/512/372/372922.png', 'https://cdn-icons-png.flaticon.com/512/373/373024.png']

  }
  , {
    name: 'buckwheat',
    check: 0,
    kr: '메밀',
    image: ['https://cdn-icons-png.flaticon.com/512/6534/6534050.png', 'https://cdn-icons-png.flaticon.com/512/6534/6534024.png']

  },

  {
    name: 'soybean',
    check: 0,
    kr: '콩',
    image: ['https://cdn-icons-png.flaticon.com/512/6931/6931713.png', 'https://cdn-icons.flaticon.com/png/512/1680/premium/1680537.png?token=exp=1661068499~hmac=96e2e6a2c3078e041bee1164098dff48']

  }
  , {
    name: 'mackerel',
    check: 0,
    kr: '고등어',
    image: ['https://cdn-icons-png.flaticon.com/512/6202/6202150.png', 'https://cdn-icons-png.flaticon.com/512/6202/6202242.png']


  }
  , {
    name: 'crab',
    check: 0,
    kr: '게',
    image: ['https://cdn-icons-png.flaticon.com/512/7260/7260090.png', 'https://cdn-icons.flaticon.com/png/512/2931/premium/2931496.png?token=exp=1661068588~hmac=4fc2b9e1dcbd833a8915c074208dff2e']


  }, {
    name: 'shrimp',
    check: 0,
    kr: '새우',
    image: ['https://cdn-icons.flaticon.com/png/512/2320/premium/2320381.png?token=exp=1661068625~hmac=2e1371c34fee900886540751b8baf096', 'https://cdn-icons.flaticon.com/png/512/1680/premium/1680526.png?token=exp=1661097958~hmac=b0f1634182264bf07a0dcbfb925680a2']

  }, {
    name: 'pork',
    check: 0,
    kr: '돼지 고기',
    image: ['https://cdn-icons-png.flaticon.com/512/7293/7293206.png', 'https://cdn-icons-png.flaticon.com/512/7880/7880013.png']

  }, {
    name: 'peach',
    check: 0,
    kr: '복숭아',
    image: ['https://cdn-icons.flaticon.com/png/512/2521/premium/2521253.png?token=exp=1661068749~hmac=536d98045dd415aba4d69faf0ff80eff', 'https://cdn-icons.flaticon.com/png/512/2521/premium/2521249.png?token=exp=1661068749~hmac=cdc00c584914c9a5279da1cba13f6bd5']

  }, {
    name: 'tomato',
    check: 0,
    kr: '토마토',
    image: ['https://cdn-icons-png.flaticon.com/512/135/135471.png']

  }, {
    name: 'peanut',
    check: 0,
    kr: '땅콩',
    image: ['https://cdn-icons-png.flaticon.com/512/811/811663.png', 'https://cdn-icons-png.flaticon.com/512/7010/7010784.png']
  }, {
    name: 'chicken',
    check: 0,
    kr: '닭',
    image: ['https://cdn-icons.flaticon.com/png/512/1886/premium/1886687.png?token=exp=1661068906~hmac=f6790b68baca8c6b1c622626395a64db',
      'https://cdn-icons.flaticon.com/png/512/1886/premium/1886713.png?token=exp=1661068909~hmac=a675f05fed47a03e2a8dfe5c07a139b6']

  }, {
    name: 'beef',
    check: 0,
    kr: '쇠고기',
    image: ['https://cdn-icons-png.flaticon.com/512/5746/5746230.png',
      'https://cdn-icons-png.flaticon.com/512/5745/5745943.png']

  }, {
    name: 'squid',
    check: 0,
    kr: '오징어',
    image: ['https://cdn-icons.flaticon.com/png/512/4753/premium/4753690.png?token=exp=1661069022~hmac=d0b802b97be01e11cd3a52267f2980cc',
      'https://cdn-icons.flaticon.com/png/512/4754/premium/4754018.png?token=exp=1661069025~hmac=ce267dd44942fb9bd15ee8437c8511a5']

  }, {
    name: 'shellfish',
    check: 0,
    kr: '조개',
    image: ['https://cdn-icons-png.flaticon.com/512/2060/2060195.png',
      'https://cdn-icons-png.flaticon.com/512/2060/2060144.png']


  },
  {
    name: 'egg',
    check: 0,
    kr: '달걀',
    image: ['https://cdn-icons-png.flaticon.com/512/1951/1951378.png',
      'https://cdn-icons-png.flaticon.com/512/1951/1951379.png']


  }]
const search_item_first = function ({ navigation }) {
  const token = useSelector((state) => state.token.token)
  console.log('내역확인')
  var item = navigation.getParam('data');
  /*
  var item = [
   {
    "id": 4,
    "name": "핫식스 더킹 러쉬",
    "type": "음료류",
    "brand": "롯데칠성음료",
    "image": null
   },
   {
    "id": 5,
    "name": "핫식스팬시캔디",
    "type": "음료류",
    "brand": "롯데칠성음료",
    "image": null
   },
   {
    "id": 6,
    "name": "핫식스 더킹 파워",
    "type": "음료류",
    "brand": "롯데칠성음료",
    "image": null
   }
  ]
  */
  console.log(item)

  //const tr = useSelector((state) => state.auth.nickname)
  //const dispatch = useDispatch();

  const is_id = useSelector((state) => state.auth.nickname)


  // var userId = Math.floor(Math.random() * 10);
  // const { add_component, add_id, die } = useContext(Context)

  // const dispatch = useDispatch();
  // const set_id = useSelector((state) => state.id);
  //const push = () =>
  // const z = 1;

  const gopage = async function (elv) {

    await axios.post(`http://13.209.73.153:5000/product/custom`, {
      "name": elv

    },
      {
        headers: {
          'X-AUTH-TOKEN': token

        }
      }
    ).then((response) => {
      if (response) {
        console.log('확인해보자 ');
        console.log(response.data)
        var mapv = [];
        var ee = response.data.allergy;

        allergy_kr.forEach(ev => {

          for (const pro in ee) {

            if (ev.name == pro) {
              var ob = {
                name: ev.kr,
                image: ev.image,
                check: ee[pro]

              }
              console.log('확인해보기')
              console.log(ob)
              mapv.push(ob);

            }


          }



        })

        var key_f = (Object.keys(response.data.ingredient));
        var key_ff = (Object.values(response.data.ingredient));
        var id_check = response.data.Id
        console.log(`ididididididididid-first`);
        console.log(id_check)
        var em = [];
        var em_kr = [];
        ingredient_kr.forEach(ev => {
          key_f.forEach(el => {
            if (ev.name == el) {

              em_kr.push(ev.kr);
            }

          })

        })



        var ssec = [];


        for (var i = 0; i < key_f.length; i++) {
          em.push(`${em_kr[i]}\n\n ${key_ff[i]}`)
        }
        em.forEach(el => {
          ssec.push(el);
        })
        //  mapv.push(response.data.ingredient);
        console.log(mapv, ssec)
        // setcheck(response.data);
        //navigation.navigate('search_item_first', { data: response.data })
        //setUser(response);

        navigation.navigate('Search_item_seconde', { name: elv, ssec: ssec, mapv: mapv, id: id_check })

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
      backgroundColor: '#ffffff'
    }}>


      <View style={{
        backgroundColor: '#F4F4F4',
        height: 80,
        width: '100%'


        //eight: '35%'
      }}>
        <TouchableOpacity onPress={() => {


          navigation.pop();
        }}>
          <Ionicons style={{

            marginLeft: 15,
            marginTop: 20,
          }} name="arrow-back-circle" size={50} color="black" />

        </TouchableOpacity>

        <Text style={{
          fontSize: 20,
          alignSelf: "flex-start",
          //color: '#7C7C7C',
          marginTop: 30,
          marginLeft: 70,
          position: 'absolute',


          fontFamily: "Nam-Bold"
        }}>검색 상품 리스트</Text>
      </View>

      <View
        style={{
          backgroundColor: 'white',
          height: '90%'
        }


        } >

        <TouchableOpacity onPress={() => {



        }}>
          <View style={{
            width: 130,
            height: 30,
            borderRadius: 20,
            marginTop: 20,

            marginLeft: 220,
            backgroundColor: '#DDEEF2'


          }}>
            <Text style={{
              textAlign: 'center',
              //margin: 10,
              margin: 5,
              fontFamily: "Nam-Bold"
            }}>
              필터
            </Text>

          </View>

        </TouchableOpacity>
        <View style={{
          flexDirection: 'row',

          height: 300,
          // justifyContent: 'space-between',
          backgroundColor: 'white',
          // justifyContent: 'flex-start',
          flexWrap: 'wrap',
          marginTop: 15
        }}>



          {item.map((el, index) => {

            return (

              <Search_Compo key={index} touch={(vv) => gopage(vv)} vale={el}></Search_Compo>

            )
          })}
        </View>
      </View >



    </View >

  )


}


search_item_first.navigationOptions = () => {
  return {
    header: () => false,
  };
};


export default search_item_first;
