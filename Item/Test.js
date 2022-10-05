


import React, { useContext, useEffect } from "react";
import { View, Text, FlatList, Button, StyleSheet, ScrollView, TouchableOpacity, TurboModuleRegistry } from "react-native";
//import d from '../assets/Item/01.png'
//import { Context } from '../contextv/DetailContext'
//import * as Notifications from 'expo-notifications';
import { Permissions, Notifications } from "expo";


const Test = function () {

 const registerForPushNotificationsAsync = async () => {
  if (Device.isDevice) {
   const { status: existingStatus } = await Notifications.getPermissionsAsync();
   let finalStatus = existingStatus;
   if (existingStatus !== 'granted') {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
   }
   if (finalStatus !== 'granted') {
    alert('Failed to get push token for push notification!');
    return;
   }
   const token = (await Notifications.getExpoPushTokenAsync()).data;
   console.log(token);
   this.setState({ expoPushToken: token });
  } else {
   alert('Must use physical device for Push Notifications');
  }

  if (Platform.OS === 'android') {
   Notifications.setNotificationChannelAsync('default', {
    name: 'default',
    importance: Notifications.AndroidImportance.MAX,
    vibrationPattern: [0, 250, 250, 250],
    lightColor: '#FF231F7C',
   });
  }
 };

 const gogo_misu = function () {
  console.log('ㅔㅕ노')
  Notifications.scheduleNotificationAsync({
   content: {
    title: "등록이 완료됐습니다",
    body: 'Change sides!',
    data: { userName: 'MAX' }
   },
   trigger: {
    seconds: 1, //onPress가 클릭이 되면 60초 뒤에 알람이 발생합니다.
   },
  });

 }
 return (
  <View style={{

   marginTop: 100
  }}>


   <Button
    title="Press Me"
    onPress={() => {

     gogo_misu();


    }}
   >

   </Button>

  </View>
 )

}

export default Test;
