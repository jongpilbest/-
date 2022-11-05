
import React, { Component, useContext, useEffect, useState } from "react";
import { View, Pressable, Image, Text, ScrollView, Dimensions, FlatList, Button, StyleSheet, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
//import Animated from 'react-native-reanimated';
import Allery_item from "./Allery_item";
import Ingre_item from "./Ingre_item";
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import axios from "axios";
import { Ionicons } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux'
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
import Ms from "../signup/Ms";
import { AntDesign } from '@expo/vector-icons';
const CONTENT = {};
import * as Speech from 'expo-speech';
import { parse } from "react-native-svg";
import { compose } from "@reduxjs/toolkit";
import { useRef } from "react";

//const googleTTS = require('google-tts-api');
//import Tts from 'react-native-tts';
const Barcode_item = ({ navigation }) => {
  let TimeoutId;
  //Tts.setDefaultLanguage('ko-KR');
  var [num, setnum] = useState(0);
  var [num2, setnum2] = useState(0);
  const token = useSelector((state) => state.token.token)
  var [data, setdata] = useState('');
  var [ingr, setingr] = useState([]);
  var [in_ar, setin_ar] = useState([]);
  var [image, setimage] = useState('');
  var [checkk, setcheckk] = useState(0);
  var [a, seta] = useState(0);
  var [b, setb] = useState(0);
  var [c, setc] = useState(0);
  var [d, setd] = useState(0);
  var [e, sete] = useState(0);
  var [f, setf] = useState(0);
  var [g, setg] = useState(0);
  var [h, seth] = useState(0);
  var [gg, setgg] = useState(0);
  var [ggg, setggg] = useState(0);
  const [MS_good, misu] = Ms();
  //var data = '';
  var name = navigation.getParam('name');
  var mapv = navigation.getParam('mapv');
  var ssec = navigation.getParam('ssec');
  //const token = useSelector((state) => state.token.token)
  var ingr_arr = '';

  var id = navigation.getParam('id');
  console.log(`id 체크해보자 ${id}`)


  useEffect(() => {
    axios.get(`http://15.165.76.99:5000/product/detail/${id}`,
      {
        headers: {
          'X-AUTH-TOKEN': token

        }
      }
    ).then((response) => {
      if (response) {

        data = response.data
        console.log(data, '굿')
        var check_name = [
          {
            name: 'mg',
            kr: '밀리그램'
          },
          {
            name: 'g',
            kr: '그램'
          },
          {
            name: 'ml',
            kr: '밀리리터'
          },
          {
            name: 'l'
            , kr: '리터'
          },
          {
            name: 'kcal',
            kr: '칼로리'
          },


        ]



        var hhey__fo = [...data.calorie]
        var index = 0;
        for (var i = 0; i < hhey__fo.length; i++) {
          var ey = parseInt(hhey__fo[i]);
          if (isNaN(ey)) {
            index = i;
            break;

          }
        }
        const result = [data.calorie.slice(0, index), data.calorie.slice(index)];

        check_name.map((el) => {
          if (el.name == result[1]) {
            result[1] = el.kr
          }
        })
        seta(result);


        //


        var h1 = [...data.capacity]
        var index1 = 0;
        for (var i = 0; i < h1.length; i++) {
          var ey = parseInt(h1[i]);
          if (isNaN(ey)) {
            index1 = i;
            break;

          }
        }
        const result2 = [data.capacity.slice(0, index1), data.capacity.slice(index1)];
        check_name.map((el) => {
          if (el.name == result2[1]) {
            result2[1] = el.kr
          }
        })
        console.log('한글', result2)
        // 수정된 한국 이름인지 확인 부탁드립니다.

        setb(result2);
        //
        var h2 = [...data.carbohydrates]
        var index3 = 0;
        for (var i = 0; i < h2.length; i++) {
          var ey = parseInt(h2[i]);
          if (isNaN(ey)) {
            index3 = i;
            break;

          }
        }
        const result4 = [data.carbohydrates.slice(0, index3), data.carbohydrates.slice(index3)];
        check_name.map((el) => {
          if (el.name == result4[1]) {
            result4[1] = el.kr
          }
        })
        setc(result4);
        //

        //


        var h3 = [...data.cholesterol]
        var index4 = 0;
        for (var i = 0; i < h3.length; i++) {
          var ey = parseInt(h3[i]);
          if (isNaN(ey)) {
            index4 = i;
            break;

          }
        }
        const result5 = [data.cholesterol.slice(0, index4), data.cholesterol.slice(index4)];
        check_name.map((el) => {
          if (el.name == result5[1]) {
            result5[1] = el.kr
          }
        })
        setd(result5);

        //

        var h4 = [...data.fat]
        var index5 = 0;
        for (var i = 0; i < h4.length; i++) {
          var ey = parseInt(h3[i]);
          if (isNaN(ey)) {
            index5 = i;
            break;

          }
        }
        const result6 = [+data.fat.slice(0, index5), data.fat.slice(index5)];
        check_name.map((el) => {
          if (el.name == result6[1]) {
            result6[1] = el.kr
          }
        })
        sete(result6);
        //

        var h5 = [...data.natrium]
        var index6 = 0;
        for (var i = 0; i < h5.length; i++) {
          var ey = parseInt(h5[i]);
          if (isNaN(ey)) {
            index6 = i;
            break;

          }
        }
        const result7 = [data.natrium.slice(0, index6), data.natrium.slice(index6)];
        check_name.map((el) => {
          if (el.name == result7[1]) {
            result7[1] = el.kr
          }
        })

        setf(result7)
        //
        var h9 = [...data.protein]
        var index9 = 0;
        for (var i = 0; i < h9.length; i++) {
          var ey = parseInt(h9[i]);
          if (isNaN(ey)) {
            index9 = i;
            break;

          }
        }
        const result9 = [data.protein.slice(0, index9), data.protein.slice(index9)];
        check_name.map((el) => {
          if (el.name == result9[1]) {
            result9[1] = el.kr
          }
        })



        setg(result9);
        //
        var h10 = [...data.sugar]
        var index10 = 0;
        for (var i = 0; i < h10.length; i++) {
          var ey = parseInt(h10[i]);
          if (isNaN(ey)) {
            index10 = i;
            break;

          }
        }
        const result10 = [data.sugar.slice(0, index10), data.sugar.slice(index10)];
        check_name.map((el) => {
          if (el.name == result10[1]) {
            result10[1] = el.kr
          }
        })


        seth(result10);
        //
        var eleten = data.sugar.split('g');
        setgg(eleten)
        //
        var twten = data.trans_fat.split('g')
        setggg(twten);




        setdata(data);
        setingr(data.rawMaterial.split(','));
        setimage(data.image);
        //setUser(response);
      } else {
        alert("failed to ");
      }
    }).catch((err) => {
      console.log(err.message);
      console.log(err)

      console.log('상세정보');
    });

    //var mapv = ['1', '2'];
    console.log('데이터')

  }, [])



  //console.log('상세 정보 내역');
  //console.log(ingr);



  var data_goood = {
    tableHead: ['영양성분', '열량'],
    tableData: [
      ['칼로리', data.calorie],
      ['용량', data.capacity],
      ['탄수화물', data.carbohydrates],
      ['콜레스트롤', data.cholesterol],
      ['지방', data.fat],
      ['나트륨', data.natrium],
      ['단백질', data.protein],
      ['당', data.sugar],
      ['포하지방', data.saturated_fat],
      ['트랜스지방', data.trans_fat]
    ],
  };
  var speak = `칼로리 ${data.calorie}  용량 ${data.capacity} 
   탄수화물 ${data.carbohydrates} 콜레스트롤 ${data.cholesterol} 
   지방 ${data.fat}  나트륨 ${data.natrium} 단백질
  ${data.protein}  당 
  ${data.sugar} 포하지방  ${data.saturated_fat} 트랜스지방
  ${data.trans_fat}`

  var hey = data.calorie;



  var speak_1 = `칼로리 ${a[0]} ${a[1]}  `
  var speak_2 = ` 용량 ${b[0]} ${b[1]} `
  var speak_3 = ` 탄수화물 ${c[0]}  ${c[1]}`
  var speak_4 = ` 콜레스트롤 ${d[0]}  ${d[1]}`
  var speak_5 = ` 지방 ${e[0]}  ${e[1]}`
  var speak_6 = ` 나트륨 ${f[0]}  ${f[1]}`
  var speak_7 = ` 단백질 ${g[0]}  ${g[1]}`
  var speak_8 = ` 당 ${h[0]}  ${h[1]}`
  var speak_9 = ` 당 ${gg} 그램`
  var speak_10 = ` 트랜스지방 ${ggg} 그램`
  console.log('원재료 ')
  console.log(ingr.length)
  var ff = [];
  var first_speak = useRef(null);
  var firr_speak1 = () => {
    first_speak.current = setTimeout(() => {
      Speech.speak(speak_1)
    }, 1000)
  }

  var second_speak = useRef(null);
  var firr_speak2 = () => {
    second_speak.current = setTimeout(() => {
      Speech.speak(speak_2)
    }, 2000)
  }

  var three_speak = useRef(null);
  var firr_speak3 = () => {
    three_speak.current = setTimeout(() => {
      Speech.speak(speak_3)
    }, 3000)
  }
  var four_speak = useRef(null);
  var firr_speak4 = () => {
    four_speak.current = setTimeout(() => {
      Speech.speak(speak_4)
    }, 4000)
  }
  var five_speak = useRef(null);
  var firr_speak5 = () => {
    five_speak.current = setTimeout(() => {
      Speech.speak(speak_5)
    }, 5000)
  }

  var six_speak = useRef(null);
  var firr_speak6 = () => {
    six_speak.current = setTimeout(() => {
      Speech.speak(speak_6)
    }, 6000)
  }

  var seven_speak = useRef(null);
  var firr_speak7 = () => {
    seven_speak.current = setTimeout(() => {
      Speech.speak(speak_7)
    }, 7000)
  }
  var eight_speak = useRef(null);
  var firr_speak8 = () => {
    eight_speak.current = setTimeout(() => {
      Speech.speak(speak_8)
    }, 8000)
  }


  var time_to = [
    `칼로리 ${a[0]} ${a[1]}  `,
    ` 용량 ${b[0]} ${b[1]} `,
    ` 탄수화물 ${c[0]}  ${c[1]}`,
    ` 콜레스트롤 ${d[0]}  ${d[1]}`,
    ` 지방 ${e[0]}  ${e[1]}`,
    ` 나트륨 ${f[0]}  ${f[1]}`,
    ` 단백질 ${g[0]}  ${g[1]}`,
    ` 포화지방 ${h[0]}  ${h[1]}`,
    ` 당 ${gg} 그램`,
    ` 트랜스지방 ${ggg} 그램`]
  const go_to_to = function () {
    // MS_good();
    if (ingr.length > 0) {

      for (var i = 0; i < ingr.length; i += 3) {
        var ff_Ar = [];

        ff_Ar.push(ingr[i], ingr[i + 1], ingr[i + 2]);
        ff.push(ff_Ar);

      }
      console.log('확인해보자')
      console.log(ff);
      setin_ar(ff)

    }




  }
  var ingre = {

    tableData: in_ar
  }

  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false);
  console.log(name)
  const onpress = () => {
    if (num == 0) {
      setModalVisible2(true)
    }
    setnum((pre) => pre + 1)


  }

  const onpress_2 = () => {
    if (num2 == 0) {
      setModalVisible3(true)
    }
    setnum2((pre) => pre + 1)

  }

    ;
  const goto = function () {
    // console.log('좋앙?');
    //console.log(id, name, token)
    if (num == 2) {





      setnum(0);
      return (

        '#D2D2D2'



      )
    }

    else if (num == 1) {



      return (
        '#FF646D'



      )
    }




  }
  const goto_2 = function () {


    if (num2 == 2) {
      console.log(id);
      console.log('비선호 체크하기 ')


      setnum2(0);
      return (

        '#D2D2D2'





      )


    }

    else if (num2 == 1) {



      return (
        '#FF646D'



      )
    }









  }
  var [size, setsize] = useState(10);

  const font_size = function () {
    console.log(size)
    console.log('사이즈')
    setsize((pre) => pre + 1)



  }
  const font_size_minus = function () {
    console.log('초다')

    setsize((pre) => pre - 1)



  }
  const total_siz = function () {
    console.log(size)

    return {


      margin: 6, fontFamily: "Sc",
      fontSize: size,
      color: 'white'


    }
  }
  //const item_show = navigation.getParam('el');
  //var image = (item_show.src)

  return (
    <View style={{ backgroundColor: 'white' }}>
      <Modal
        propagateSwipe={true}
        //scrollTo={true}
        //animationType="slide"
        //scrollHorizontal={true}
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >


        <View style={styles.centeredView}>

          <View style={styles.modalView}>
            <View style={{
              flexDirection: 'row'
            }}>


              <Text style={styles.modalText}>상세정보</Text>
              <Pressable

                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>X</Text>
              </Pressable>
            </View>
            <View style={{
              flexDirection: 'row',

              width: '60%',
              height: '10%',

              marginLeft: 10,
              marginBottom: 10,

            }}>


              <View style={{
                width: 40,
                height: 40,
                backgroundColor: '#ffffff',
                borderRadius: 20,
                margin: 10
              }}>
                <TouchableOpacity onPress={() => {
                  font_size();
                }}>
                  <AntDesign name="plus" style={{
                    margin: 8
                  }} size={24} color="black" />
                </TouchableOpacity>
              </View>

              <View style={{
                width: 40,
                height: 40,
                backgroundColor: '#ffffff',
                borderRadius: 20,
                margin: 10
              }}>
                <TouchableOpacity onPress={() => font_size_minus()} >
                  <AntDesign name="minus" style={{
                    margin: 8
                  }} size={24} color="black" />
                </TouchableOpacity>
              </View>

            </View>
            <ScrollView>
              <View style={{
                flexDirection: 'row',
                alignItems: "center",
                justifyContent: 'center'
              }}>




              </View>
              <View>
                <Text style={styles.modalTextv}>
                  영양성분
                </Text>
                <View style={{
                  flexDirection: 'row'
                }}>


                  <TouchableOpacity onPress={() => {
                    clearTimeout(first_speak.current);
                    clearTimeout(second_speak.current);
                    clearTimeout(three_speak.current);
                    clearTimeout(four_speak.current);
                    clearTimeout(five_speak.current);
                    clearTimeout(six_speak.current);
                    clearTimeout(seven_speak.current);
                    clearTimeout(eight_speak.current);
                    Speech.stop();
                  }



                  }>

                    <View style={{
                      width: 40,
                      height: 40,
                      backgroundColor: '#ffffff',
                      borderRadius: 20, margin: 10
                    }}>


                      <AntDesign name="pause" style={{
                        margin: 8
                      }} size={24} color="black" />
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => {

                    firr_speak1();
                    firr_speak2();
                    firr_speak3();
                    firr_speak4();
                    firr_speak5();
                    firr_speak6();
                    firr_speak7();
                    firr_speak8();
                    /*
                    Speech.speak(speak_1, {
                      rate: 0.8
                    });
                    setTimeout(() => Speech.speak(speak_2, {
                      rate: 0.8
                    }), 1000);
                    setTimeout(() => Speech.speak(speak_3, {
                      rate: 0.8
                    }), 2000);
                    setTimeout(() => Speech.speak(speak_4, {
                      rate: 0.8
                    }), 3000);
                    setTimeout(() => Speech.speak(speak_5, {
                      rate: 0.8
                    }), 4000);
                    setTimeout(() => Speech.speak(speak_6, {
                      rate: 0.8
                    }), 5000);
                    setTimeout(() => Speech.speak(speak_7, {
                      rate: 0.8
                    }), 6000);
                    setTimeout(() => Speech.speak(speak_8, {
                      rate: 0.8
                    }), 7000);
                    setTimeout(() => Speech.speak(speak_9, {
                      rate: 0.8
                    }), 8000);
                    setTimeout(() => Speech.speak(speak_10, {
                      rate: 0.8
                    }), 9000);
  */
                  }}>
                    <View style={{
                      width: 40,
                      height: 40,
                      backgroundColor: '#ffffff',
                      borderRadius: 20, margin: 10
                    }}>
                      <MaterialIcons name="speaker" style={{
                        margin: 8
                      }} size={24} color="black" />
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={styles.container}>
                  <ScrollView>


                    <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                      <Row data={data_goood.tableHead} style={styles.head} textStyle={styles.text} />
                      <Rows data={data_goood.tableData} textStyle={total_siz()} />
                    </Table>

                  </ScrollView>
                </View>

              </View>
              <View>
                <Text style={styles.modalTextv}>
                  원재료
                </Text>
                <View style={styles.container_2}>
                  <ScrollView>
                    <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>

                      <Rows data={ingre.tableData} textStyle={total_siz()} />
                    </Table>
                  </ScrollView>
                </View>
              </View>
            </ScrollView>
          </View>

        </View >

      </Modal >
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible3}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible3(!modalVisible3);
        }}>
        <View style={styles.centeredView2}>
          <View style={styles.modalView2}>
            <Text style={{
              color: 'white',
              fontSize: 19,
              textAlign: 'center',
              fontFamily: "Sc"

            }}>
              비선호상품이 등록됐습니다
            </Text>
            <View style={{
              flexDirection: 'row',
              marginTop: 20,

            }}>
              <TouchableOpacity onPress={() => {
                //delete_all()

                setModalVisible3(!modalVisible3)

                //navigation.navigate('Edit')
              }}>
                <View style={{
                  width: 100,
                  backgroundColor: '#FFE978',
                  height: 30,
                  borderRadius: 20,
                  marginLeft: 60
                }}>
                  <Text style={{
                    fontSize: 20,
                    color: '#444040', fontWeight: 'bold',
                    textAlign: 'center',
                    flexDirection: 'row',
                    fontFamily: "Sc",

                    margin: 3
                  }}>
                    확인
                  </Text>

                </View>

              </TouchableOpacity>

            </View>

          </View>

        </View>
      </Modal >
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible2}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible2);
        }}>
        <View style={styles.centeredView2}>
          <View style={styles.modalView2}>
            <Text style={{
              color: 'white',
              fontSize: 20,
              textAlign: 'center',
              fontFamily: "Sc"

            }}>
              선호상품이 등록됐습니다
            </Text>
            <View style={{
              flexDirection: 'row',
              marginTop: 20,

            }}>
              <TouchableOpacity onPress={() => {
                //delete_all()

                setModalVisible2(!modalVisible2)

                //navigation.navigate('Edit')
              }}>
                <View style={{
                  width: 100,
                  backgroundColor: '#FFE978',
                  height: 30,
                  borderRadius: 20,
                  marginLeft: 60
                }}>
                  <Text style={{
                    fontSize: 20,
                    color: '#444040', fontWeight: 'bold',
                    textAlign: 'center',
                    flexDirection: 'row',
                    fontFamily: "Sc",

                    margin: 3
                  }}>
                    확인
                  </Text>

                </View>

              </TouchableOpacity>

            </View>

          </View>

        </View>
      </Modal >




      <View style={{


        backgroundColor: 'white'
      }}>

        <View style={{
          width: '100%',
          height: '20%',

        }}>
          <TouchableOpacity onPress={() => {

            console.log('엥')
            navigation.pop()
          }}>
            <Ionicons style={{
              marginTop: '5%',
              marginLeft: 15
            }} name="arrow-back-circle" size={50} color="black" />

          </TouchableOpacity>
        </View>

        <View style={{
          width: '80%',
          height: Dimensions.get("window").height / 2.5,

          marginLeft: 40,
          borderRadius: 40,
          backgroundColor: '#DDEEF2',


        }}>
          <Image
            style={{
              height: '100%',
              width: '100%',
              margin: 0,
              padding: 0,

              //       borderRadius: '50%',
            }}
            source={{ uri: image ? image : null }}
          //source={{ uri: image }}
          />

        </View>
        <View style={{
          margin: 10,

        }}>

          <View style={{

          }}>


            <Text style={

              {
                fontSize: 20,

                textAlign: 'center',
                fontFamily: "Nam-Regular",



              }
            }>
              {name}
              {/*item_show.kr*/}
            </Text>
          </View>
          <Text style={

            {
              fontSize: 30,
              textAlign: 'center',


            }
          }>
            {/*item_show.company*/}
          </Text>
          <View style={{ flexDirection: 'row', }}>

            <View style={{
              backgroundColor: '#FFE978',
              width: 100,
              height: 35,
              borderRadius: 20,
              marginLeft: 25,
              flexDirection: 'row'
            }}>

              <TouchableOpacity onPress={() => {
                go_to_to();




                setModalVisible(true)

              }}>
                <Text style={{
                  fontSize: 14,
                  textAlign: 'center',
                  marginTop: 10,
                  marginLeft: 20,
                  textAlign: 'center',
                  fontFamily: "Nam-Regular",

                }}>상세정보</Text>

              </TouchableOpacity>
            </View>



            <View style={{


              marginLeft: 50,

              width: '100%',
              height: 35,
              flexDirection: 'row'



            }}>
              <View style={{
                marginLeft: 40,

              }}>


                <TouchableOpacity onPress={() => {


                  axios.put(`http://15.165.76.99:5000/dislikeproduct/${id}`,
                    {},

                    {
                      headers: {
                        'X-AUTH-TOKEN': token


                      }
                    }
                  ).then((response) => {
                    if (response) {
                      console.log('비선호 상품 등록');
                      // console.log(response.data)
                      // setcheck(response.data);
                      console.log('?');
                      console.log(response.data)
                      //setUser(response);
                    } else {
                      alert("failed to ");
                    }
                  }).catch((err) => {
                    console.log(err.message);
                    console.log(err)

                    console.log('에러 메세지/비선호 식품');
                  });





                  onpress_2();

                }}>
                  <AntDesign name="dislike2" size={30} color={
                    goto_2()
                  } style={{
                    marginRight: 10,
                  }} />

                </TouchableOpacity>
              </View>
              <View style={{


                marginLeft: 40,




              }}>


                <TouchableOpacity onPress={() => {


                  // setModalVisible2(true)

                  axios.put(`http://15.165.76.99:5000/likeproduct/${id}`,
                    {},

                    {
                      headers: {
                        'X-AUTH-TOKEN': token


                      }
                    }
                  ).then((response) => {
                    if (response) {
                      console.log('선호 상품 등록');
                      // console.log(response.data)
                      // setcheck(response.data);
                      console.log('?');
                      console.log(response.data)

                      //setUser(response);
                    } else {
                      alert("failed to ");
                    }
                  }).catch((err) => {
                    console.log(err.message);
                    console.log(err)

                    console.log('에러 메세지/비선호 식품');
                  });

                  onpress();


                }}>

                  <Feather name="heart" size={30} color={
                    goto()
                  } style={{
                    marginRight: 10,
                  }} />
                </TouchableOpacity>


              </View>
            </View>


          </View>

        </View>







      </View>




      <View style={{
        width: '100%',
        height: Dimensions.get("window").height / 3,
        backgroundColor: '#FFE978',

        flexDirection: 'row',


        // justifyContent: 'space-between',

        // justifyContent: 'flex-start',
        //flexWrap: 'wrap'
      }}>


        <ScrollView
          horizontal={true}
          showsVerticalScrollIndicator={false}
          // showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
        >

          <View style={{
            width: '100%',

            flexDirection: 'row',

          }}>
            {

              mapv.map((el, index) => {
                return <Allery_item key={index
                } show={el} ></Allery_item>
              })}
            {

              ssec.map((el, index) => {
                return <Ingre_item key={index
                } show={el} ></Ingre_item>
              })}

          </View>

        </ScrollView>




      </View>


    </View >


  )
}
Search_item_seconde.navigationOptions = () => {
  return {
    header: () => false,
  };
};

