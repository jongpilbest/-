
import { useSelector, useDispatch } from 'react-redux'
import React, { useState, useContext, useEffect } from "react"
import { View, Pressable, TextInput, TouchableOpacity, Button, StyleSheet, Text } from "react-native"
import Modal from "react-native-modal";
import { AntDesign } from '@expo/vector-icons';
const Sung_com = function ({ data }) {

 const [modalVisible, setModalVisible] = useState(false);

 return (
  <View style={{

   width: 150,
   height: 150,
   backgroundColor: '#DDEEF2',
   margin: 10,
   borderRadius: 20,


  }} >
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

      }}>

       <Text style={styles.modalText}>단백질</Text>

       <Pressable
        style={[styles.button, styles.buttonClose]}
        onPress={() => setModalVisible(!modalVisible)}
       >
        <AntDesign style={{
         alignSelf: 'flex-end'
        }} name="closecircleo" size={35} color="black" />
       </Pressable>
      </View>
      <View style={{
       flexDirection: 'row',
       display: 'flex-start',
       width: '60%',
       height: '10%',

       marginLeft: 20
      }}>

       <View style={{
        backgroundColor: '#7C7C7C',
        marginLeft: 20,
        borderRadius: 20
       }}>

       </View>

       <View style={{
        backgroundColor: '#7C7C7C',
        marginLeft: 20,
        borderRadius: 20
       }}>

       </View>

      </View><View>
       <Text style={styles.modalTextv}>
        영양성분
       </Text>

      </View>
      <View>
       <Text style={styles.modalTextv}>
        원재료
       </Text>
      </View>
     </View>

    </View>
   </Modal>














   <TouchableOpacity onPress={() => {



    setModalVisible(true)

   }}>
    <View style={{
     width: '100%',
     height: 55,
     margin: 20
    }}>


     <Text style={{
      fontSize: 20,
      fontFamily: "Nam-Bold",
      color: 'black'
     }}>
      {data}
     </Text>




    </View>
   </TouchableOpacity>



  </View>




 )


}

const styles = StyleSheet.create({
 centeredView: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  marginTop: 22
 },
 modalView: {
  width: '99%',
  height: '90%',
  margin: 20,
  backgroundColor: "#444040",
  opacity: 0.99,

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
  backgroundColor: "#DDEEF2",
 },
 buttonClose: {
  backgroundColor: "#DDEEF2",
  width: 60,
  height: 60,
  marginLeft: 120
 },
 textStyle: {
  color: "white",
  fontWeight: "bold",
  fontSize: 20

 },
 modalText: {



  fontSize: 30,
  color: 'white',
  fontFamily: 'Nam-Bold'

 },
 modalTextv: {
  marginBottom: 15,

  fontSize: 30,
  color: '#71A6E3'

 }

})


export default Sung_com;
