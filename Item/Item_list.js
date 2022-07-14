
import React, { useContext, useEffect } from "react";
import { View, Text, FlatList, Button, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
//import d from '../assets/Item/01.png'
//import { Context } from '../contextv/DetailContext'
import Componn from "../signup/Componn"
import Component_item from "./Component_item";
import SeachBar from '../signup/SearchBar'
import Ms from "../signup/Ms";
import Search_ITEM from "./Search_ITEM";
import first from "../signup/first";
//import { requestFrame } from "react-native-reanimated/lib/reanimated2/core";

var chekc = -1;
var chek = 0;
var text_input = 0;

const Item_list = ({ navigation }) => {
  const [MS_good, misu] = Ms();

  //const { im_Si_item } = useContext(Context);
  var mosv = [{

    name: '봉봉',
    item: '음료',
    company: '롯데',
    src: require('../assets/item/01.png')

  }, {
    name: '구운감자',
    item: '과자',
    company: '롯데',
    src: require('../assets/item/02.PNG')


  },
  {
    name: '밀키스',
    item: '음료',
    company: '칠성',
    src: require('../assets/item/03.PNG')


  },
  {
    name: '콘칩',
    item: '과자',
    company: '칠성',
    src: require('../assets/item/04.png')


  },
  ]

  console.log('변민호 ');
  //console.log(state_state)
  const check_most = function (el) {

    if (el == "") {



      text_input = 1;

      return;

    }
    // 이름으로 했을때
    // 품목으로 했을때 

    chek = mosv.filter(evlv => {
      return evlv.name == el
    })

    // console.log(chek);


    if (chek == 0) {
      chek = mosv.filter(evlv => {
        return evlv.item == el
      })
    }

    console.log(chek)


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
      // console.log('11인데요')
      chekc = 10;
      return true;
    }
    else
      // console.log('11아닌데요 ')
      return false;

  }

  const gopage = function (el) {
    navigation.navigate('Item_inner', { el: el })

  }
  //여기까지 함수 쓴느거
  return (
    <View>


      <Search_ITEM onfinsh={(vl) => {
        MS_good()

        check_most(vl);
      }} >

      </Search_ITEM>

      {
        text_input == 1 && <Text style={{
          fontSize: 22,
          color: '#545252',
          marginLeft: 20,

          fontWeight: 'bold'
        }}>
          검색되는 상품이 없습니다

        </Text>
      }
      <View style={{
        height: '100%'
      }}>


        <ScrollView style={styles.border}>



          <View style={styles.frined}>



            {



              chekc == 11 && check_good() && chek.map((el, index) => {
                //console.log(el);


                return (
                  <View key={index}>



                    < Component_item key={index} vale={el} touch={(vv) => gopage(vv)} ></Component_item>

                    <Text>[{el.company}] {el.name}</Text>



                  </View>
                )
              })

            }




          </View>



        </ScrollView>
      </View >
    </View >
  )


}

const styles = StyleSheet.create({


  border: {
    width: '90%',
    height: 800,

    borderWidth: 3,
    margin: 10,
    borderColor: 'transparent'


  },
  frined: {

    flexDirection: 'row',

    height: 600,
    // justifyContent: 'space-between',
    backgroundColor: 'white',
    // justifyContent: 'flex-start',
    flexWrap: 'wrap'
  }




})
export default Item_list;