const styles = StyleSheet.create({
  container: {
    width: '100%', height: 400
    , padding: 16, paddingTop: 30,
  },
  container_2: {
    width: '100%', height: 850
    , padding: 16, paddingTop: 30,
  },

  head: { height: 40, backgroundColor: '#f1f8ff' },


  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    width: '90%',
    height: '90%',
    margin: 20,
    backgroundColor: "#545252",
    opacity: 0.96,

    borderRadius: 20,
    padding: 35,
    //alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "transparent",
  },
  buttonClose: {
    backgroundColor: "transparent",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 40,
    fontFamily: "Sc"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontFamily: "Sc",
    fontSize: 30,
    color: '#ffffff',
    marginLeft: 50

  },
  modalTextv: {
    marginBottom: 20,
    fontFamily: "Sc",
    fontSize: 20,
    marginTop: 20,
    color: '#FFFFFF',


  }




  ,
  centeredView2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView2: {
    width: '90%',
    height: '20%',
    margin: 20,
    backgroundColor: "#545252",
    opacity: 0.98,

    //b//orderRadius: 20,
    padding: 35,
    //alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    position: 'relative'
  },
  button2: {
    //orderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen2: {
    backgroundColor: "#545252",
  },
  buttonClose2: {
    backgroundColor: "#545252",
  },
  textStyle2: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20

  },
  modalText2: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 30,
    color: 'white',
    fontFamily: "Sc"


  },
  modalTextv2: {
    marginBottom: 15,

    fontSize: 30,
    color: '#71A6E3'

  }


})
export default Barcode_item;