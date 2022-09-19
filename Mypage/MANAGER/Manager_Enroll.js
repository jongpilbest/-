
import { useSelector, useDispatch } from 'react-redux'
import React, { useState, useContext, useEffect } from "react"
import { View, TextInput, TouchableOpacity, Button, StyleSheet, Text } from "react-native"
//import { Context } from '../contextv/DetailContext'
//import { authAction } from "../redux/auth";
//import { cos } from 'react-native-reanimated';
//import { counterActions } from "../store"
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
import axios from "axios"
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
//import { useSelector, useDispatch } from 'react-redux'







//import Manager_Com from './Manager_Com';
const Manager_Enroll = function ({ navigation }) {

  const token = useSelector((state) => state.token.token)
  console.log(token)
  const [enroll, setenroll] = useState([]);
  const hey = [
    {
      "name": "과자자",
      "brand": "삼양",
      "product_image": "대충 이미지2",
      "info_image": "대충 이미지",
      "barcode": "123456789",
      "enable": 0,
      "userId": 1,
      "userNickname": "bb3"
    },
    {
      "name": "과자2",
      "brand": "농심",
      "product_image": "이미지2",
      "info_image": "이미지2",
      "barcode": "456789",
      "enable": 1,
      "userId": 1,
      "userNickname": "bb3"
    }, {
      "name": "과자2",
      "brand": "농심",
      "product_image": "이미지2",
      "info_image": "이미지2",
      "barcode": "456789",
      "enable": 1,
      "userId": 1,
      "userNickname": "bb3"
    }, {
      "name": "과자2",
      "brand": "농심",
      "product_image": "이미지2",
      "info_image": "이미지2",
      "barcode": "456789",
      "enable": 1,
      "userId": 1,
      "userNickname": "bb3"
    }
  ]






  useEffect(() => {

    axios.get("http://14.37.76.88:5000/adminFun/requestProductList",

      {
        headers: {
          'X-AUTH-TOKEN': token

        }
      }
    ).then((response) => {
      if (response) {
        console.log('상품등록 상품');
        console.log(response.data)
        setenroll(response.data)
        //setUser(response);
      } else {
        alert("failed to ");
      }
    }).catch((err) => {
      console.log(err.message);
      console.log(err)
      console.log('?');
    });

  }, [])

  return (

    <View style={{
      width: '100%',
      height: '100%',
      // flexDirection: 'row'
      backgroundColor: 'white'
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
          marginTop: 40,
          marginLeft: 70,
          position: 'absolute',


          fontFamily: "Nam-Bold"
        }}>상품요청 조회 </Text>
      </View>


      <ScrollView>


        <View style={{
          width: '100%',
          height: '90%',




        }}>

          <View style={{
            width: '100%',
            height: '20%',
            //backgroundColor: 'blue'

          }}>


            {
              enroll.map((el, index) => {

                var hey = {
                  tableHead: ["상품이름", "브랜드", "바코드", "사용자아이디", "사용자닉네임"],
                  tableData: [[el.name, el.brand, el.barcode, el.userId, el.userNickname]],

                }
                var hey_2 = {
                  tableHead: ["상품이미지URI", "상품상세이미지URI",],
                  tableData: [[el.product_image, el.info_image]],

                }

                console.log(hey)

                return (

                  <View key={index}>

                    <View style={{
                      width: '100%',
                      height: 230,
                      backgroundColor: '#DDEEF2',
                      marginTop: 30
                    }}>


                      <Table Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                        <Row data={hey.tableHead} style={styles.head} textStyle={styles.text} />
                        <Rows data={hey.tableData} textStyle={styles.text} />
                      </Table>
                      <View style={{
                        width: '100%',
                        height: 20
                      }}>

                      </View>
                      <Table Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                        <Row data={hey_2.tableHead} style={styles.head2} textStyle={styles.text} />
                        <Rows data={hey_2.tableData} style={styles.head2} textStyle={styles.text} />
                      </Table>


                      {
                        el.enable == 1 &&

                        <TouchableOpacity onPress={() => {
                          navigation.navigate('Real_Enroll', { data: el })
                        }}>
                          <View style={{
                            width: 100,
                            height: 40,
                            borderRadius: 10,
                            backgroundColor: '#FF4444',
                            alignContent: 'flex-end',
                            alignSelf: 'flex-end',
                            marginTop: 20,
                            marginRight: 10,
                          }}>
                            <Text style={{
                              fontFamily: 'Nam-Bold',
                              textAlign: 'center',
                              marginTop: 10,

                              color: 'white'
                            }}>
                              등록
                            </Text>
                          </View>
                        </TouchableOpacity>

                      }
                    </View>
                  </View>
                )

              })}






          </View>

        </View>

      </ScrollView >
    </View >

  )


}


Manager_Enroll.navigationOptions = () => {
  return {
    header: () => false,
  };
};


const styles = StyleSheet.create({
  container: {
    width: '100%', height: 330
    , padding: 16, paddingTop: 30, backgroundColor: '#fff'
  },
  container_2: {
    width: '100%', height: 250
    , padding: 16, paddingTop: 30, backgroundColor: '#fff'
  },

  head2: {
    width: '60%',
    height: 30, backgroundColor: '#f1f8ff'
  },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: {
    margin: 6, fontFamily: "Nam-Bold",
    fontSize: 9,
  },
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
    fontFamily: "Nam-Bold"

  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontFamily: "Nam-Bold",
    fontSize: 30,
    color: '#ffffff',
    marginLeft: 50

  },
  modalTextv: {
    marginBottom: 20,
    fontFamily: "Nam-Bold",
    fontSize: 20,
    color: '#FFFFFF'

  }

})
export default Manager_Enroll;
