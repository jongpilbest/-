import axios from "axios"
import React, { useState, useRef, useEffect, useContext } from 'react';
import {
 Text, View, TouchableOpacity, Alert,
 Button,
 Dimensions,
 StyleSheet,
 Vibration,

} from 'react-native';
import { Context } from '../contextv/DetailContext'
import { barcodeAction } from "../redux/auth";



import { useSelector, useDispatch } from 'react-redux'


import { BarCodeScanner } from 'expo-barcode-scanner';

const Barcode_main = ({ navigation }) => {
 // var state_state = (Context._currentValue.state.Barcode);
 //var state_ = (Context._currentValue.state.Barcode);
 //const [scaned, setScaned] = useState(true);
 // const [hasPermission, setHasPermission] = useState(null);
 // const [type, setType] = useState(CameraType.back);
 const [hasPermission, setHasPermission] = useState(null);
 // const { create_Barcode, delete_Barcode } = useContext(Context);
 const [scanned, setScanned] = useState(false);

 const dispatch = useDispatch();

 //const myIcon = (<Icon name="rocket" size={30} color="black" />)
 useEffect(() => {

  //delete_Barcode();

  (async () => {
   const { status } = await BarCodeScanner.requestPermissionsAsync();
   setHasPermission(status === 'granted');
  })();
 }, []);

 const handleBarCodeScanned = ({ type, data }) => {
  setScanned(true);
  //navigation.navigate('Enroll_page', { data: data })
  //create_Barcode(data, () => navigation.pop())
  console.log('?')
  /*
  axios.post("http://13.209.83.188:5000/product/detail/barcode", {
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

  //dispatch(barcodeAction.setbarcode(data));



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

export default Barcode_main;