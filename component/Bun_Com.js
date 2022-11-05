
import { useSelector, useDispatch } from 'react-redux'
import React, { useState, useContext, useEffect } from "react"
import { View, Pressable, TextInput, TouchableOpacity, Button, StyleSheet, Text } from "react-native"
import Modal from "react-native-modal";
import { AntDesign } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
const Bun_Com = function ({ data }) {

 const [modalVisible, setModalVisible] = useState(false);
 const hey = data.bad.split('.');
 return (
  <View style={{

   width: 150,
   height: 150,
   backgroundColor: 'white',
   margin: 10,
   borderRadius: 5


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

       <Text style={styles.modalText}>{data.name}</Text>

       <Pressable
        style={[styles.button, styles.buttonClose]}
        onPress={() => setModalVisible(!modalVisible)}
       >
        <AntDesign style={{
         alignSelf: 'flex-end'
        }} name="closecircleo" size={37} color="black" />
       </Pressable>
      </View>
      <ScrollView>
       <View style={{
        flexDirection: 'row',
        
        width: '60%',
        height: '10%',

        marginLeft: 20
       }}>

        <View style={{
         backgroundColor: 'white',
         marginLeft: 20,
         borderRadius: 5
        }}>

        </View>

        <View style={{
         backgroundColor: 'white',
         marginLeft: 20,
         borderRadius: 5
        }}>

        </View>

       </View><View>
        <Text style={styles.modalTextv}>
         설명
        </Text>
        <ScrollView>
         <View style={{
          width: '98%',
          height: 200,

          margin: 10
         }}>
          <Text style={{
           fontFamily: 'Sc',
           fontSize: 15,
           color: '#F2F2F2'
          }}>
           {data.good}
          </Text>

         </View>
        </ScrollView>
       </View>
       <View>
        <Text style={styles.modalTextv}>
         단점
        </Text>
        <ScrollView>
         <View style={{
          width: '95%',
          height: 250,

          margin: 10
         }}>

          {hey.map(el => {
           return <Text style={{
            fontFamily: 'Sc',
            fontSize: 15,
            color: '#F2F2F2'

           }}>{el}</Text>
          })}


         </View>
        </ScrollView>
       </View>
      </ScrollView>
     </View>

    </View>
   </Modal >














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
      fontFamily: "Sc",
      color: '#545252'
     }}>
      {data.name}
     </Text>




    </View>
   </TouchableOpacity>



  </View >




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
  height: '80%',
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
  backgroundColor: "#F2F2F2",
 },
 buttonClose: {
  backgroundColor: "#F2F2F2",
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
  fontFamily: 'Sc'

 },
 modalTextv: {
  marginBottom: 15,

  fontSize: 30,
  color: '#FFE978'

 }

})


export default Bun_Com;
