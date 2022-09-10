
import { useSelector, useDispatch } from 'react-redux'
import React, { useState, useContext, useEffect } from "react"
import { View, TextInput, TouchableOpacity, Button, StyleSheet, Text, Image } from "react-native"
import { AntDesign } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';

import Modal from "react-native-modal";

import { Pressable } from 'react-native';

const Gisa_Com = function ({ navigation, good }) {
 const token = useSelector((state) => state.token.token);
 const [modalVisible, setModalVisible] = useState(false);
 const [inner, setinner] = useState([]);
 const [contex_V, spli_contex] = useState([]);
 console.log(inner)
 console.log(contex_V)
 useEffect(() => {

  axios.get(`http://13.209.73.153:5000/article/${good.id}`,

   {
    headers: {
     'X-AUTH-TOKEN': token

    }
   }
  ).then((response) => {
   if (response) {
    console.log('기사 조회 페이지 ');
    setinner(response.data);
    //setUser(response);
    var good = inner.content.split('.')
    spli_contex(good)
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
   backgroundColor: '#F4F4F4',
   height: 100,
   width: '90%',
   margin: 10,
   marginLeft: 20,
   borderRadius: 10

   //eight: '35%'
  }}>
   <TouchableOpacity onPress={() => {
    setModalVisible(true)
   }}>
    <View>


     <Modal
      animationType="slide"
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
         flexDirection: 'row',
         alignItems: "center",
         justifyContent: 'center'
        }}>
         <View style={{
          width: '100%',
          height: 120,
          margin: 0
         }}>

          <Pressable
           style={[styles.button, styles.buttonClose]}
           onPress={() => setModalVisible(!modalVisible)}
          >
           <AntDesign style={{
            alignSelf: 'flex-end'
           }} name="closecircleo" size={35} color="white" />
          </Pressable>
          <Text style={{
           fontSize: 13,
           textAlign: 'center',
           fontFamily: "Nam-Bold",
           color: 'white',
           marginTop: 20
          }}>{inner.title}</Text>

          <View style={{
           width: '100%',
           height: 350,
           marginTop: 30,
           backgroundColor: 'white',
           borderRadius: 10,
          }}>
           <ScrollView>
            {
             contex_V.map(el => {
              return <Text style={{
               fontSize: 13,
               margin: 5,

               fontFamily: 'Nam-Bold'
              }}>
               {el}
              </Text>
             })
            }


           </ScrollView>
          </View>
         </View>
        </View>




       </View><View>

       </View>
      </View>


     </Modal>



     <Text style={{
      fontSize: 14,
      textAlign: 'center',
      fontFamily: "Nam-Bold",
      marginTop: 20
     }}>{inner.title}</Text>

     <View style={{
      width: '60%',
      height: 40,
      display: 'flex',
      alignSelf: 'flex-end',

      margin: 20,
      flexDirection: 'row'
     }}>
      <Text style={{
       fontFamily: 'Nam-Bold',
       margin: 10,
       marginLeft: 40,

      }}>
       #{inner.keyword1}
      </Text >
      <Text style={{
       fontFamily: 'Nam-Bold',
       marginTop: 10
      }}>
       #{inner.keyword2}
      </Text>
      <Text style={{
       fontFamily: 'Nam-Bold', marginTop: 10,
       marginLeft: 10,
      }}>
       #{inner.keyword3}
      </Text>


     </View>
    </View>
   </TouchableOpacity >
  </View >




 )


}
Gisa_Com.navigationOptions = () => {
 return {
  header: () => false,
 };
};

const styles = StyleSheet.create({
 centeredView: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",


  opacity: 0.98
 },
 modalView: {
  width: '90%',
  height: '80%',
  margin: 20,
  backgroundColor: "#444040",

  borderRadius: 20,
  padding: 10,
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



})

export default Gisa_Com;
