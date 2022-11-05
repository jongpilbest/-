import { BarCodeScanner } from "expo-barcode-scanner";
import React, { useState, useContext, useEffect, useRef } from "react"
import { View, Image, TextInput, TouchableOpacity, Button, StyleSheet, Text, ViewBase } from "react-native"
import * as ImagePicker from 'expo-image-picker';
import { Pressable } from 'react-native';
import Modal from "react-native-modal";
import RNPickerSelect from 'react-native-picker-select';
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux'
//import { Context } from "../contextv/DetailContext";
//import { hydrate } from "react-dom";
//import Barcode from "../component/barCode";
var check = 1;
var hangul = '아라'
const Enroll_new = ({ navigation, misu, hey }) => {
 const token = useSelector((state) => state.token.token)
 const [name, setname] = useState('');
 const [work, setwork] = useState('');
 const [modalVisible, setModalVisible] = useState(false);
 const [heyvalue, setvalue] = useState('')
 const [imageUrl, setImageUrl] = useState('h');
 // 권한 요청을 위한 hooks
 const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();
 console.log('here')
 const [id, setid] = useState('')

 const uploadImage = async () => {
  // 권한 확인 코드: 권한 없으면 물어보고, 승인하지 않으면 함수 종료
  if (!status?.granted) {
   const permission = await requestPermission();
   if (!permission.granted) {
    return null;
   }
  }
  // 이미지 업로드 기능
  const result = await ImagePicker.launchImageLibraryAsync({
   mediaTypes: ImagePicker.MediaTypeOptions.Images,
   allowsEditing: false,
   quality: 1,
   aspect: [1, 1]
  });
  if (result.cancelled) {
   return null; // 이미지 업로드 취소한 경우
  }
  // 이미지 업로드 결과 및 이미지 경로 업데이트
  console.log('이미지 화깅ㄴ')
  console.log(result.uri);

  setImageUrl(result.uri);


 }
 const checkmisu = function () {

  if (!hey) {
   return '바코드'
  }
  else if (hey) {
   return;
  }
 }

 const full_of = function () {

  if (name && imageUrl && hey && work) {

   return
  }
  else if (!name || !imageUrl || !heyvalue || !work) {
   console.log('비어잇는듯')
   check = '비어 있는 항목이 존재합니다'
   return check

  }


 }

 return (

  <View style={{
   flexDirection: 'row',
   width: '95%',
   height: 350,
   backgroundColor: 'white',

   marginTop: '15%',
   flexDirection: 'column',

   borderRadius: 5,
   marginLeft: 10

  }}>




   <View style={{

    width: '100%',
    height: 200,
    // backgroundColor: 'pink'
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
        상품등록이 요청되었습니다
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
          borderRadius: 5,
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
    <TouchableOpacity onPress={uploadImage}>

     <View style={{
      width: 160,
      height: 170,
      borderRadius: 5,
      marginLeft: 20,
      marginTop: 20,
      backgroundColor: '#FFE978',

      alignSelf: 'center'
     }}>

      <Image
       style={{
        height: '100%',
        width: '100%',
        margin: 0,
        padding: 0,
        borderRadius: 10

        //       borderRadius: '50%',
       }}
       source={{ uri: imageUrl }}
      />

     </View>
    </TouchableOpacity>
   </View>

   <View style={

    {
     width: '100%',
     height: 100,
     // backgroundColor: 'pink'
    }
   }>
    <View style={{
     width: '100%',
     height: 30
    }}>

    </View>
    <View style={{
     width: '100%',
     height: 50,

     flexDirection: 'row'
    }}>
     <Text style={{
      fontFamily: "Sc",
      fontSize: 14,
      marginLeft: 15,
      marginTop: 18,
      marginRight: 15,
      color: '#545252'
     }}> 상품명</Text>


     <TextInput
      style={{
       width: '75%',
       height: 30,
       borderRadius: 5,
       backgroundColor: 'white',

       justifyContent: 'center',
       alignSelf: 'center',

       margin: 10,
       //padding: 20,
       fontSize: 10,

       fontFamily: "Sc"
      }}
      value={name}
      placeholder="상품명을 입력해주세요"
      placeholderTextColor={'#B9B9B9'}
      autoCorrect={false}
      onChangeText={(ele) => setname(ele)}>

     </TextInput>
    </View>
    <View style={{
     width: '100%',
     height: 50,
     // backgroundColor: 'blue',



    }}>
     <View style={{
      flexDirection: 'row'
     }}>
      <Text style={{
       fontFamily: "Sc",
       marginLeft: 15,
       marginTop: 18,
       fontSize: 14,
       marginRight: 15,
       color: '#545252'
      }}> 바코드</Text>
      <TouchableOpacity onPress={() => {
       misu();
      }}>
       <View style={{
        width: 100,

        height: 30,

        margin: 10,

        backgroundColor: 'white',


        borderRadius: 5

       }}>

        <View>
         <Text style={{
          color: '#B9B9B9',


          //padding: 20,
          fontSize: 10,
          marginLeft: 5,
          marginTop: 12,
          fontFamily: "Sc",
          // textAlign: 'center'
         }}>{checkmisu()}</Text>

         <Text style={{
          fontSize: 10,
          marginLeft: 5,
          fontFamily: "Sc",

         }}>{hey}</Text>
        </View>


       </View>

      </TouchableOpacity>
      <Text style={{
       fontFamily: "Sc",
       fontSize: 14,
       marginLeft: 5,
       marginTop: 18,
       marginRight: 7,
       color: '#545252'
      }}> 회사</Text>


      <TextInput
       style={{
        width: '30%',
        height: 30,
        borderRadius: 5,
        backgroundColor: 'white',


        justifyContent: 'center',
        alignSelf: 'center',

        margin: 10,
        //padding: 20,
        fontSize: 10,
        fontFamily: "Sc"
       }}
       value={work}
       placeholder="회사명을 입력해주세요"
       placeholderTextColor={'#B9B9B9'}
       autoCorrect={false}
       onChangeText={(ele) => setwork(ele)}>

      </TextInput>

     </View>


    </View>

    <View>

    </View>

   </View>


   <View style={{
    width: '90%',
    height: 90,
    marginTop: 10,
    //backgroundColor: 'pink'


   }}>
    <Text style={{
     fontSize: 15,
     marginLeft: 20,
     fontFamily: "Sc",
     marginTop: 70,
     color: '#545252',

     fontWeight: 'bold',
    }}>{full_of()}</Text>

    <TouchableOpacity onPress={() => {


     axios.post("http://15.165.76.99:5000/product/requestProduct", {

      "name": name,
      "brand": work,
      "product_image": imageUrl,
      "barcode": hey

     },
      {
       headers: {
        'X-AUTH-TOKEN': token

       }
      }
     ).then((response) => {
      if (response) {
       console.log('?등록완료')
       // console.log(total_response)
       setModalVisible(true);
       setname("");
       setwork("");
       setvalue("");
       setImageUrl("h");

      }
     }).catch((err) => {
      console.log(err.message);

     });

     console.log(hey, name, work, imageUrl)

    }}>
     <View style={{
      borderRadius: 5,
      width: '112%',
      height: 40,
      marginTop: 30,


      backgroundColor: '#545252'
     }}>
      <Text style={{
       fontSize: 14,
       alignSelf: "center",

       position: 'absolute',
       color: 'white',
       fontWeight: 'bold',
       fontFamily: "Sc",
       marginTop: 13,
      }}>등록하기</Text>

     </View>
    </TouchableOpacity>



   </View >

   <View style={{

   }}>


   </View>
  </View >

 )
}

const styles = StyleSheet.create({
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
export default Enroll_new