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

 const [name, setname] = useState('');
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
  if (name && imageUrl && heyvalue && hey) {

   console.log('다 채움요')
  }
  else if (!name || !imageUrl || !heyvalue || !hey) {
   console.log('비어잇는듯')
   check = '비어있는 항목이 존재합니다.'
   return check

  }


 }

 return (

  <View style={{
   flexDirection: 'row',
   width: '95%',
   height: 330,
   backgroundColor: '#DDEEF2',
   marginTop: '15%',
   flexDirection: 'column',
   borderRadius: 20,
   marginLeft: 10

  }}>
   <View style={{

    width: '100%',
    height: 200,
    // backgroundColor: 'pink'
   }}>

    <TouchableOpacity onPress={uploadImage}>

     <View style={{
      width: 160,
      height: 180,
      borderRadius: 20,
      marginLeft: 20,
      marginTop: 10,
      backgroundColor: 'white',
      alignSelf: 'center'
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
     height: 50,
     flexDirection: 'row'
    }}>
     <Text style={{
      fontFamily: "Nam-Bold",
      fontSize: 13,
      margin: 15
     }}> 상품명</Text>


     <TextInput
      style={{
       width: '75%',
       height: 35,
       borderRadius: 10,
       borderColor: 'transparent',
       borderWidth: 3,

       justifyContent: 'center',
       alignSelf: 'center',
       backgroundColor: 'white',
       margin: 10,
       //padding: 20,
       fontSize: 10,
       fontFamily: "Nam-Bold"
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
       fontFamily: "Nam-Bold",
       fontSize: 13,
       margin: 15
      }}> 바코드</Text>
      <TouchableOpacity onPress={() => {
       misu();
      }}>
       <View style={{
        width: 100,

        height: 35,

        margin: 10,
        backgroundColor: 'white',
        borderRadius: 10

       }}>

        <View>
         <Text style={{
          color: '#B9B9B9',
          marginTop: 10,

          //padding: 20,
          fontSize: 10,
          marginLeft: 5,
          fontFamily: "Nam-Bold",
          // textAlign: 'center'
         }}>{checkmisu()}</Text>

         <Text style={{
          fontSize: 10,
          marginLeft: 5,
          fontFamily: "Nam-Bold",

         }}>{hey}</Text>
        </View>


       </View>

      </TouchableOpacity>
      <Text style={{
       fontFamily: "Nam-Bold",
       fontSize: 13,
       marginTop: 15,
       margin: 5,
      }}> 회사</Text>
      <View style={{
       width: 110,

       height: 35,

       margin: 10,
       backgroundColor: 'white',
       borderRadius: 10


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


      </View>

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
     fontSize: 13,
     marginLeft: 20,
     fontFamily: "Nam-Bold",
     marginTop: 40,
     color: 'red',

     fontWeight: 'bold',
    }}>{full_of()}</Text>

    <TouchableOpacity onPress={() => {

    }}>
     <View style={{
      borderRadius: 20,
      width: '60%',
      height: 35,
      marginTop: 30,
      marginLeft: 90,
      backgroundColor: '#DDEEF2'
     }}>
      <Text style={{
       fontSize: 13,
       alignSelf: "center",

       position: 'absolute',
       fontWeight: 'bold',
       fontFamily: "Nam-Bold",
       marginTop: 10,
      }}>추가하기</Text>

     </View>
    </TouchableOpacity>



   </View >

   <View style={{

   }}>


   </View>
  </View >

 )
}

export default Enroll_new