import axios from "axios"
import React, { useState, useRef, useEffect, useContext } from 'react';
import {
 Text, View, TouchableOpacity, Alert,
 Button,
 Dimensions,
 StyleSheet,
 Vibration,

} from 'react-native';
//import { Context } from '../contextv/DetailContext'

import { BarCodeScanner } from 'expo-barcode-scanner';

const Barcode = ({ navigation }) => {

 const [hasPermission, setHasPermission] = useState(null);
 //const { create_Barcode, delete_Barcode } = useContext(Context);
 const [scanned, setScanned] = useState(false);



 //const myIcon = (<Icon name="rocket" size={30} color="black" />)
 useEffect(() => {



  (async () => {
   const { status } = await BarCodeScanner.requestPermissionsAsync();
   setHasPermission(status === 'granted');
  })();
 }, []);

 const handleBarCodeScanned = ({ type, data }) => {
  setScanned(true);
  //navigation.navigate('Enroll_page', { data: data })
  //create_Barcode(data, () => navigation.pop())
  /*
axios.post("http://182.215.108.120:5000/product/detail", {
 barcode: data
})
 .then((response) => {
   if (response) {
     console.log('?? first');
     console.log(response.data)
     setcheck(response.data);
     //setUser(response);
   } else {
     alert("failed to ");
   }
 }).catch((err) => {
   console.log(err.message);
   console.log(err)
   console.log('?');
 });
 */
  alert(`바코드 번호는 ${data} 입니다. `);



 };

 if (hasPermission === null) {
  return <Text>Requesting for camera permission</Text>;
 }
 if (hasPermission === false) {
  return <Text>No access to camera</Text>;
 }

 return (
  <View style={styles.container}>
   <BarCodeScanner
    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
    style={StyleSheet.absoluteFillObject}
   />
   {scanned &&
    <TouchableOpacity onPress={() => {
     setScanned(false)

    }} >
     <View style={{
      backgroundColor: 'white',
      width: '22%',
      height: '15%',
      borderRadius: 90,
      position: 'relative',
      bottom: 0,
      marginLeft: '75%',
      marginTop: '130%'
     }}>

     </View>

    </TouchableOpacity>


   }
  </View>
 );

}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height,
 },
 scanner: { flex: 1 },
 btn: {
  position: 'absolute',
  top: 20
 }
});

export default Barcode;