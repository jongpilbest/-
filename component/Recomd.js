

import axios from "axios";
import React, { useState, useContext, useEffect, useRef } from "react"
import { View, Image, TextInput, TouchableOpacity, Button, Dimensions, StyleSheet, Text } from "react-native"
import { useSelector, useDispatch } from 'react-redux'


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
    kr: '대두',
    image: ['https://cdn-icons-png.flaticon.com/512/5601/5601387.png', 'https://cdn-icons-png.flaticon.com/512/5601/5601534.png']

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
    image: ['https://cdn-icons-png.flaticon.com/512/7260/7260090.png', 'https://cdn-icons-png.flaticon.com/512/2931/2931496.png']


  }, {
    name: 'shrimp',
    check: 0,
    kr: '새우',
    image: ['https://cdn-icons-png.flaticon.com/512/2619/2619506.png', 'https://cdn-icons-png.flaticon.com/512/2619/2619560.png']

  }, {
    name: 'pork',
    check: 0,
    kr: '돼지 고기',
    image: ['https://cdn-icons-png.flaticon.com/512/7293/7293206.png', 'https://cdn-icons-png.flaticon.com/512/7880/7880013.png']

  }, {
    name: 'peach',
    check: 0,
    kr: '복숭아',
    image: ['https://cdn-icons-png.flaticon.com/512/2952/2952434.png', 'https://cdn-icons-png.flaticon.com/512/2952/2952859.png']

  }, {
    name: 'tomato',
    check: 0,
    kr: '토마토',
    image: ['https://cdn-icons-png.flaticon.com/512/1413/1413626.png', 'https://cdn-icons-png.flaticon.com/512/1412/1412511.png']

  }, {
    name: 'peanut',
    check: 0,
    kr: '땅콩',
    image: ['https://cdn-icons-png.flaticon.com/512/811/811663.png', 'https://cdn-icons-png.flaticon.com/512/7010/7010784.png']
  }, {
    name: 'chicken',
    check: 0,
    kr: '닭',
    image: ['https://cdn-icons-png.flaticon.com/512/1895/1895685.png', 'https://cdn-icons-png.flaticon.com/512/1895/1895698.png']

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
    image: ['https://cdn-icons-png.flaticon.com/512/8824/8824287.png', 'https://cdn-icons-png.flaticon.com/512/616/616661.png']

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


  },

  {






    name: 'walnut',
    check: 0,
    kr: '호두',
    image: ['https://cdn-icons-png.flaticon.com/512/1951/1951378.png',
      'https://cdn-icons-png.flaticon.com/512/1951/1951379.png']



  }



]



const Recomd = function ({ show, keep }) {
  var hd_Ar = []
  var firs = show.name.split(' ');
  var first = '';
  var second = '';

  if (firs.length >= 2) {
    for (var i = 0; i < 1; i++) {
      first += `${firs[i]} `;

    }
    for (var g = 1; g <= firs.length - 1; g++) {
      second += `${firs[g]} `;
    }

  }
  if (firs.length < 2) {
    first = firs[0];
    second = firs[1];
  }

  const token = useSelector((state) => state.token.token);

  // var fins = fisr.toString()

  const go_page = function (elv) {
    axios.post(`http://15.165.76.99:5000/product/custom`, {
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
        // console.log(`ididididididididid-first`);   console.log(id_check)
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
        mapv.sort((a, b) => {

          if (a.check > b.check) {
            return -1;
          }
          if (a.check < b.check) {
            return 1;
          }

          // names must be equal
          return 0;
        });
        fo = {
          name: elv, ssec: ssec, mapv: mapv, id: id_check
        }
        console.log('뭐가')
        console.log(fo)
        keep(fo)
        //navigation.navigate('Search_item_seconde', { name: elv, ssec: ssec, mapv: mapv, id: id_check })

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
    <TouchableOpacity onPress={() => {
      go_page(show.name)
    }}>
      <View style={{
        width: '90%',

        height: Dimensions.get("window").height / 4.3,
        borderRadius: 5,
        margin: 6,
        marginLeft: 10,
        borderColor: '#FFE978',
        borderWidth: 1,
        backgroundColor: 'white',
        display: 'flex'
      }}>

        <View style={{
          width: 90,
          height: 90,
          margin: 5,
          display: 'flex'
        }}>
          <Image
            style={{
              height: '90%',
              width: '100%',
              margin: 5,
              padding: 0,
              borderRadius: 30,

              //       borderRadius: '50%',
            }}
            source={{ uri: show.image ? show.image : null }}

          />
          <View style={{
            width: '95%',
            height: 30,


            alignItems: 'center',

            marginLeft: 10,
            marginTop: '10%',
            justifyContent: 'space-between'

          }}>


            <Text style={
              {
                fontSize: 11,
                fontFamily: 'Sc',
                textAlign: 'center'
              }
            }>

              {first} </Text>
            <Text style={
              {
                fontSize: 11,
                fontFamily: 'Sc',
                textAlign: 'center'

              }
            }>

              {second} </Text>
          </View>
        </View>



      </View >
    </TouchableOpacity>


  )
}

export default Recomd;
