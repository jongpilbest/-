import { BarCodeScanner } from "expo-barcode-scanner";
import React, { useState, useContext, useEffect, useRef } from "react"
import { View, Image, TextInput, TouchableOpacity, Button, StyleSheet, Text, ViewBase } from "react-native"
import * as ImagePicker from 'expo-image-picker';
import { Pressable } from 'react-native';
import Modal from "react-native-modal";
import RNPickerSelect from 'react-native-picker-select';

//import { Context } from "../contextv/DetailContext";
//import { hydrate } from "react-dom";
//import Barcode from "../component/barCode";
var check = 1;
var hangul = '아라'
const Enroll_new = ({ navigation, misu, hey }) => {


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
  console.log(result);

  setImageUrl(result.uri);
 };
 const checkmisu = function () {

  if (!hey) {
   return '바코드'
  }
  else if (hey) {
   return;
  }
 }

 const full_of = function () {
  if (id && imageUrl && heyvalue && hey) {

   console.log('다 채움요')
  }
  else if (!id || !imageUrl || !heyvalue || !hey) {
   console.log('비어잇는듯')
   check = '채워주세요!'
   return check

  }


 }

 return (

  <View style={{
   flexDirection: 'row',
   width: '95%',
   height: 200,
   backgroundColor: '#D2D2D2',
   marginTop: '10%',
   flexDirection: 'column',
   borderRadius: 20,
   marginLeft: 10

  }}>
   <View style={{
    width: '90%',
    height: 40,
    alignContent: 'center',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,

   }}>


    <TextInput
     style={{
      margin: 10
     }}
     value={id}
     placeholder="   상품 이름을 입력해주세요"
     placeholderTextColor={'#B9B9B9'}
     autoCorrect={false}
     onChangeText={(ele) => setid(ele)}>

    </TextInput>

   </View>

   <View style={{
    width: '90%',
    height: 100,


   }}>


    <TouchableOpacity onPress={uploadImage}>

     <View style={{
      width: 140,
      height: 100,
      borderRadius: 20,
      marginLeft: 20,
      backgroundColor: 'white'
     }}>

      <Image
       style={{
        height: '100%',
        width: '100%',
        margin: 0,
        padding: 0,
        borderRadius: 20

        //       borderRadius: '50%',
       }}
       source={{ uri: imageUrl }}
      />

     </View>
    </TouchableOpacity>
    <View style={{
     width: 150,
     height: 40,
     position: 'absolute',
     left: 180,
     backgroundColor: 'white',
     borderRadius: 20,
     margin: 0,
     padding: 0

    }}>
     <RNPickerSelect
      onValueChange={(value) => {

       setvalue(value);
       console.log(value)
      }}
      items={[
       { label: 'Football', value: 'football' },
       { label: 'Baseball', value: 'baseball' },
       { label: 'Hockey', value: 'hockey' },
      ]}
     />
     <TouchableOpacity onPress={() => {
      misu();
     }}>
      <View style={{
       width: 150,
       height: 40,
       marginTop: 50,
       //position: 'absolute',
       //left: 180,
       //top: 0,


       backgroundColor: 'white',
       borderRadius: 20

      }}>

       <View>
        <Text style={{
         color: '#B9B9B9',
         marginTop: 10,
         marginLeft: 20,
         // textAlign: 'center'
        }}>{checkmisu()}</Text>

        <Text>{hey}</Text>
       </View>


      </View>

     </TouchableOpacity>

    </View>


   </View >

   <View style={{

   }}>
    <Text style={{
     fontSize: 18,
     marginLeft: 20,
     color: '#7C7C7C',
     marginTop: 30,
     fontWeight: 'bold',
    }}>{full_of()}</Text>
    <TouchableOpacity onPress={() => {
     full_of();
    }}>
     <View style={{
      borderRadius: 20,
      width: '70%',
      height: 40,
      margin: 60,
      backgroundColor: '#D2E6FF'
     }}>
      <Text style={{
       fontSize: 20,
       alignSelf: "center",
       color: '#7C7C7C',
       position: 'absolute',
       fontWeight: 'bold',

       marginTop: '5%',
      }}>추가하기</Text>

     </View>
    </TouchableOpacity>
   </View>
  </View >

 )
}

export default Enroll_new