
import * as Notifications from 'expo-notifications';
import { AntDesign } from '@expo/vector-icons';
import { createAppContainer, createSwitchNavigator } from "react-navigation";
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Componn from "./signup/Componn";
import { useFonts } from 'expo-font';
import { LogBox } from "react-native";

LogBox.ignoreLogs(["EventEmitter.removeListener"]);
import Constants from 'expo-constants';
import Change_State from "./Mypage/Change_State.js/Change_state";
import good_list from "./Mypage/good_list";
import AppLoading from "expo-app-loading";
import Enroll_page from "./Enroll_page/Enroll";
import React, { useEffect, useRef } from 'react';
import Manager from './Mypage/MANAGER/Manager';
import Edit from "./component/Edit";
import point from "./Mypage/point/point";
//import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createBottomTabNavigator } from 'react-navigation-tabs';
//import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from "react-navigation-stack";
import Gisa from './Gisa.js/Gisa';
import first from "./signup/first";
import second from "./signup/second";
import Ranking from './Ranking/Ranking';
import Danger from "./Mypage/Danger";
import search_item_first from "./search_item/search_item_first";
import fifth from "./signup/fifth";
import like_list from "./Mypage/like_list/like_list";
import main from "./component/main";
import Barcode from "./component/Barcode";
import Qna from "./Mypage/Qna/Qna";
//import Barcode from "./redux/Barcode";
import Test from './Item/Test';
import final from "./signup/fian";
import ingredient from "./signup/ingredient";
import nickname from "./signup/nickname";
import { Provider } from "react-redux";
import store from "./redux/store";
import Barcode_main from "./component/Barcode_main";
import Mypage_main from './Mypage/Mypage_main';
import Change_ingre from './Mypage/Change_State.js/Change_ingre';
import Search_item_seconde from "./search_item/Search_item_seconde";
//import Mypage_main from "./Mypage/Mypage_main";
import sung from './component/Component_inner.js/sung';
import Manager_Enroll from './Mypage/MANAGER/Manager_Enroll';
import Real_Enroll from './Mypage/MANAGER/Real_Enroll';
import Write_Enroll from './Mypage/MANAGER/Write_Enroll';
const navigator =
  createSwitchNavigator({
    //Mypage_main: Mypage_main,
    //Danger: Danger,
    //sung: sung,
    //Qna: Qna,
    //  Test: Test,
    // Enroll_page: Enroll_page,
    Edit: Edit,
    ///Qna: Qna,
    Manager: createStackNavigator({
      Manager: Manager,
      Manager_Enroll: Manager_Enroll,
      Real_Enroll: Real_Enroll,
      Write_Enroll: Write_Enroll

    }),







    signnup: createStackNavigator({


      Edit: Edit,

      first: first,
      nickname: nickname,
      second: second,
      fifth: fifth,
      ingredient: ingredient,



    }),
    botton: createBottomTabNavigator({
      Empty: {

        screen: Ranking,
        navigationOptions: {
          tabBarLabel: '랭킹',
          unmountOnBlur: true,
          tabBarIcon: ({ tintColor }) => (

            <AntDesign name="Trophy" size={25} style={{ color: tintColor }} />


          ),
          activeColor: '#404040',
          inactiveColor: '#404040',
          barStyle: { backgroundColor: '#DDEEF2' },
        }

      },

      mainn: createStackNavigator({
        main: main,
        Barcode_main: Barcode_main,
        search_item_first: search_item_first,
        Search_item_seconde: Search_item_seconde,
        Gisa: Gisa,
        sung: sung

      },
        {
          navigationOptions: {
            tabBarLabel: '메인',
            tabBarIcon: ({ tintColor }) => (

              <AntDesign name="home" size={25} style={{ color: tintColor }} />


            ),
            activeColor: '#404040',
            inactiveColor: '#404040',
            barStyle: { backgroundColor: '#DDEEF2' },
          }
        })
      ,
      Enroll_page: createStackNavigator({
        Enroll_page: Enroll_page,
        Barcode: Barcode
      }, {
        navigationOptions: {
          tabBarLabel: '등록',
          tabBarIcon: ({ tintColor }) => (

            <AntDesign name="upload" size={25} style={{ color: tintColor }} />


          ),
          activeColor: '#404040',
          inactiveColor: '#404040',
          barStyle: { backgroundColor: '#DDEEF2' },
        }
      }),

      Mypage_main: createStackNavigator({

        Mypage_main: Mypage_main,
        good_list: good_list,
        like_list: like_list,
        point: point,
        Danger: Danger,
        Change_State: Change_State,
        Change_ingre: Change_ingre,
        Qna: Qna


      }, {
        navigationOptions: {
          tabBarLabel: '설정',
          tabBarIcon: ({ tintColor }) => (

            <AntDesign name="setting" size={25} style={{ color: tintColor }} />


          ),
          unmountOnBlur: true,
          activeColor: '#404040',
          inactiveColor: '#404040',
          barStyle: { backgroundColor: '#DDEEF2' },
        },

      }, {

        shifting: true,
      })



    }, {

      tabBarOptions: {
        activeTintColor: 'black',
        inactiveTintColor: 'black',
        style: {
          backgroundColor: '#DDEEF2',
        },
      },
    },)


  })



const registerForPushNotificationsAsync = async () => {
  let token;

  if (Constants.isDevice) {
    // we check if we have access to the notification permission
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;


    if (existingStatus !== 'granted') {
      // if we dontt have access to it, we ask for it
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      // user doesnt allow us to access to the notifications
      alert('Failed to get push token for push notification!');
      return;
    }

    // obtain the expo token
    token = (await Notifications.getExpoPushTokenAsync()).data;

    // log the expo token in order to play with it
    console.log(token);
  } else {

    // notifications only work on physcal devices
    alert('Must use physical device for Push Notifications');
  }

  // some android configuration
  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }
  console.log(token)
  return token;
}



const App = createAppContainer(navigator);
export default () => {

  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    }),
  });
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    // Register for push notification
    const token = registerForPushNotificationsAsync();
    console.log('토큰확인')
    console.log(token)
    // This listener is fired whenever a notification is received while the app is foregrounded
    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      notificationCommonHandler(notification);
    });

    // This listener is fired whenever a user taps on or interacts with a notification 
    // (works when app is foregrounded, backgrounded, or killed)
    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      notificationCommonHandler(response.notification);
      notificationNavigationHandler(response.notification.request.content);
    });

    // The listeners must be clear on app unmount
    return () => {
      Notifications.removeNotificationSubscription(notificationListener);
      Notifications.removeNotificationSubscription(responseListener);
    };
  }, []);

  const notificationCommonHandler = (notification) => {
    // save the notification to reac-redux store
    console.log('A notification has been received', notification)
  }


  const notificationNavigationHandler = ({ data }) => {
    // navigate to app screen
    console.log('A notification has been touched', data)
  }
  const [fontsLoading] =
    useFonts({
      'Aullia': require('./assets/fonts/Aullia.otf'),
      'Nam-Regular': require('./assets/fonts/NanumMyeongjo-Bold.ttf'),
      'Nam-Bold': require('./assets/fonts/NanumMyeongjo-Bold.ttf'),
      'Nam-ExtraBold': require('./assets/fonts/NanumMyeongjo-ExtraBold.ttf'),
    })

  if (!fontsLoading) {
    return <AppLoading></AppLoading>
  }



  return (
    <Provider store={store}>
      <App></App>
    </Provider>
  )

}