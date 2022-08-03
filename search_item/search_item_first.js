
import { useSelector, useDispatch } from 'react-redux'
import React, { useState, useContext, useEffect } from "react"
import { View, TextInput, TouchableOpacity, Button, StyleSheet, Text } from "react-native"
//import { Context } from '../contextv/DetailContext'
import { authAction } from "../redux/auth";
//import { cos } from 'react-native-reanimated';
//import { counterActions } from "../store"

import axios from "axios"


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
  kr: '콩'

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
  kr: '땅콩'
 }, {
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
const search_item_first = function ({ navigation }) {
 const token = useSelector((state) => state.token.token)
 console.log('여기서 확인')
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
    var ee = (Object.keys(response.data.allergy));
    allergy_kr.forEach(ev => {
     ee.forEach(el => {
      if (ev.name == el) {
       mapv.push(ev.kr);
      }

     })

    })

    var key_f = (Object.keys(response.data.ingredient));
    var key_ff = (Object.values(response.data.ingredient));
    var id_check = response.data.Id
    var em = [];
    var em_kr = [];
    ingredient_kr.forEach(ev => {
     key_f.forEach(el => {
      if (ev.name == el) {

       em_kr.push(ev.kr);
      }

     })

    })





    for (var i = 0; i < key_f.length; i++) {
     em.push(`${em_kr[i]}\n\n ${key_ff[i]}`)
    }
    em.forEach(el => {
     mapv.push(el);
    })
    //  mapv.push(response.data.ingredient);
    console.log(mapv)
    // setcheck(response.data);
    //navigation.navigate('search_item_first', { data: response.data })
    //setUser(response);

    navigation.navigate('Search_item_seconde', { name: elv, mapv: mapv, id: id_check })

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
    <Text style={{
     fontSize: 20,
     alignSelf: "flex-start",
     //color: '#7C7C7C',
     marginTop: 30,
     marginLeft: 10,
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
