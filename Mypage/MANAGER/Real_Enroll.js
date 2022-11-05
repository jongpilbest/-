
import { useSelector, useDispatch } from 'react-redux'
import React, { useState, useContext, useEffect } from "react"
import { View, TextInput, TouchableOpacity, Button, StyleSheet, Text } from "react-native"
//import { Context } from '../contextv/DetailContext'
//import { authAction } from "../redux/auth";
//import { cos } from 'react-native-reanimated';
//import { counterActions } from "../store"


import Componn from '../../signup/Componn'
import Modal from "react-native-modal";
import axios from "axios"
import { Ionicons } from '@expo/vector-icons';
//import Manager_Enroll from './Manager_Enroll';
import REal_Com from './REal_Com';
import { ScrollView } from 'react-native-gesture-handler';
import Componcopy from '../../signup/Componcopy'
import * as Notifications from 'expo-notifications';

import { authAction } from '../../redux/auth'
const Real_Enroll = function ({ navigation }) {

  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  var arry_list = useSelector((state) => state.auth.array_list)
  var [zero, setZero] = useState(0);
  var item = navigation.getParam('data');
  console.log(item)
  var new_item = Object.entries(item);
  console.log('뭐가 들었니')
  console.log(new_item)
  var n_new = new_item.splice(4, 1);

  var go_allergy = [
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
      name: 'peanut',
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


    },
    {
      name: 'walnut',
      check: 0,
      kr: '호두'


    }]





  console.log(new_item);

  var [first, setfirst] = useState('');

  var [second, setsecond] = useState('');

  var [third, setthird] = useState('');

  var [fifth, setfifth] = useState('');

  var [five, setfive] = useState('');

  var [six, setsix] = useState('');


  var [seven, setseven] = useState('');


  var [eight, seteight] = useState('');


  var [nine, setnine] = useState('');


  var [ten, setten] = useState('');
  var [go, setgo] = useState('');
  var [gogo, setgogo] = useState('');
  const mos_v = useSelector((state) => state.auth.ingredient)
  const misugo = function (el) {
    dispatch(authAction.setallergy_1(el))


  }
  const mos = useSelector((state) => state.auth.allergy)
  useEffect(() => {
    dispatch(authAction.setallergy_zero());


    if (item) {
      setZero(1);

    }
  }, [])

  var ob = {

  }

  const good_final = function () {
    console.log('들어잇니')
    console.log(arry_list);

    go_allergy.map(el => {
      arry_list.map(va => {
        if (el.kr == va) {
          el.check = 1;

        }

      })

    })

    for (var pro in go_allergy) {
      var cc = (go_allergy[pro]);
      var oj_ = Object.values(cc);
      console.log(oj_)
      ob[oj_[0]] = oj_[1];


    }
    console.log('내역확인')
    console.log(ob)
    const fir = {
      "type": go,
      "rawMaterial": gogo,
      "natrium": first,
      "carbohydrates": second,
      "sugar": third,
      "fat": five,
      "trans_fat": six,
      "saturated_fat": seven,
      "cholesterol": eight,
      "protein": fifth,
      "calorie": eight,
      "capacity": ten,
      "image": item.product_image,
      "userId": item.userId,
      "name": item.name,
      "barcode": item.barcode,
      "brand": item.brand,

    }
    //const fir_s =
    //    const conff = Object.assign(item, ob);
    const fi_conff = Object.assign(ob, fir);

    console.log('서버에 보내기전 마지막');
    console.log(fi_conff);
    setModalVisible(true)

    axios.post("http://15.165.76.99:5000/adminFun/newProduct", fi_conff).then((response) => {
      if (response) {
        console.log('?? first');
        total_response = response.data
        console.log(response.data)
        dispatch(authAction.setallergy_zero())
        dispatch(authAction.setingre_zero())

        setModalVisible(true)


      }
    }).catch((err) => {
      console.log(err);
      console.log(err.message);

    });





  }

  return (

    <View style={{
      width: '100%',
      height: '100%',
      backgroundColor: '#F2F2F2'
      // flexDirection: 'row'
    }}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView2}>
          <View style={styles.modalView2}>
            <Text style={{
              color: 'white',
              fontSize: 18,
              textAlign: 'center',
              fontFamily: "Sc"

            }}>
              상품이 등록 되었습니다
            </Text>
            <View style={{
              flexDirection: 'row',
              marginTop: 20,

            }}>
              <TouchableOpacity onPress={() => {
                //delete_all()

                setModalVisible(!modalVisible)

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
                    fontSize: 18,
                    color: '#444040',
                    textAlign: 'center',
                    flexDirection: 'row',
                    fontFamily: "Nam-Regular",
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
          marginTop: 40,
          marginLeft: 70,
          position: 'absolute',


          fontFamily: "Sc"
        }}>상품등록</Text>
      </View>




      <ScrollView>
        <View style={{
          width: '100%',
          height: 2200,
          backgroundColor: '#F2F2F2'
        }}>

          {zero == 1 &&

            new_item.map((el, index) => {
              return <REal_Com key={index} data={el}></REal_Com>

            })

          }

          <View style={{

            width: 300,
            height: 50,
            backgroundColor: '#FFE978',
            margin: 10,
            borderRadius: 20,
            // alignContent: 'center',
            alignSelf: 'center',
            flexDirection: 'row'

          }} >
            <View style={{
              width: '40%',
              marginTop: 10
            }}>
              <Text style={{

                fontFamily: 'Sc',
                fontSize: 17,
                textAlign: 'center'
              }}>
                종류

              </Text>
            </View>
            <View style={{
              width: '50%',
              backgroundColor: 'white',
              height: 30,
              marginTop: 10
            }}>


              <TextInput
                style={{
                  width: '100%',
                  height: '80%',

                  borderColor: 'transparent',

                  justifyContent: 'center',
                  alignSelf: 'center',
                  backgroundColor: 'white',

                  // padding: 20,
                  fontSize: 15, fontFamily: "Sc"

                }}
                placeholder="입력해주세요"
                placeholderTextColor={'#B9B9B9'}
                value={go}
                autoCorrect={false}
                //secureTextEntry={true}
                onChangeText={(ele) => setgo(ele)}>

              </TextInput>



            </View>





          </View>
          <View style={{

            width: 300,
            height: 50,
            backgroundColor: '#FFE978',
            margin: 10,
            borderRadius: 20,
            // alignContent: 'center',
            alignSelf: 'center',
            flexDirection: 'row'

          }} >
            <View style={{
              width: '40%',
              marginTop: 10
            }}>
              <Text style={{

                fontFamily: 'Sc',
                fontSize: 17,
                textAlign: 'center'
              }}>
                원재료

              </Text>
            </View>
            <View style={{
              width: '50%',
              backgroundColor: 'white',
              height: 30,
              marginTop: 10
            }}>


              <TextInput
                style={{
                  width: '100%',
                  height: '80%',

                  borderColor: 'transparent',

                  justifyContent: 'center',
                  alignSelf: 'center',
                  backgroundColor: 'white',

                  // padding: 20,
                  fontSize: 15, fontFamily: "Sc"

                }}
                placeholder="입력해주세요"
                placeholderTextColor={'#B9B9B9'}
                value={gogo}
                autoCorrect={false}
                //secureTextEntry={true}
                onChangeText={(ele) => setgogo(ele)}>

              </TextInput>



            </View>





          </View>




          <View>
            <Text style={{

              fontFamily: 'Sc',
              fontSize: 18,
              textAlign: 'center',
              margin: 10,
            }}>
              알레르기
            </Text>
          </View>



          <View style={styles.frined}>

            {mos.map((el, index) => {
              return < Componn key={index} gogo={(el) => misugo(el)} vale={el}></Componn>
            })
            }

          </View>


          <View style={{

            width: 300,
            height: 60,
            backgroundColor: '#FFE978',
            margin: 10,
            borderRadius: 20,
            // alignContent: 'center',
            alignSelf: 'center',
            flexDirection: 'row'

          }} >
            <View style={{
              width: '40%',
              marginTop: 20
            }}>
              <Text style={{

                fontFamily: 'Sc',
                fontSize: 17,
                textAlign: 'center'
              }}>

                나트륨
              </Text>
            </View>
            <View style={{
              width: '50%',
              backgroundColor: 'white',
              height: 30,
              marginTop: 10
            }}>



              <TextInput
                style={{
                  width: '100%',
                  height: '100%',

                  borderColor: 'transparent',
                  margin: 10,
                  justifyContent: 'center',
                  alignSelf: 'center',
                  backgroundColor: 'white',

                  // padding: 20,
                  fontSize: 15, fontFamily: "Sc"

                }}
                placeholder="입력해주세요"
                placeholderTextColor={'#B9B9B9'}
                value={first}
                autoCorrect={false}
                //secureTextEntry={true}
                onChangeText={(ele) => setfirst(ele)}>

              </TextInput>



            </View>





          </View>
          <View style={{

            width: 300,
            height: 60,
            backgroundColor: '#FFE978',
            margin: 10,
            borderRadius: 20,
            // alignContent: 'center',
            alignSelf: 'center',
            flexDirection: 'row'

          }} >
            <View style={{
              width: '40%',
              marginTop: 20
            }}>
              <Text style={{

                fontFamily: 'Sc',
                fontSize: 17,
                textAlign: 'center'
              }}>

                탄수화물
              </Text>
            </View>
            <View style={{
              width: '50%',
              backgroundColor: 'white',
              height: 30,
              marginTop: 10
            }}>



              <TextInput
                style={{
                  width: '100%',
                  height: '100%',

                  borderColor: 'transparent',
                  margin: 10,
                  justifyContent: 'center',
                  alignSelf: 'center',
                  backgroundColor: 'white',

                  // padding: 20,
                  fontSize: 15, fontFamily: "Sc"

                }}
                placeholder="입력해주세요"
                placeholderTextColor={'#B9B9B9'}
                value={second}
                autoCorrect={false}
                //secureTextEntry={true}
                onChangeText={(ele) => setsecond(ele)}>

              </TextInput>



            </View>





          </View>


          <View style={{

            width: 300,
            height: 60,
            backgroundColor: '#FFE978',
            margin: 10,
            borderRadius: 20,
            // alignContent: 'center',
            alignSelf: 'center',
            flexDirection: 'row'

          }} >
            <View style={{
              width: '40%',
              marginTop: 20
            }}>
              <Text style={{

                fontFamily: 'Sc',
                fontSize: 17,
                textAlign: 'center'
              }}>

                단백질
              </Text>
            </View>
            <View style={{
              width: '50%',
              backgroundColor: 'white',
              height: 30,
              marginTop: 10
            }}>



              <TextInput
                style={{
                  width: '100%',
                  height: '100%',

                  borderColor: 'transparent',
                  margin: 10,
                  justifyContent: 'center',
                  alignSelf: 'center',
                  backgroundColor: 'white',

                  // padding: 20,
                  fontSize: 15, fontFamily: "Sc"

                }}
                placeholder="입력해주세요"
                placeholderTextColor={'#B9B9B9'}
                value={fifth}
                autoCorrect={false}
                //secureTextEntry={true}
                onChangeText={(ele) => setfifth(ele)}>

              </TextInput>



            </View>





          </View>



          <View style={{

            width: 300,
            height: 60,
            backgroundColor: '#FFE978',
            margin: 10,
            borderRadius: 20,
            // alignContent: 'center',
            alignSelf: 'center',
            flexDirection: 'row'

          }} >
            <View style={{
              width: '40%',
              marginTop: 20
            }}>
              <Text style={{

                fontFamily: 'Sc',
                fontSize: 17,
                textAlign: 'center'
              }}>

                당
              </Text>
            </View>
            <View style={{
              width: '50%',
              backgroundColor: 'white',
              height: 30,
              marginTop: 10
            }}>



              <TextInput
                style={{
                  width: '100%',
                  height: '100%',

                  borderColor: 'transparent',
                  margin: 10,
                  justifyContent: 'center',
                  alignSelf: 'center',
                  backgroundColor: 'white',

                  // padding: 20,
                  fontSize: 15, fontFamily: "Sc"

                }}
                placeholder="입력해주세요"
                placeholderTextColor={'#B9B9B9'}
                value={third}
                autoCorrect={false}
                //secureTextEntry={true}
                onChangeText={(ele) => setthird(ele)}>

              </TextInput>



            </View>





          </View>
          <View style={{

            width: 300,
            height: 60,
            backgroundColor: '#FFE978',
            margin: 10,
            borderRadius: 20,
            // alignContent: 'center',
            alignSelf: 'center',
            flexDirection: 'row'

          }} >
            <View style={{
              width: '40%',
              marginTop: 20
            }}>
              <Text style={{

                fontFamily: 'Sc',
                fontSize: 17,
                textAlign: 'center'
              }}>

                지방
              </Text>
            </View>
            <View style={{
              width: '50%',
              backgroundColor: 'white',
              height: 30,
              marginTop: 10
            }}>



              <TextInput
                style={{
                  width: '100%',
                  height: '100%',

                  borderColor: 'transparent',
                  margin: 10,
                  justifyContent: 'center',
                  alignSelf: 'center',
                  backgroundColor: 'white',

                  // padding: 20,
                  fontSize: 15, fontFamily: "Sc"

                }}
                placeholder="입력해주세요"
                placeholderTextColor={'#B9B9B9'}
                value={five}
                autoCorrect={false}
                //secureTextEntry={true}
                onChangeText={(ele) => setfive(ele)}>

              </TextInput>



            </View>





          </View>

          <View style={{

            width: 300,
            height: 60,
            backgroundColor: '#FFE978',
            margin: 10,
            borderRadius: 20,
            // alignContent: 'center',
            alignSelf: 'center',
            flexDirection: 'row'

          }} >
            <View style={{
              width: '40%',
              marginTop: 20
            }}>
              <Text style={{

                fontFamily: 'Sc',
                fontSize: 17,
                textAlign: 'center'
              }}>

                트랜스지방
              </Text>
            </View>
            <View style={{
              width: '50%',
              backgroundColor: 'white',
              height: 30,
              marginTop: 10
            }}>



              <TextInput
                style={{
                  width: '100%',
                  height: '100%',

                  borderColor: 'transparent',
                  margin: 10,
                  justifyContent: 'center',
                  alignSelf: 'center',
                  backgroundColor: 'white',

                  // padding: 20,
                  fontSize: 15, fontFamily: "Sc"

                }}
                placeholder="입력해주세요"
                placeholderTextColor={'#B9B9B9'}
                value={six}
                autoCorrect={false}
                //secureTextEntry={true}
                onChangeText={(ele) => setsix(ele)}>

              </TextInput>



            </View>
          </View>

          <View style={{

            width: 300,
            height: 60,
            backgroundColor: '#FFE978',
            margin: 10,
            borderRadius: 20,
            // alignContent: 'center',
            alignSelf: 'center',
            flexDirection: 'row'

          }} >
            <View style={{
              width: '40%',
              marginTop: 20
            }}>
              <Text style={{

                fontFamily: 'Sc',
                fontSize: 17,
                textAlign: 'center'
              }}>

                포화지방
              </Text>
            </View>
            <View style={{
              width: '50%',
              backgroundColor: 'white',
              height: 30,
              marginTop: 10
            }}>



              <TextInput
                style={{
                  width: '100%',
                  height: '100%',

                  borderColor: 'transparent',
                  margin: 10,
                  justifyContent: 'center',
                  alignSelf: 'center',
                  backgroundColor: 'white',

                  // padding: 20,
                  fontSize: 15, fontFamily: "Sc"

                }}
                placeholder="입력해주세요"
                placeholderTextColor={'#B9B9B9'}
                value={seven}
                autoCorrect={false}
                //secureTextEntry={true}
                onChangeText={(ele) => setseven(ele)}>

              </TextInput>



            </View>
          </View>
          <View style={{

            width: 300,
            height: 60,
            backgroundColor: '#FFE978',
            margin: 10,
            borderRadius: 20,
            // alignContent: 'center',
            alignSelf: 'center',
            flexDirection: 'row'

          }} >
            <View style={{
              width: '40%',
              marginTop: 20
            }}>
              <Text style={{

                fontFamily: 'Sc',
                fontSize: 17,
                textAlign: 'center'
              }}>
                칼로리
              </Text>
            </View>
            <View style={{
              width: '50%',
              backgroundColor: 'white',
              height: 30,
              marginTop: 10
            }}>



              <TextInput
                style={{
                  width: '100%',
                  height: '100%',

                  borderColor: 'transparent',
                  margin: 10,
                  justifyContent: 'center',
                  alignSelf: 'center',
                  backgroundColor: 'white',

                  // padding: 20,
                  fontSize: 15, fontFamily: "Sc"

                }}
                placeholder="입력해주세요"
                placeholderTextColor={'#B9B9B9'}
                value={eight}
                autoCorrect={false}
                //secureTextEntry={true}
                onChangeText={(ele) => seteight(ele)}>

              </TextInput>



            </View>
          </View>
          <View style={{

            width: 300,
            height: 60,
            backgroundColor: '#FFE978',
            margin: 10,
            borderRadius: 20,
            // alignContent: 'center',
            alignSelf: 'center',
            flexDirection: 'row'

          }} >
            <View style={{
              width: '40%',
              marginTop: 20
            }}>
              <Text style={{

                fontFamily: 'Sc',
                fontSize: 17,
                textAlign: 'center'
              }}>

                용량
              </Text>
            </View>
            <View style={{
              width: '50%',
              backgroundColor: 'white',
              height: 30,
              marginTop: 10
            }}>



              <TextInput
                style={{
                  width: '100%',
                  height: '100%',

                  borderColor: 'transparent',
                  margin: 10,
                  justifyContent: 'center',
                  alignSelf: 'center',
                  backgroundColor: 'white',

                  // padding: 20,
                  fontSize: 15, fontFamily: "Sc"

                }}
                placeholder="입력해주세요"
                placeholderTextColor={'#B9B9B9'}
                value={ten}
                autoCorrect={false}
                //secureTextEntry={true}
                onChangeText={(ele) => setten(ele)}>

              </TextInput>
            </View>

          </View>
          <TouchableOpacity onPress={() => {

            good_final();

            fetch("https://exp.host/--/api/v2/push/send", {

              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                to: 'ExponentPushToken[ZkctWDHsMuYDNcBgVqKEGL]',
                title: '등록이 완료 됐습니다',
                body: '지금 확인해 보세요'
              })
            })
          }}>
            <View
              style={{
                display: 'flex',
                width: 300,
                height: 60,
                backgroundColor: '#FF4444',
                margin: 10,
                borderRadius: 20,
                // alignContent: 'center',
                alignSelf: 'center',
                flexDirection: 'row',


              }}

            >
              <Text style={{

                fontFamily: 'Sc',
                fontSize: 20,
                textAlign: 'center',

                marginLeft: '45%',
                marginTop: '5%',
                color: 'white'
              }}>

                등록
              </Text>

            </View>
          </TouchableOpacity>
        </View>


      </ScrollView>


    </View>


  )


}

const styles = StyleSheet.create({


  border: {
    width: '94%',
    height: 400,

    borderWidth: 3,
    margin: 3,
    marginLeft: 10,
    borderColor: 'transparent'


  },
  frined_2: {

    flexDirection: 'row',
    borderRadius: 20,
    height: 350,
    // justifyContent: 'space-between',
    backgroundColor: '#FFE978',
    // justifyContent: 'flex-start',
    flexWrap: 'wrap'
  },
  frined: {
    width: '94%',
    marginLeft: 10,
    flexDirection: 'row',
    borderRadius: 20,
    height: 700,
    // justifyContent: 'space-between',
    backgroundColor: '#FFE978',
    // justifyContent: 'flex-start',
    flexWrap: 'wrap'
  },
  container: {
    width: '100%', height: 330
    , padding: 16, paddingTop: 30, backgroundColor: '#fff'
  },
  container_2: {
    width: '100%', height: 250
    , padding: 16, paddingTop: 30, backgroundColor: '#fff'
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
    backgroundColor: "#545252",
  },
  buttonClose: {
    backgroundColor: "#545252",
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
    color: '#FFFFFF'

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

Real_Enroll.navigationOptions = () => {
  return {
    header: () => false,
  };
};


export default Real_Enroll;
